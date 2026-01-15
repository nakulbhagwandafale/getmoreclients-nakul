'use client';

import React, { useRef, type PropsWithChildren } from 'react';
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    type MotionValue,
} from 'framer-motion';

const DockContext = React.createContext<{
    mouseX: MotionValue<number>;
} | null>(null);

function useDock() {
    const context = React.useContext(DockContext);
    if (!context) {
        throw new Error('useDock must be used within a Dock component');
    }
    return context;
}

interface DockProps {
    className?: string;
    children: React.ReactNode;
}

export function Dock({ className = '', children }: DockProps) {
    const mouseX = useMotionValue(Infinity);

    return (
        <DockContext.Provider value={{ mouseX }}>
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className={`flex h-16 items-end gap-4 rounded-2xl bg-gray-900/80 backdrop-blur-md px-4 pb-3 border border-purple-500/20 ${className}`}
            >
                {children}
            </motion.div>
        </DockContext.Provider>
    );
}

interface DockItemProps {
    className?: string;
    children: React.ReactNode;
}

export function DockItem({ className = '', children }: DockItemProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { mouseX } = useDock();

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className={`aspect-square rounded-full flex items-center justify-center relative group ${className}`}
        >
            {children}
        </motion.div>
    );
}

export function DockLabel({ children }: PropsWithChildren) {
    return (
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-purple-500/30 z-50">
            {children}
        </span>
    );
}

export function DockIcon({ children }: PropsWithChildren) {
    return (
        <div className="flex h-full w-full items-center justify-center">
            {children}
        </div>
    );
}
