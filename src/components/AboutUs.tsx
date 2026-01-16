import { motion, useScroll, useTransform, type Variants, type TargetAndTransition } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Target, Rocket, Users, ArrowRight } from 'lucide-react';

const stats = [
    { value: "500+", label: "Agencies Served" },
    { value: "2.5M+", label: "Leads Generated" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const floatAnimation: TargetAndTransition = {
    y: [-8, 8, -8],
    transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

export default function AboutUs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacityProgress = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            id="about"
            className="relative py-32 overflow-hidden"
        >
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        Who We Are
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300">
                            Transforming Agencies
                        </span>
                        <br />
                        <span className="text-white/80">Into Growth Machines</span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We're not just another SaaS. We're your strategic partner in building
                        predictable, scalable client acquisition systems that work while you sleep.
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {/* Main Feature Card - Spans 2 columns */}
                    <motion.div
                        custom={0}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="md:col-span-2 relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full bg-gradient-to-br from-[#1a0a2e] to-[#0f0720] rounded-3xl border border-white/10 p-8 md:p-10 overflow-hidden group-hover:border-purple-500/30 transition-colors duration-300">
                            {/* Decorative Grid Pattern */}
                            <div className="absolute inset-0 opacity-5" style={{
                                backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                                backgroundSize: '40px 40px'
                            }} />

                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                {/* Floating Image Stack */}
                                <motion.div
                                    className="relative w-64 h-64 shrink-0"
                                    style={{ y: imageY }}
                                >
                                    <motion.div
                                        animate={floatAnimation}
                                        className="absolute top-0 left-0 w-36 h-36 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-white/10"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80"
                                            alt="Team collaboration"
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                    <motion.div
                                        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
                                        className="absolute bottom-0 right-0 w-40 h-40 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-white/10"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&auto=format&fit=crop&q=80"
                                            alt="Office meeting"
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                    {/* Decorative floating element */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-purple-500/30 border-dashed"
                                    />
                                </motion.div>

                                {/* Text Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        Built by Agency Owners, <br />
                                        <span className="text-purple-400">For Agency Owners</span>
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        After scaling our own agency from $0 to $5M ARR, we built the exact
                                        system we wished existed—a growth engine that combines AI-powered
                                        lead scoring, automated outreach, and battle-tested playbooks.
                                    </p>
                                    <motion.a
                                        href="#services"
                                        whileHover={{ x: 5 }}
                                        className="inline-flex items-center gap-2 text-purple-400 font-medium group/link"
                                    >
                                        Learn how we do it
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        custom={1}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="group"
                    >
                        <div className="h-full bg-gradient-to-br from-[#1a0a2e] to-[#0f0720] rounded-3xl border border-white/10 p-8 group-hover:border-purple-500/30 transition-all duration-300 flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Target className="w-7 h-7 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                            <p className="text-gray-400 leading-relaxed flex-1">
                                To democratize agency growth—making enterprise-grade marketing
                                systems accessible to ambitious teams of all sizes.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        custom={2}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="group"
                    >
                        <div className="h-full bg-gradient-to-br from-[#1a0a2e] to-[#0f0720] rounded-3xl border border-white/10 p-8 group-hover:border-indigo-500/30 transition-all duration-300 flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Rocket className="w-7 h-7 text-indigo-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                            <p className="text-gray-400 leading-relaxed flex-1">
                                A world where every agency has the power to compete with the giants—
                                armed with data, automation, and proven strategies.
                            </p>
                        </div>
                    </motion.div>

                    {/* Values Card */}
                    <motion.div
                        custom={3}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="md:col-span-2 group"
                    >
                        <div className="h-full bg-gradient-to-br from-[#1a0a2e] to-[#0f0720] rounded-3xl border border-white/10 p-8 group-hover:border-pink-500/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-start gap-8">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-7 h-7 text-pink-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Our Values</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
                                        {[
                                            { title: "Client-First", desc: "Your success is our success. Period." },
                                            { title: "Radical Transparency", desc: "No hidden fees, no BS metrics." },
                                            { title: "Relentless Innovation", desc: "We ship fast and iterate faster." },
                                        ].map((value, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                                                className="text-left"
                                            >
                                                <h4 className="text-white font-semibold mb-1">{value.title}</h4>
                                                <p className="text-gray-500 text-sm">{value.desc}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Row */}
                <motion.div
                    style={{ opacity: opacityProgress }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group text-center py-8 px-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-all duration-300"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
