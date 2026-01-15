'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FlippingCardProps {
    width?: number;
    height?: number;
    frontContent: React.ReactNode;
    backContent: React.ReactNode;
    className?: string;
}

export function FlippingCard({
    width = 300,
    height = 400,
    frontContent,
    backContent,
    className = '',
}: FlippingCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const thickness = 30; // Thickness of the card in px

    return (
        <div
            className={`relative cursor-pointer ${className}`}
            style={{
                width: width,
                height: height,
                perspective: '1200px', // Increased perspective for better isometric view
            }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="relative w-full h-full"
                style={{
                    transformStyle: 'preserve-3d',
                }}
                animate={{
                    rotateY: isFlipped ? 180 : 0,
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.34, 1.56, 0.64, 1], // Spring-like elastic ease
                }}
            >
                {/* Front Side */}
                <div
                    className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900 via-purple-900 to-purple-950"
                    style={{
                        transform: `rotateY(0deg) translateZ(${thickness / 2}px)`,
                        backfaceVisibility: 'hidden',
                    }}
                >
                    <div className="w-full h-full bg-black/20 backdrop-blur-md">
                        {frontContent}
                    </div>
                    {/* Glossy overlay for cushion effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-2xl" />
                </div>

                {/* Back Side */}
                <div
                    className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800"
                    style={{
                        transform: `rotateY(180deg) translateZ(${thickness / 2}px)`,
                        backfaceVisibility: 'hidden',
                    }}
                >
                    <div className="w-full h-full bg-black/20 backdrop-blur-md">
                        {backContent}
                    </div>
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-2xl" />
                </div>


            </motion.div>
        </div>
    );
}

export default FlippingCard;
