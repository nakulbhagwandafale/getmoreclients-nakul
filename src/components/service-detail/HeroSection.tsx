import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { ServiceDetail } from "../../data/services";
import HeroBackground from "./HeroBackground";
import HeroVisuals from "./HeroVisuals";

interface HeroSectionProps {
    service: ServiceDetail;
}

export default function HeroSection({ service }: HeroSectionProps) {
    // Animation Variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className="relative min-h-[65vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* 1. Dynamic Background */}
            <HeroBackground gradientMap={service.gradientMap} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                    {/* LEFT COLUMN: Text Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
                                <Sparkles className="w-3 h-3 text-purple-400" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase">
                                    AI-First {service.title} Service
                                </span>
                            </div>
                        </motion.div>

                        {/* Split Headline */}
                        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
                            {service.title}<br />
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r"
                                style={{ backgroundImage: `linear-gradient(to right, ${service.gradientMap.from}, ${service.gradientMap.via}, ${service.gradientMap.to})` }}
                            >
                                {service.impactWord}
                            </span>
                        </motion.h1>

                        {/* Value Prop */}
                        <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            {service.shortDescription}
                        </motion.p>

                        {/* Quick Proof Strip */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-white/10 pt-6"
                        >
                            {service.heroMetrics.map((metric, idx) => {
                                const MetricIcon = metric.icon;
                                return (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="p-1.5 rounded bg-white/5 text-gray-400">
                                            <MetricIcon className="w-4 h-4" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm font-bold text-white leading-none mb-1">{metric.value}</p>
                                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">{metric.label}</p>
                                        </div>
                                        {idx !== service.heroMetrics.length - 1 && (
                                            <div className="w-px h-8 bg-white/10 hidden sm:block mx-2" />
                                        )}
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Smart Visual */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-full max-w-md mx-auto lg:max-w-none"
                    >
                        <HeroVisuals service={service} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
