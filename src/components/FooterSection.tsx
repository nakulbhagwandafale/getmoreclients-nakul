import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, ArrowRight, Flame, Github } from 'lucide-react';
import Globe from './ui/Globe';
import CosmicFooterBackground from './ui/cosmic-footer-background';

import FlickeringGrid from './ui/flickering-footer';

export default function Footer() {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <footer ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex flex-col pt-20">
            {/* Immersive Cosmic Background */}
            <CosmicFooterBackground className="z-0" />

            {/* Main Content Area */}
            <main className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Left Side: Text & CTA */}
                <motion.div
                    style={{ opacity, y }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 pb-16 lg:pb-0"
                >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:bg-white/10 transition-colors">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-gray-200 tracking-wide uppercase drop-shadow-md">Operational Worldwide</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-2xl">
                        Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">Scale?</span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-lg leading-relaxed font-light drop-shadow-lg">
                        Join 500+ ambitious agencies using our AI-driven systems to redefine growth.
                        Let's build your empire, starting today.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <button
                            onClick={() => {
                                navigate('/contact');
                                window.scrollTo(0, 0);
                            }}
                            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full text-lg w-full sm:w-auto overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300">
                                Book Meeting<ArrowRight className="w-5 h-5" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>

                        <button
                            onClick={() => {
                                navigate('/work');
                                window.scrollTo(0, 0);
                            }}
                            className="px-8 py-4 bg-white/5 text-white font-medium rounded-full text-lg w-full sm:w-auto hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-sm"
                        >
                            View Our Work
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-8 flex flex-col gap-4 w-full">
                        <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Trusted by teams at</p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Simple text placeholders for logos */}
                            <span className="text-xl font-bold text-white font-serif hover:text-purple-300 transition-colors">Acme</span>
                            <span className="text-xl font-bold text-white font-sans hover:text-blue-300 transition-colors">Global</span>
                            <span className="text-xl font-bold text-white font-mono hover:text-pink-300 transition-colors">Finite</span>
                            <span className="text-xl font-bold text-white italic hover:text-indigo-300 transition-colors">Stark</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Globe Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative w-full h-[500px] lg:h-[800px] flex items-center justify-center pointer-events-none"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-[100px] scale-75 animate-pulse" />
                    {/* Globe Wrapper with tailored sizing */}
                    <div className="w-[140%] h-[140%] lg:w-[120%] lg:h-[120%] flex items-center justify-center -mr-20 lg:-mr-40 opacity-90">
                        <Globe className="w-full h-full" />
                    </div>
                </motion.div>
            </main>

            {/* Bottom Footer Links Area - Now Transparent for Unified Background */}
            <div className="relative z-20 border-t-0 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12 border-b border-white/5 pb-12">
                        {/* Brand Section */}
                        <div className="flex flex-col items-center md:items-start space-y-4 max-w-sm text-center md:text-left">
                            <div className="flex items-center gap-2 text-white group cursor-default">
                                <Flame className="w-6 h-6 text-purple-500 fill-purple-500 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                                <span className="font-bold text-xl tracking-tight drop-shadow-md">GETMORECLIENTS</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">
                                The operating system for modern agency growth.
                            </p>
                            <div className="flex gap-4 pt-2 justify-center md:justify-start">
                                <SocialLink icon={<Twitter className="w-4 h-4" />} href="https://x.com/DafaleNaku75724" />
                                <SocialLink icon={<Linkedin className="w-4 h-4" />} href="https://www.linkedin.com/in/nakul-dafale-34081b372/" />
                                <SocialLink icon={<Github className="w-4 h-4" />} href="https://github.com/nakulbhagwandafale" />
                                <SocialLink icon={<Instagram className="w-4 h-4" />} href="https://www.instagram.com/nakuldafale7/" />
                            </div>
                        </div>

                        {/* Navigation Links - Centered/Right balanced */}
                        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Work', href: '/work' },
                                { name: 'Services', href: '/services' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Blog', href: '/blog' },
                                { name: 'Contact', href: '/contact' },
                            ].map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 relative group overflow-hidden"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-2/3 transition-all duration-300 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Gradient Divider Line */}
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-8" />
                </div>

                {/* Constellation Text Section - Full Width */}
                <div className="relative w-full h-[200px] md:h-[250px] flex justify-center items-center overflow-hidden">
                    <FlickeringGrid
                        text="Get More Clients"
                        className="w-full h-full opacity-80"
                    />
                    {/* Extra ambient glow behind the text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-24 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none mix-blend-screen" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <p>© {new Date().getFullYear()} GetMoreClients Inc. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-purple-300 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-purple-300 transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-purple-300 transition-colors">Cookie Policy</a>
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
            target={href.startsWith('http') ? "_blank" : undefined}
            rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/50 hover:scale-110 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
        >
            {icon}
        </a>
    );
}
