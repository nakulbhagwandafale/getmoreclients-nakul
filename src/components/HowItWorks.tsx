import { motion } from 'framer-motion';
import { Search, Map, Rocket, TrendingUp, ArrowRight } from 'lucide-react';
import StarField from './ui/StarField';
import { cn } from '@/lib/utils';

const steps = [
    {
        id: 1,
        title: "Discovery",
        description: "We analyze your market position, competitors, and growth bottlenecks to identify high-impact opportunities.",
        icon: Search,
        gradient: "from-cyan-400 via-blue-500 to-purple-600"
    },
    {
        id: 2,
        title: "Strategy",
        description: "Our AI engines generate a custom roadmap, selecting the optimal channels and tactics for your unique goals.",
        icon: Map,
        gradient: "from-blue-400 via-indigo-500 to-purple-600"
    },
    {
        id: 3,
        title: "Execution",
        description: "We deploy autonomous marketing agents and expert teams to execute campaigns with precision and speed.",
        icon: Rocket,
        gradient: "from-purple-400 via-pink-500 to-rose-600"
    },
    {
        id: 4,
        title: "Growth",
        description: "Real-time analytics optimize performance 24/7, ensuring continuous scaling and maximizing ROI.",
        icon: TrendingUp,
        gradient: "from-pink-400 via-rose-500 to-orange-600"
    }
];

// Moving Border Card V2 (More robust implementation)
const MovingBorderCard = ({ step, index }: { step: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative h-full"
        >
            <div className="relative h-full group isolate rounded-3xl bg-transparent">
                {/* The Moving Gradient Border */}
                <div
                    className="absolute inset-0 -z-10 rounded-3xl overflow-hidden"
                >
                    {/* The spinning gradient layer - Uses the step's specific gradient */}
                    <div className={cn("absolute inset-[-100%] animate-[spin_3s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-md", `bg-gradient-to-r ${step.gradient}`)} />
                </div>

                {/* Mask to create the border width */}
                <div className="absolute inset-[1px] -z-10 rounded-[23px] bg-[#0a0118]" />

                {/* Inner Content */}
                <div className="h-full p-8 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/5 group-hover:bg-white/[0.05] transition-colors duration-500">
                    {/* Icon */}
                    <div className="mb-6 relative">
                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br transition-transform duration-500 group-hover:scale-110 shadow-lg", step.gradient)}>
                            <step.icon className="w-7 h-7 text-white stroke-[1.5]" />
                        </div>
                        {/* Glow behind icon */}
                        <div className={cn("absolute -inset-4 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 rounded-full bg-gradient-to-br", step.gradient)} />

                        {/* Number */}
                        <span className="absolute -top-2 -right-2 text-4xl font-bold text-white/5 select-none">{`0${step.id}`}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                        {step.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {step.description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

const HowItWorks = () => {
    return (
        <section className="relative py-32 bg-[#0a0118] overflow-hidden">
            <StarField className="absolute inset-0" />

            {/* Ambient Lighting */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        <span className="text-sm font-medium text-purple-200 tracking-wider uppercase">Our Process</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight bg-clip-text"
                    >
                        Simple steps to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Massive Growth</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        We've distilled complex AI strategies into a streamlined workflow that delivers results from Day 1.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[28%] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent border-t border-dashed border-white/20" />

                    {steps.map((step, index) => (
                        <MovingBorderCard key={step.id} step={step} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-20 text-center"
                >
                    <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-950 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1">
                        Start Your Journey
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="mt-4 text-sm text-gray-500">No commitment required. Book a free discovery call.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
