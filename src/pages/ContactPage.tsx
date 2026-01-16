import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, ShieldCheck, ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterSection';
import StarField from '@/components/ui/StarField';
import { GradientBorderCard } from '@/components/ui/gradient-border-card';

const ContactPage = () => {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');
        // Simulate network request
        setTimeout(() => setFormState('success'), 1500);
    };

    return (
        <div className="min-h-screen bg-[#0a0118] relative font-sans text-gray-200 overflow-hidden">
            <StarField />
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
                                <div key={idx} className="flex gap-5 items-start p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="shrink-0 pt-1">{item.icon}</div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Direct Contact Info */}
                        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/10 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <h3 className="text-white font-bold text-xl mb-6">Other ways to connect</h3>
                            <div className="space-y-4">
                                <a href="mailto:hello@getmoreclients.in" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span>hello@getmoreclients.in</span>
                                </a>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <span>San Francisco &middot; New York &middot; London</span>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    {/* Right Column: Premium Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <GradientBorderCard className="p-8 md:p-10 bg-[#0f0720]/80 backdrop-blur-xl">
                            {formState === 'success' ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
                                    >
                                        <CheckCircle className="w-10 h-10 text-green-400" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400 max-w-xs mx-auto">
                                        Thanks for reaching out. We'll be in touch shortly to schedule your strategy session.
                                    </p>
                                    <button
                                        onClick={() => setFormState('idle')}
                                        className="mt-8 text-purple-400 hover:text-purple-300 text-sm font-medium"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold text-white mb-6">Tell us about your agency</h2>

                                        {/* Name Field */}
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                className={`w-full bg-[#1a0b2e] border rounded-xl px-5 pt-6 pb-2 text-white outline-none transition-all duration-300 ${focusedField === 'name' ? 'border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.15)]' : 'border-white/10'}`}
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={(e) => !e.target.value && setFocusedField(null)}
                                            />
                                            <label
                                                htmlFor="name"
                                                className={`absolute left-5 transition-all duration-300 pointer-events-none text-gray-500 ${focusedField === 'name' || (document.getElementById('name') as HTMLInputElement)?.value ? 'top-2 text-xs text-purple-400' : 'top-4 text-base'}`}
                                            >
                                                Full Name
                                            </label>
                                        </div>

                                        {/* Email Field */}
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className={`w-full bg-[#1a0b2e] border rounded-xl px-5 pt-6 pb-2 text-white outline-none transition-all duration-300 ${focusedField === 'email' ? 'border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.15)]' : 'border-white/10'}`}
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={(e) => !e.target.value && setFocusedField(null)}
                                            />
                                            <label
                                                htmlFor="email"
                                                className={`absolute left-5 transition-all duration-300 pointer-events-none text-gray-500 ${focusedField === 'email' || (document.getElementById('email') as HTMLInputElement)?.value ? 'top-2 text-xs text-purple-400' : 'top-4 text-base'}`}
                                            >
                                                Work Email
                                            </label>
                                        </div>

                                        {/* Website Field */}
                                        <div className="relative">
                                            <input
                                                type="url"
                                                id="website"
                                                className={`w-full bg-[#1a0b2e] border rounded-xl px-5 pt-6 pb-2 text-white outline-none transition-all duration-300 ${focusedField === 'website' ? 'border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.15)]' : 'border-white/10'}`}
                                                onFocus={() => setFocusedField('website')}
                                                onBlur={(e) => !e.target.value && setFocusedField(null)}
                                            />
                                            <label
                                                htmlFor="website"
                                                className={`absolute left-5 transition-all duration-300 pointer-events-none text-gray-500 ${focusedField === 'website' || (document.getElementById('website') as HTMLInputElement)?.value ? 'top-2 text-xs text-purple-400' : 'top-4 text-base'}`}
                                            >
                                                Company URL (Optional)
                                            </label>
                                        </div>

                                        {/* Message Field */}
                                        <div className="relative">
                                            <textarea
                                                id="message"
                                                required
                                                rows={4}
                                                className={`w-full bg-[#1a0b2e] border rounded-xl px-5 pt-6 pb-2 text-white outline-none transition-all duration-300 resize-none ${focusedField === 'message' ? 'border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.15)]' : 'border-white/10'}`}
                                                onFocus={() => setFocusedField('message')}
                                                onBlur={(e) => !e.target.value && setFocusedField(null)}
                                            />
                                            <label
                                                htmlFor="message"
                                                className={`absolute left-5 transition-all duration-300 pointer-events-none text-gray-500 ${focusedField === 'message' || (document.getElementById('message') as HTMLTextAreaElement)?.value ? 'top-2 text-xs text-purple-400' : 'top-4 text-base'}`}
                                            >
                                                How can we help you?
                                            </label>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={formState === 'submitting'}
                                        className="w-full btn-primary py-4 text-lg rounded-xl flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {formState === 'submitting' ? (
                                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Start the Conversation
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-xs text-gray-500 mt-4">
                                        By submitting this form, you agree to our privacy policy. <br />
                                        We respect your inbox and never share your data.
                                    </p>
                                </form>
                            )}
                        </GradientBorderCard>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactPage;
