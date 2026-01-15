import React from 'react';
import { motion } from "framer-motion";
import ExpandOnHover from "./ui/expand-cards";

const WhyChooseUs: React.FC = () => {
    return (
        <section className="relative py-32 bg-transparent overflow-hidden wave-bg">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Us</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        We blend innovation with expertise to deliver measurable results that drive your business forward.
                    </p>
                </div>

                {/* Service Cards Replaced by Expandable Cards */}
                <div className="w-full mb-24">
                    <ExpandOnHover />
                </div>

                {/* Comparison Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
                        {/* Ambient Glows */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-12">
                            {/* Header / Text */}
                            <div className="md:w-1/3 text-left">
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Speed <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Redefined</span>
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Why wait months? We leverage advanced AI systems to deliver results in a fraction of the time.
                                </p>
                            </div>

                            {/* Chart Area */}
                            <div className="md:w-2/3 space-y-10">
                                {/* With Us Bar */}
                                <div className="relative group">
                                    <div className="flex items-end justify-between text-white mb-3">
                                        <div className="flex items-center gap-2">
                                            <span className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                            </span>
                                            <span className="font-semibold text-lg text-purple-100">With Us</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-2xl font-bold text-white text-shadow-glow">21 Days</span>
                                        </div>
                                    </div>

                                    {/* Progress Track */}
                                    <div className="h-6 bg-white/5 rounded-full overflow-hidden p-1 backdrop-blur-sm border border-white/5 relative">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "8%" }} // Reduced length as requested
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                            className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)] relative overflow-hidden"
                                        >
                                            {/* Shimmer */}
                                            <motion.div
                                                initial={{ x: "-100%" }}
                                                animate={{ x: "200%" }}
                                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                                className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                                            />
                                        </motion.div>
                                    </div>

                                </div>

                                {/* With Others Bar */}
                                <div className="opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                                    <div className="flex items-end justify-between text-white mb-3">
                                        <span className="font-medium text-gray-400 pl-2">Traditional Agencies</span>
                                        <span className="font-medium text-gray-400">180 Days</span>
                                    </div>
                                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-gray-600 rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
