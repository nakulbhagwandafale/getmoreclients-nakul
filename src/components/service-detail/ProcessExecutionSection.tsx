import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { ServiceDetail } from '../../data/services';

interface ProcessExecutionSectionProps {
    service: ServiceDetail;
}

export default function ProcessExecutionSection({ service }: ProcessExecutionSectionProps) {
    if (!service.process) return null;

    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-transparent -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-10"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                                Process & Execution
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                How We Deliver <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${service.gradientMap.from}, ${service.gradientMap.to})` }}>
                                    {service.impactWord}
                                </span> Resultados
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-white/10 pl-6">
                                {service.process.description}
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {service.process.steps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    className="relative flex gap-5 group"
                                >
                                    {/* Number / Line */}
                                    <div className="flex flex-col items-center">
                                        <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-[#0a0118] group-hover:border-[${service.gradientMap.via}] transition-colors duration-300 z-10`}>
                                            <span className="text-sm font-bold text-white">{idx + 1}</span>
                                        </div>
                                        {idx !== service.process.steps.length - 1 && (
                                            <div className="w-px h-full bg-white/10 my-2 group-hover:bg-white/20 transition-colors" />
                                        )}
                                    </div>

                                    <div className="pb-8">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="order-1 lg:order-2 h-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-full min-h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-[#0f0720]"
                        >
                            {/* Image */}
                            <img
                                src={service.process.visual}
                                alt={`${service.title} Process`}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                                onError={(e) => {
                                    // Fallback if generic process image missing
                                    e.currentTarget.src = service.heroImage || service.showcaseImage;
                                }}
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-transparent to-transparent opacity-80" />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                                    <div className="p-2 rounded-lg bg-green-500/20">
                                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">Execution Ready</p>
                                        <p className="text-xs text-green-300">Verified AI-Driven Workflow</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
