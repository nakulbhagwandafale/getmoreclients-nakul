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
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Lightning Fast Setup",
        description: "Go from onboarding to your first booked meeting in days, not months. Automated systems pre-built for speed.",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Brand Protection",
        description: "Sophisticated domain rotation and email warming protocols ensure your reputation stays pristine.",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "High-Intent Leads",
        description: "We filter for intent, delivering prospects who are ready to buy and waiting for your solution.",
        icon: Users,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    }
];

const WhyChooseUs: React.FC = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    // Preload images to prevent flickering
    React.useEffect(() => {
        features.forEach((feature) => {
            const img = new Image();
            img.src = feature.image;
        });
    }, []);

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
                        {/* 
                           AnimatePresence without mode='wait' allows the exiting component 
                           to stay while the new one enters, creating a cross-fade.
                           We use absolute positioning to stack them.
                        */}
                        <AnimatePresence>
                            <motion.div
                                key={activeFeature}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }} // Slower, smoother fade
                                className="absolute inset-0 z-10" // z-10 ensures it's above previous
                            >
                                {/* Image Layer */}
                                <img
                                    src={features[activeFeature]?.image}
                                    alt={features[activeFeature]?.title}
                                    className="w-full h-full object-cover opacity-90"
                                />

                                {/* Gradient Overlay for text readability (bottom) and blending (inset) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/20 to-transparent" />
                                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />

                                {/* Floating Label on Image */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
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

                        {/* 
                           Placeholder/Background layer to ensure it's never fully black 
                           even if image takes split second to render 
                        */}
                        <div className="absolute inset-0 bg-gray-900" />
                    </div>
                </div>

                {/* Comparison Section */}
                <div className="max-w-4xl mx-auto mt-32">
                    {/* Centered Header */}
                    <div className="text-center mb-16">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            3x Faster Than Traditional Teams
                        </h3>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            We consistently ship launch-ready MVPs in just <span className="text-white font-semibold">21 days</span>.
                            Traditional teams often take 3 to 6 months to reach the same point.
                        </p>
                    </div>

                    {/* Glossy Bar Chart */}
                    <div className="space-y-8">

                        {/* With Us (Fast/Short Bar) */}
                        <div className="relative flex items-center gap-6">
                            {/* Bar Container */}
                            <div className="relative w-[30%] min-w-[200px] h-14 md:h-16 group">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                                    className="absolute inset-0 bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl shadow-[0_0_20px_rgba(132,204,22,0.4)] overflow-hidden"
                                >
                                    {/* Glossy Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-50" />
                                    <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent" />

                                    {/* Content Inside Bar */}
                                    <div className="absolute inset-0 flex items-center justify-between px-4">
                                        <span className="text-black/80 font-bold text-lg whitespace-nowrap">with GetMoreClients</span>
                                        <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                                            <Zap className="w-5 h-5 text-black/70 fill-current" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Label Outside */}
                            <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                                21 Days
                            </span>
                        </div>

                        {/* Traditional (Slow/Long Bar) */}
                        <div className="relative flex items-center gap-6 opacity-90 overflow-hidden">
                            {/* Bar Container */}
                            <div className="relative flex-1 h-14 md:h-16">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                                    className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-600 rounded-2xl shadow-[0_0_20px_rgba(244,63,94,0.3)] overflow-hidden"
                                >
                                    {/* Glossy Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-40" />
                                    <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />

                                    {/* Content Inside Bar */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white/90 font-bold text-lg tracking-wide shadow-black/20 drop-shadow-sm">with others</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Label Outside */}
                            <span className="text-3xl md:text-4xl font-bold text-rose-200/80">
                                180 Days
                            </span>
                        </div>

                        {/* Footer Note */}
                        <p className="text-center text-gray-500 text-sm mt-8 pt-8 border-t border-white/5">
                            *The Earth moves 54 million kilometers around the Sun in 21 days, our MVPs orbit the market just as fast.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
