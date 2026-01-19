import { motion } from 'framer-motion';
import type { ServiceDetail } from "../../data/services";
import { X, Check } from 'lucide-react';

interface ComparisonSectionProps {
    service: ServiceDetail;
}

export default function ComparisonSection({ service }: ComparisonSectionProps) {
    return (
        <section className="py-24 bg-[#0a0118] relative">
            {/* Background Split */}
            <div className="absolute inset-0 flex">
                <div className="w-full md:w-1/2 bg-red-900/5" />
                <div className="w-full md:w-1/2 bg-green-900/5" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why It Works Better</h2>
                    <p className="text-gray-400">Stop guessing. Start calculating.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    {/* Traditional Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                                <X className="w-6 h-6 text-red-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-300">Traditional Way</h3>
                        </div>

                        {service.comparison.map((point, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm grayscale opacity-70"
                            >
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{point.metric}</p>
                                <p className="text-lg text-gray-300">{point.traditional}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* AI-Driven Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                                <Check className="w-6 h-6 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Our AI Approach</h3>
                        </div>

                        {service.comparison.map((point, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 + 0.2 }}
                                className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 backdrop-blur-sm ring-1 ring-green-500/30"
                            >
                                <p className="text-xs font-bold text-green-400/80 uppercase tracking-wider mb-2">{point.metric}</p>
                                <p className="text-lg text-white font-medium">{point.aiDriven}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
