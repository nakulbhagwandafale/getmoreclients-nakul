import { useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
    id: number;
    title: string;
    description: string;
    image: string;
}

const cards: CardProps[] = [
    {
        id: 1,
        title: "Proven Results",
        description: "We deliver measurable growth, not just vanity metrics. Our strategies are built on data-driven insights that guarantee ROI.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "AI-Powered Speed",
        description: "Launch campaigns in days, not months. We leverage cutting-edge AI tools to accelerate execution by 500%.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Premium Design",
        description: "First impressions matter. We craft stunning, high-end visuals that instantly position your brand as a market leader.",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Full Transparency",
        description: "No hidden fees, no black-box tactics. You get 24/7 access to real-time dashboards and clear, honest reporting.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "Dedicated Support",
        description: "We are your growth partners. You get a dedicated account manager and swift support for every step of your journey.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    },
];

export default function ExpandableCards() {
    const [active, setActive] = useState<number>(1);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-20">
            <div className="flex flex-col lg:flex-row gap-4 h-[600px] w-full">
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        layout
                        onClick={() => setActive(card.id)}
                        onHoverStart={() => setActive(card.id)}
                        className={`relative h-60 lg:h-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border border-white/10 ${active === card.id ? "lg:flex-[3]" : "lg:flex-[1]"
                            }`}
                    >
                        {/* Background Image */}
                        <img
                            src={card.image}
                            alt={card.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />

                        {/* Overlay Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${active === card.id ? "opacity-90" : "opacity-60 hover:opacity-80"
                            }`} />

                        {/* Content Container */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
                            {/* Title (Always visible, rotates on inactive non-expanded state on desktop if needed, usually simple) */}
                            <motion.h3
                                layout="position"
                                className={`text-2xl font-bold text-white mb-2 whitespace-nowrap ${active !== card.id ? "lg:-rotate-90 lg:mb-20 lg:text-center text-gray-300" : ""
                                    }`}
                            >
                                {card.title}
                            </motion.h3>

                            {/* Description (Only visible when active) */}
                            {active === card.id && (
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg"
                                >
                                    {card.description}
                                </motion.p>
                            )}
                        </div>

                        {/* Active Highlight Border/Glow */}
                        {active === card.id && (
                            <div className="absolute inset-0 border-2 border-purple-500/50 rounded-3xl pointer-events-none" />
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
