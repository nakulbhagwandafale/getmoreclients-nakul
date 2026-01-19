import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { ServiceDetail } from "../../data/services";

interface PerformanceSectionProps {
    service: ServiceDetail;
}

const CircularProgress = ({ value, label }: { value: number, label: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => {
                let current = 0;
                const timer = setInterval(() => {
                    if (current >= value) {
                        clearInterval(timer);
                    } else {
                        current += 1;
                        setCount(current);
                    }
                }, 15);
                return () => clearInterval(timer);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [isInView, value]);

    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (count / 100) * circumference;

    return (
        <div ref={ref} className="flex flex-col items-center">
            <div className="relative w-40 h-40">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="transparent"
                        stroke="#1f2937"
                        strokeWidth="8"
                    />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="transparent"
                        stroke="#a855f7" // Purple-500
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-4xl font-bold text-white">{count}%</span>
                </div>
            </div>
            <p className="mt-4 text-gray-400 font-medium text-center">{label}</p>
        </div>
    );
};

export default function PerformanceSection({ service }: PerformanceSectionProps) {
    return (
        <section className="py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Context */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Unmatched <span className="text-purple-400">Precision</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-lg mb-8">
                            Our AI models are trained on millions of data points to deliver prediction accuracy that human intuition simply cannot match.
                            We measure success in decimals, not guesses.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-3xl font-bold text-white mb-1">{service.performanceMetric}</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">{service.performanceLabel}</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-3xl font-bold text-white mb-1">24/7</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Optimization Cycle</p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Indicator */}
                    <div className="flex-1 flex justify-center">
                        <CircularProgress value={service.accuracy} label={`AI Accuracy Score`} />
                    </div>

                </div>
            </div>
        </section>
    );
}
