import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ServiceDetail } from "../../data/services";
import React, { useRef } from "react";

interface HeroVisualsProps {
    service: ServiceDetail;
}

export default function HeroVisuals({ service }: HeroVisualsProps) {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for tilt
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    // Transform values for 3D effect
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);
    const sheenGradient = useTransform(
        mouseX,
        [-0.5, 0.5],
        ["linear-gradient(115deg, transparent, rgba(255,255,255,0) 0%)", "linear-gradient(115deg, transparent, rgba(255,255,255,0.1) 100%)"]
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;

        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-video perspective-1000">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full rounded-2xl bg-gray-900 border border-white/10 shadow-2xl overflow-hidden group cursor-pointer"
            >
                {/* Main Image */}
                <div className="absolute inset-0 bg-gray-900">
                    {/* Fallback pattern if image fails or loading */}
                    <div className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `radial-gradient(circle at 50% 50%, ${service.gradientMap.via} 0%, transparent 60%)`
                        }}
                    />

                    <img
                        src={service.heroImage}
                        alt={`${service.title} Visualization`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>

                {/* Glass Overlay / Sheen */}
                <motion.div
                    style={{ background: sheenGradient }}
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Floating Elements (Parallax) */}
                <motion.div
                    style={{ zIndex: 10, transform: "translateZ(30px)" }}
                    className="absolute bottom-6 left-6 right-6 hidden md:flex items-center gap-4"
                >
                    {/* Glass Card Overlay */}
                    <div className="flex-1 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${service.gradientMap.from}30` }}>
                            {React.createElement(service.icon, { className: "w-5 h-5 text-white" })}
                        </div>
                        <div>
                            <p className="text-xs text-gray-300 uppercase tracking-wider font-bold">{service.impactWord}</p>
                            <p className="text-sm text-white font-medium">AI-Powered Analysis Active</p>
                        </div>
                        <div className="ml-auto">
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Live
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Border Glow */}
                <div
                    className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/50 transition-all duration-500"
                    style={{
                        boxShadow: `inset 0 0 40px ${service.gradientMap.via}20`,
                    }}
                />
            </motion.div>

            {/* Background Glow (Behind the card) */}
            <div
                className="absolute inset-4 -z-10 blur-[60px] opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none"
                style={{ background: `linear-gradient(45deg, ${service.gradientMap.from}, ${service.gradientMap.to})` }}
            />
        </div>
    );
}
