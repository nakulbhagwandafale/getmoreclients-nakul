import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterSection';
import Services from '../components/Services';
import StarField from '../components/ui/StarField';

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0118] relative font-sans text-white">
            <StarField />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden px-4 sm:px-6 lg:px-8">
                {/* Background Glow Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
                    <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center text-purple-300 hover:text-white transition-colors group text-sm font-medium"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                    </motion.div>

                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                        >
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-medium text-purple-100/90">Next-Gen Marketing Intelligence</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight"
                        >
                            We don't just run ads. <br className="hidden md:block" />
                            <span className="bg-gradient-to-r from-purple-400 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                                We Engineer Growth.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto"
                        >
                            Combining predictive AI with battle-tested human strategy to help you dominate your market.
                        </motion.p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500/50 to-transparent" />
                </motion.div>
            </section>

            {/* Services Component */}
            <Services />

            {/* Premium CTA Section */}
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
