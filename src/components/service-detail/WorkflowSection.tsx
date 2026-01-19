import { motion } from 'framer-motion';
import type { ServiceDetail } from "../../data/services";
import { ArrowDown } from 'lucide-react';

interface WorkflowSectionProps {
    service: ServiceDetail;
}

export default function WorkflowSection({ service }: WorkflowSectionProps) {
    return (
        <section className="py-24 bg-[#0a0118] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A seamless, automated workflow designed to deliver results from Day 1.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/10 to-transparent hidden md:block -translate-x-1/2" />

                    <div className="space-y-12 md:space-y-24">
                        {service.workflowSteps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Number/Icon Bubble */}
                                    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-[#0a0118] border border-purple-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.2)] group hover:scale-110 transition-transform duration-300">
                                        <div className="absolute inset-0 rounded-2xl bg-purple-500/10 animate-pulse" />
                                        <Icon className="w-8 h-8 text-purple-400" />
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-sm border-2 border-[#0a0118]">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`flex-1 text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                        <p className="text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Empty spacer for grid balance */}
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-20 flex justify-center">
                    <div className="animate-bounce">
                        <ArrowDown className="w-6 h-6 text-gray-600" />
                    </div>
                </div>
            </div>
        </section>
    );
}
