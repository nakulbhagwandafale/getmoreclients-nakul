import React from "react";
import { cn } from "../../lib/utils";

interface GradientBorderCardProps extends React.HTMLAttributes<HTMLDivElement> {
    containerClassName?: string;
}

export const GradientBorderCard = ({
    children,
    className,
    containerClassName,
    ...props
}: GradientBorderCardProps) => {
    return (
        <div
            className={cn(
                "relative group w-full h-full p-[1px] overflow-hidden rounded-3xl",
                containerClassName
            )}
            {...props}
        >
            {/* Animated Gradient Border Layer */}
            <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#09090b_50%,#09090b_60%,#a855f7_70%,#3b82f6_80%,#06b6d4_90%,#ec4899_100%)] opacity-70 group-hover:opacity-100 transition-all duration-500 will-change-transform" />

            {/* Inner Content Container */}
            <div className={cn(
                "relative w-full h-full bg-[#0a0118]/90 backdrop-blur-xl rounded-[23px] overflow-hidden transition-colors duration-500",
                className
            )}>
                {/* Optional Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {children}
            </div>
        </div>
    );
};
