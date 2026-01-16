import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Target, Zap, Shield, Users, ArrowRight } from "lucide-react";

// Feature Data
const features = [
    {
        id: 1,
        title: "Precision Targeting",
        description: "Our AI analyzes millions of data points to identify leads that perfectly match your ideal customer profile.",
        icon: Target,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" // Abstract Data Dashboard
    },
    {
        id: 2,
        title: "Lightning Fast Setup",
        description: "Go from onboarding to your first booked meeting in days, not months. Automated systems pre-built for speed.",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" // Global Network / Speed
    },
    {
        id: 3,
        title: "Brand Protection",
        description: "Sophisticated domain rotation and email warming protocols ensure your reputation stays pristine.",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" // Security / Lock
    },
    {
        id: 4,
        title: "High-Intent Leads",
        description: "We filter for intent, delivering prospects who are ready to buy and waiting for your solution.",
        icon: Users,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" // Team / Meeting
    }
];

const WhyChooseUs: React.FC = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section className="relative py-32 bg-transparent overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Us</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        We blend innovation with expertise to deliver measurable results that drive your business forward.
                    </p>
                </div>

                {/* Interactive Feature Section */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch mb-32">

                    {/* Left: Feature List */}
                    <div className="lg:w-1/2 flex flex-col gap-4">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={feature.id}
                                    onMouseEnter={() => setActiveFeature(index)}
                                    className={`relative pl-8 pr-6 py-6 rounded-2xl cursor-pointer transition-all duration-300 group overflow-hidden ${activeFeature === index
                                        ? "bg-white/5 border border-white/10 shadow-2xl shadow-purple-900/10"
                                        : "hover:bg-white/5 border border-transparent hover:border-white/5"
                                        }`}
                                >
                                    {/* Active Indicator Bar */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${activeFeature === index ? "bg-gradient-to-b from-purple-500 to-blue-500" : "bg-white/5"
                                        }`} />

                                    <div className="flex items-start gap-5">
                                        <div className={`p-3 rounded-xl transition-all duration-300 ${activeFeature === index ? "bg-purple-500/20 text-purple-300" : "bg-white/5 text-gray-400"
                                            }`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`text-xl font-semibold mb-2 transition-colors ${activeFeature === index ? "text-white" : "text-gray-300"
                                                }`}>
                                                {feature.title}
                                            </h3>
                                            <p className={`text-sm leading-relaxed transition-colors ${activeFeature === index ? "text-gray-300" : "text-gray-500"
                                                }`}>
                                                {feature.description}
                                            </p>
                                        </div>

                                        {/* Arrow for active state */}
                                        <div className={`self-center transition-all duration-300 ${activeFeature === index ? "opacity-100 translate-x-0 text-purple-400" : "opacity-0 -translate-x-4"
                                            }`}>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: Dynamic Visualization (Edge-to-Edge Image) */}
                    <div className="lg:w-1/2 relative h-[400px] lg:h-auto min-h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFeature}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0, ease: "easeOut" }}
                                className="absolute inset-0"
                            >
                                {/* Image Layer */}
                                <img
                                    src={features[activeFeature]?.image}
                                    alt={features[activeFeature]?.title}
                                    className="w-full h-full object-cover opacity-80"
                                />

                                {/* Gradient Overlay for text readability (bottom) and blending (inset) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/40 to-transparent" />
                                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />

                                {/* Floating Label on Image */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="absolute bottom-8 left-8 right-8"
                                >
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3">
                                        {(() => {
                                            const ActiveIcon = features[activeFeature]?.icon;
                                            return ActiveIcon ? <ActiveIcon className="w-4 h-4 text-purple-300" /> : null;
                                        })()}
                                        <span className="text-sm font-medium text-white">{features[activeFeature]?.title}</span>
                                    </div>
                                    <h4 className="text-3xl font-bold text-white leading-tight">
                                        {features[activeFeature]?.description}
                                    </h4>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Comparison Section (Preserved) */}
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
                                                <Zap className="w-5 h-5" />
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
