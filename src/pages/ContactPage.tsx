import { motion } from 'framer-motion';
import { MessageSquare, ShieldCheck, ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import { GradientBorderCard } from '@/components/ui/gradient-border-card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterSection';
import LetsMeetSection from '@/components/contact/LetsMeetSection';

const ContactPage = () => {


    return (
        <div className="min-h-screen bg-transparent relative font-sans text-gray-200 overflow-hidden">
            {/* StarField handled globally */}
            <Navbar />

            <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center">

                {/* Header Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 max-w-3xl"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
                        Get in touch
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200 drop-shadow-xl tracking-tight mb-6">
                        Let's build something <br /> extraordinary.
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Ready to scale your agency? We're here to help you deploy the systems that will define your future.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full">

                    {/* Left Column: Trust & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex flex-col justify-between h-full space-y-12"
                    >

                        {/* Trust Cards */}
                        <div className="space-y-6">
                            {[
                                {
                                    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
                                    title: "100% Confidential",
                                    desc: "Your agency strategies & data are strictly protected under NDA."
                                },
                                {
                                    icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
                                    title: "24h Response Guarantee",
                                    desc: "We value speed. You'll hear from a senior partner within one business day."
                                },
                                {
                                    icon: <CheckCircle className="w-6 h-6 text-purple-400" />,
                                    title: "No Sales Pressure",
                                    desc: "Just a transparent conversation about your goals and how we can fit."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-5 items-start p-6 rounded-2xl bg-[#130b29] border border-white/5 hover:bg-[#1a0f35] transition-colors">
                                    <div className="shrink-0 pt-1">{item.icon}</div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Direct Contact Info */}
                    </motion.div>

                    {/* Right Column: Premium Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <GradientBorderCard className="relative h-full p-8 md:p-10 overflow-hidden border-none flex flex-col justify-center">

                            {/* Background Image ONLY */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: 'url("/assets/Screenshot 2026-01-21 144131.png")' }}
                            />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center text-center space-y-8">

                                {/* Icon */}
                                <div className="relative">
                                    <div className="absolute inset-0 bg-purple-500/20 rounded-full" />
                                    <div className="relative w-24 h-24 rounded-full bg-black/40 border border-black/10 flex items-center justify-center shadow-2xl">
                                        <MapPin className="w-10 h-10 text-purple-400" />
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="space-y-4 max-w-sm">
                                    <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                                        Visit Our HQ
                                    </h2>
                                    <p className="text-gray-200 text-lg leading-relaxed bg-black/40 backdrop-blur-md rounded-xl p-4">
                                        701, Stellar Tower, Sion - Trombay Rd,<br />
                                        near Diamond Garden, opp K-star mall,<br />
                                        Chembur, Mumbai, 400071
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="w-full pt-4 space-y-4">
                                    <button
                                        onClick={() =>
                                            window.open(
                                                "https://cal.com/getmoreclients/strategy-call",
                                                "_blank"
                                            )
                                        }
                                        className="w-full btn-primary py-4 text-lg rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform duration-300 shadow-xl shadow-purple-900/30"
                                    >
                                        Let's Meet
                                        <ArrowRight className="w-5 h-5" />
                                    </button>

                                    <p className="text-sm text-gray-300 bg-black/40 backdrop-blur-md py-1 px-4 rounded-full border border-white/10">
                                        Prefer a call?{" "}
                                        <a
                                            href="tel:+919370425738"
                                            className="text-white-400 hover:text-purple-300 font-medium"
                                        >
                                            Dial +91 9370425738
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </GradientBorderCard>
                    </motion.div>

                </div>
            </div>

            <LetsMeetSection />

            <Footer />
        </div >
    );
};

export default ContactPage;
