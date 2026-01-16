import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Twitter, Linkedin, Instagram, ArrowRight, Flame, Github } from 'lucide-react';
import Globe from './ui/Globe';
import StarField from './ui/StarField';

export default function Footer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <footer ref={containerRef} className="relative min-h-screen w-full bg-[#0a0118] overflow-hidden flex flex-col pt-20">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0">
                <StarField className="opacity-40" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
            </div>

            {/* Main Content Area */}
            <main className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Left Side: Text & CTA */}
                <motion.div
                    style={{ opacity, y }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 pb-16 lg:pb-0"
                >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Operational Worldwide</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Scale?</span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                        Join 500+ ambitious agencies using our AI-driven systems to redefine growth.
                        Let's build your empire, starting today.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full text-lg w-full sm:w-auto overflow-hidden transition-transform active:scale-95">
                            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300">
                                Book a Demo <ArrowRight className="w-5 h-5" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>

                        <button className="px-8 py-4 bg-white/5 text-white font-medium rounded-full text-lg w-full sm:w-auto hover:bg-white/10 transition-colors border border-white/10">
                            View Pricing
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-8 flex flex-col gap-4 w-full">
                        <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Trusted by teams at</p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Simple text placeholders for logos as per standard footer style if no SVGs available */}
                            <span className="text-xl font-bold text-white font-serif">Acme</span>
                            <span className="text-xl font-bold text-white font-sans">Global</span>
                            <span className="text-xl font-bold text-white font-mono">Finite</span>
                            <span className="text-xl font-bold text-white italic">Stark</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Globe Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative w-full h-[500px] lg:h-[800px] flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-[100px] scale-75 animate-pulse" />
                    {/* Globe Wrapper with tailored sizing */}
                    <div className="w-[140%] h-[140%] lg:w-[120%] lg:h-[120%] flex items-center justify-center -mr-20 lg:-mr-40">
                        <Globe className="w-full h-full" />
                    </div>
                </motion.div>
            </main>

            {/* Bottom Footer Links Area */}
            <div className="relative z-20 border-t border-white/5 bg-black/20 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div className="col-span-2 md:col-span-1 space-y-4">
                            <div className="flex items-center gap-2 text-white">
                                <Flame className="w-6 h-6 text-purple-500 fill-purple-500" />
                                <span className="font-bold text-xl tracking-tight">GETMORECLIENTS</span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                The operating system for modern agency growth.
                            </p>
                            <div className="flex gap-4 pt-2">
                                <SocialLink icon={<Twitter className="w-4 h-4" />} href="#" />
                                <SocialLink icon={<Linkedin className="w-4 h-4" />} href="#" />
                                <SocialLink icon={<Github className="w-4 h-4" />} href="#" />
                                <SocialLink icon={<Instagram className="w-4 h-4" />} href="#" />
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Integrations</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Changelog</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Legal</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">API Docs</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Community</a></li>
                                <li><a href="#" className="hover:text-purple-400 transition-colors">Status</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <p>© {new Date().getFullYear()} GetMoreClients Inc. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ icon, href }: { icon: ReactNode, href: string }) {
    return (
        <a
            href={href}
            className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
            {icon}
        </a>
    );
}
