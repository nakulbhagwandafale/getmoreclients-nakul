import { Twitter, Linkedin, Instagram, Flame } from 'lucide-react';
import Globe from './ui/Globe';
import StarField from './ui/StarField';

const Footer = () => {
    return (
        <footer className="relative h-screen w-full overflow-hidden flex flex-col justify-between bg-transparent">
            {/* Background Atmosphere - semi transparent to show stars */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118]/80 via-[#11052C]/80 to-[#0a0118]/90 z-0" />

            {/* Animated StarField specific to Footer */}
            <div className="absolute inset-0 z-0 opacity-60 pointer-events-none mix-blend-screen">
                <StarField className="absolute inset-0" />
            </div>

            {/* Globe Section (Upper Area - Takes remaining space) */}
            <div className="relative flex-1 w-full flex items-center justify-center z-10 overflow-hidden">
                {/* Visual Glow behind Globe */}
                <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

                {/* Scaled down slightly to fit single screen */}
                <Globe className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-100" />
            </div>

            {/* Content Container (Bottom Area) */}
            <div className="relative z-20 w-full max-w-6xl mx-auto px-4 pb-8">

                {/* Glassmorphic Footer Card */}
                <div className="relative bg-[#0f0420]/70 backdrop-blur-2xl border border-white/10 rounded-[30px] p-6 md:p-10 overflow-hidden shadow-2xl">
                    {/* Inner Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-start">

                        {/* Brand Column */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-white">
                                <Flame className="w-6 h-6 text-blue-400 fill-blue-400" />
                                <span className="font-bold text-xl tracking-wide">GETMORECLIENTS</span>
                            </div>
                            <p className="text-sm text-gray-400">
                                Empowering agencies with AI-driven growth systems.
                            </p>
                        </div>

                        {/* Link Columns */}
                        <div className="col-span-1 md:col-span-2 grid grid-cols-3 gap-4 md:gap-8">
                            {/* Column 1 */}
                            <div className="space-y-3">
                                <h4 className="text-white font-semibold text-sm md:text-base">Product</h4>
                                <ul className="space-y-1.5">
                                    <li><a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">Features</a></li>
                                    <li><a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                                    <li><a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-3">
                                <h4 className="text-white font-semibold text-sm md:text-base">Company</h4>
                                <ul className="space-y-1.5">
                                    <li><a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">About Us</a></li>
                                    <li><a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">Careers</a></li>
                                    <li><a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
                                </ul>
                            </div>

                            {/* Column 3 */}
                            <div className="space-y-3">
                                <h4 className="text-white font-semibold text-sm md:text-base">Resources</h4>
                                <ul className="space-y-1.5">
                                    <li><a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">Blog</a></li>
                                    <li><a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                                    <li><a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">Support</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Social Icons (Bottom Right alignment in Desktop) */}
                        <div className="flex justify-start md:justify-end items-end h-full mt-auto">
                            <div className="flex items-center gap-4">
                                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
                                    <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
                                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
                                    <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright/Bottom text */}
                <div className="text-center mt-6 text-gray-500 text-[10px] md:text-xs">
                    &copy; {new Date().getFullYear()} GetMoreClients. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
