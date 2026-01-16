import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles, Zap, BarChart3, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterSection';
import Services from '@/components/Services';
import StarField from '@/components/ui/StarField';

const FloatingCard = ({ icon: Icon, label, className, delay }: { icon: any, label: string, className?: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
        transition={{
            duration: 1,
            delay: delay,
            y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
            }
        }}
        className={`absolute hidden lg:flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl ${className}`}
    >
        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <span className="text-sm font-semibold text-gray-200">{label}</span>
    </motion.div>
);

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0118] relative font-sans text-white">
            <StarField />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden px-4 sm:px-6 lg:px-8 perspective-1000">
                {/* Deep atmospheric glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">

                    {/* Floating Elements - Creating 3D Depth */}
                    <FloatingCard icon={BarChart3} label="Predictive Analytics" className="top-20 left-[10%]" delay={0.2} />
                    <FloatingCard icon={Cpu} label="AI Automation" className="top-40 right-[15%]" delay={0.4} />
                    <FloatingCard icon={Globe} label="Global Reach" className="bottom-20 left-[15%]" delay={0.6} />
                    <FloatingCard icon={Zap} label="High Velocity" className="bottom-40 right-[10%]" delay={0.8} />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 flex justify-center"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center text-purple-300 hover:text-white transition-colors group text-sm font-medium px-4 py-2 rounded-full hover:bg-white/5"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                    </motion.div>

                    <div className="relative max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-lg shadow-purple-900/20"
                        >
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-semibold text-purple-100 uppercase tracking-widest text-[10px]">Future of Marketing</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-none"
                        >
                            <span className="block text-white drop-shadow-2xl">We Don't Guess.</span>
                            <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
                                We Calculate Success.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
                        >
                            Deploy autonomous marketing agents that learn, adapt, and scale your revenue <span className="text-white font-medium">24/7</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <button className="btn-primary px-10 py-5 text-lg rounded-full inline-flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] transition-shadow duration-300">
                                Start Your Transformation
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <div className="flex items-center -space-x-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0118] bg-gray-600 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <span className="ml-6 text-sm text-gray-400">Trusted by 500+ founders</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse" />
                </motion.div>
            </section>

            {/* Services Component */}
            <Services />

            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118] to-[#150528]" />
                <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Ready to scale simpler, <br />
                            <span className="text-purple-400">faster, and smarter?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="btn-primary px-10 py-5 text-lg rounded-2xl inline-flex items-center gap-3 group">
                                Book Your Strategy Call
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <Link
                                to="/contact"
                                className="px-10 py-5 text-lg text-gray-300 hover:text-white border border-white/10 hover:bg-white/5 rounded-2xl transition-all duration-300"
                            >
                                Contact Support
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServicesPage;
