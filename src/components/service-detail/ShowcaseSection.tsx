import type { ServiceDetail } from "../../data/services";
import { motion } from "framer-motion";
import { Check, X, TrendingUp, Clock, Target } from "lucide-react";

interface ShowcaseSectionProps {
    service: ServiceDetail;
}

export default function ShowcaseSection({ service }: ShowcaseSectionProps) {
    return (
        <section className="py-24 md:py-32 bg-transparent relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
                    style={{ background: service.gradientMap.from }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10"
                    style={{ background: service.gradientMap.to }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
                    >
                        <TrendingUp className="w-4 h-4" style={{ color: service.gradientMap.via }} />
                        <span className="text-sm font-medium text-gray-300">Performance Comparison</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Why <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${service.gradientMap.from}, ${service.gradientMap.via}, ${service.gradientMap.to})` }}>AI Won't Wait</span> for Manual Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        See exactly how our {service.title} algorithms outperform traditional agency methods in speed, accuracy, and scale.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: Animated Graph */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden group"
                    >
                        {/* Grid Lines */}
                        <div className="absolute inset-0 z-0">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="absolute w-full h-px bg-white/5" style={{ top: `${i * 20}%` }} />
                            ))}
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="absolute h-full w-px bg-white/5" style={{ left: `${i * 20}%` }} />
                            ))}
                        </div>

                        <div className="relative z-10 h-[300px] sm:h-[400px] flex items-end justify-between pb-8 pl-8 border-l border-b border-white/20">

                            {/* Axis Labels */}
                            <div className="absolute -left-8 top-1/2 -rotate-90 text-xs text-gray-500 font-mono tracking-widest">PERFORMANCE / ROI</div>
                            <div className="absolute bottom-0 right-0 text-xs text-gray-500 font-mono tracking-widest translate-y-6">TIME / SCALE</div>

                            {/* Traditional Line (Linear/Flat) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none p-8" preserveAspectRatio="none">
                                <motion.path
                                    d="M0,360 L100,340 L200,320 L300,300 L400,280 L500,260"
                                    fill="none"
                                    stroke="#4b5563"
                                    strokeWidth="2"
                                    strokeDasharray="5,5"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "linear" }}
                                />
                            </svg>
                            {/* Label for Traditional */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.5 }}
                                className="absolute right-[10%] bottom-[35%] bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded border border-gray-700"
                            >
                                Traditional Agency
                            </motion.div>


                            {/* AI Line (Exponential) */}
                            <div className="absolute inset-0 w-full h-full p-8">
                                <svg className="w-full h-full overflow-visible">
                                    <defs>
                                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor={service.gradientMap.from} />
                                            <stop offset="50%" stopColor={service.gradientMap.via} />
                                            <stop offset="100%" stopColor={service.gradientMap.to} />
                                        </linearGradient>
                                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                            <feMerge>
                                                <feMergeNode in="coloredBlur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    <motion.path
                                        d="M0,380 C150,370 250,300 500,20" // Exponential curve approximation
                                        fill="none"
                                        stroke="url(#lineGradient)"
                                        strokeWidth="4"
                                        filter="url(#glow)"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                    />

                                    {/* Data Points on Line */}
                                    {[0.3, 0.6, 0.95].map((pos, idx) => (
                                        <motion.circle
                                            key={idx}
                                            cx={`${pos * 100}%`}
                                            cy={idx === 0 ? "85%" : idx === 1 ? "55%" : "10%"} // Match rough curve positions
                                            r="6"
                                            fill="#fff"
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 1.5 + (idx * 0.2) }}
                                        >
                                            <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                                        </motion.circle>
                                    ))}
                                </svg>
                            </div>

                            {/* Label for AI - Dynamic Position */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2 }}
                                className="absolute right-[5%] top-[5%] px-3 py-1.5 rounded-lg border backdrop-blur-md shadow-xl z-20"
                                style={{
                                    backgroundColor: `${service.gradientMap.to}20`,
                                    borderColor: service.gradientMap.to
                                }}
                            >
                                <span className="text-white text-xs font-bold tracking-wide">AI-POWERED</span>
                                <div className="text-[10px] text-gray-300">Exponential Growth</div>
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Comparison Details */}
                    <div className="space-y-6">
                        {service.comparison.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors group"
                            >
                                {/* Connector Line (Decorative) */}
                                <div className="absolute left-0 top-1/2 -translate-x-full w-8 lg:w-12 h-px bg-gradient-to-r from-transparent to-white/20 hidden lg:block" />
                                <div className="absolute left-0 top-1/2 -translate-x-1.5 w-3 h-3 rounded-full bg-gray-800 border-2 border-white/10 group-hover:border-white/50 transition-colors hidden lg:block" />

                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-1">{item.metric}</h4>
                                        <div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-gray-700 to-transparent" />
                                    </div>
                                    <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-white transition-colors">
                                        {idx === 0 ? <Target className="w-5 h-5" /> : idx === 1 ? <Clock className="w-5 h-5" /> : <TrendingUp className="w-5 h-5" />}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {/* Traditional */}
                                    <div className="space-y-2">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider font-mono flex items-center gap-1">
                                            <X className="w-3 h-3 text-red-500/70" /> Traditional
                                        </p>
                                        <p className="text-sm text-gray-400 leading-snug">
                                            {item.traditional}
                                        </p>
                                    </div>

                                    {/* AI Driven */}
                                    <div className="space-y-2 relative">
                                        {/* Divider */}
                                        <div className="absolute left-0 top-2 bottom-2 w-px bg-white/5" />

                                        <div className="pl-4">
                                            <p className="text-xs font-mono uppercase tracking-wider flex items-center gap-1" style={{ color: service.gradientMap.to }}>
                                                <Check className="w-3 h-3" /> Our AI Solution
                                            </p>
                                            <p className="text-sm font-medium text-white leading-snug">
                                                {item.aiDriven}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
