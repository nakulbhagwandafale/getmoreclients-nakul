import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

export type CardStackItem = {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    href: string;
    designation?: string;
};

export const CardStack = ({
    items,
    autoAdvance = false,
    intervalMs = 5000,
    pauseOnHover = false
}: {
    items: CardStackItem[];
    autoAdvance?: boolean;
    intervalMs?: number;
    pauseOnHover?: boolean;
}) => {
    const [cards, setCards] = useState<CardStackItem[]>(items);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        setCards(items);
    }, [items]);

    const stopFlipping = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const startFlipping = useCallback(() => {
        stopFlipping(); // Ensure no duplicate intervals
        intervalRef.current = setInterval(() => {
            setCards((prevCards: CardStackItem[]) => {
                const newArray = [...prevCards];
                const first = newArray.shift();
                if (first) newArray.push(first);
                return newArray;
            });
        }, intervalMs);
    }, [intervalMs, stopFlipping]);

    useEffect(() => {
        if (autoAdvance && !isHovering) {
            startFlipping();
        } else {
            stopFlipping();
        }

        return () => stopFlipping();
    }, [autoAdvance, intervalMs, isHovering, startFlipping, stopFlipping]);

    const handleCardClick = (clickedIndex: number) => {
        if (clickedIndex === 0) return; // Already center

        setCards((prevCards) => {
            const newCards = [...prevCards];
            const len = newCards.length;

            if (clickedIndex === 1) {
                // Move 1 item
                const first = newCards.shift();
                if (first) newCards.push(first);
            } else if (clickedIndex === 2) {
                // Move 2 items
                const first = newCards.shift();
                const second = newCards.shift();
                if (first) newCards.push(first);
                if (second) newCards.push(second);
            } else if (clickedIndex === len - 1) {
                // Move 1 item from back
                const last = newCards.pop();
                if (last) newCards.unshift(last);
            } else if (clickedIndex === len - 2) {
                // Move 2 items from back
                const last = newCards.pop();
                const secondLast = newCards.pop();
                if (last) newCards.unshift(last);
                if (secondLast) newCards.unshift(secondLast);
            }

            return newCards;
        });

        // Reset auto-advance timer on interaction
        stopFlipping();
        if (autoAdvance && !isHovering) startFlipping();
    };

    return (
        <div
            className="relative h-[28rem] w-full max-w-5xl mx-auto perspective-1000 flex items-center justify-center -mt-12"
            onMouseEnter={() => pauseOnHover && setIsHovering(true)}
            onMouseLeave={() => pauseOnHover && setIsHovering(false)}
        >
            {cards.map((card, index) => {
                let x = 0;
                let scale = 1;
                let rotate = 0;
                let zIndex = 0;
                let opacity = 0;

                const len = cards.length;

                if (index === 0) {
                    // Center
                    x = 0;
                    scale = 1.1; // Make center prominent
                    rotate = 0;
                    zIndex = 30;
                    opacity = 1;
                } else if (index === 1) {
                    // Right 1
                    x = 280;
                    scale = 0.9;
                    rotate = 10;
                    zIndex = 20;
                    opacity = 0.8;
                } else if (index === 2) {
                    // Right 2
                    x = 480;
                    scale = 0.75;
                    rotate = 20;
                    zIndex = 10;
                    opacity = 0.6;
                } else if (index === len - 1) {
                    // Left 1
                    x = -280;
                    scale = 0.9;
                    rotate = -10;
                    zIndex = 20;
                    opacity = 0.8;
                } else if (index === len - 2) {
                    // Left 2
                    x = -480;
                    scale = 0.75;
                    rotate = -20;
                    zIndex = 10;
                    opacity = 0.6;
                } else {
                    // Hidden
                    scale = 0;
                    opacity = 0;
                }

                // Mobile Responsive Overrides
                if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                    if (index === 2 || index === len - 2) {
                        opacity = 0; // Hide outer cards on smaller screens
                    }
                    if (index === 1) x = 140;
                    if (index === len - 1) x = -140;
                }

                return (
                    <motion.div
                        key={card.id}
                        onClick={() => handleCardClick(index)}
                        className="absolute h-[24rem] w-72 md:h-[28rem] md:w-80 rounded-3xl p-6 shadow-2xl border border-white/10 dark:border-white/10 overflow-hidden flex flex-col justify-end cursor-pointer transition-all duration-300 hover:brightness-110"
                        style={{
                            transformOrigin: "center bottom",
                        }}
                        animate={{
                            x: x,
                            scale: scale,
                            rotateZ: rotate,
                            zIndex: zIndex,
                            opacity: opacity
                        }}
                        transition={{
                            duration: 0.15,
                            ease: "easeOut"
                        }}
                    >
                        {/* Full Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center z-0"
                            style={{ backgroundImage: `url(${card.imageSrc})` }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />

                        {/* Content */}
                        <div className="relative z-20 pb-2">
                            <h3 className="font-bold text-white text-xl md:text-2xl mb-2 drop-shadow-lg">
                                {card.title}
                            </h3>
                            <p className="text-gray-200 text-sm leading-snug line-clamp-3 drop-shadow-md mb-3">
                                {card.description}
                            </p>
                            {card.designation && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/20 text-purple-200 border border-purple-500/30">
                                    {card.designation}
                                </span>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
