import { useState } from 'react';
import {
    HomeIcon,
    Briefcase,
    Layers,
    Info,
    FileText,
    Mail,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock';

const dockItems = [
    {
        title: 'Home',
        icon: <HomeIcon className="h-full w-full text-neutral-300" />,
        href: '#home',
    },
    {
        title: 'Work',
        icon: <Briefcase className="h-full w-full text-neutral-300" />,
        href: '#work',
    },
    {
        title: 'Services',
        icon: <Layers className="h-full w-full text-neutral-300" />,
        href: '#services',
    },
    {
        title: 'About Us',
        icon: <Info className="h-full w-full text-neutral-300" />,
        href: '#about',
    },
    {
        title: 'Blogs',
        icon: <FileText className="h-full w-full text-neutral-300" />,
        href: '#blogs',
    },
    {
        title: 'Contact',
        icon: <Mail className="h-full w-full text-neutral-300" />,
        href: '#contact',
    },
];

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Blogs', href: '#blog' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 hidden md:block bg-gradient-to-r from-[#0a0118]/95 via-[#1a0a2e]/90 to-[#0a0118]/95 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-900/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo - Left */}
                        <a href="#" className="flex items-center space-x-2">
                            <img src="/logo.png" alt="getmoreclients.in" className="h-20 w-auto" />
                        </a>

                        {/* Animated Dock - Center */}
                        <Dock className="items-end gap-4 pb-3">
                            {dockItems.map((item, index) => (
                                <a key={index} href={item.href}>
                                    <DockItem className="bg-gray-700 hover:bg-purple-500/30 transition-colors cursor-pointer">
                                        <DockIcon>{item.icon}</DockIcon>
                                        <DockLabel>{item.title}</DockLabel>
                                    </DockItem>
                                </a>
                            ))}
                        </Dock>

                        {/* Book Meeting Button - Right */}
                        <button className="btn-primary text-sm">
                            Book Meeting
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-500/80 backdrop-blur-md border-b border-purple-500/10 md:hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="#" className="flex items-center">
                            <img src="/logo.png" alt="getmoreclients.in" className="h-8 w-auto" />
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="py-4 border-t border-purple-500/10">
                            <div className="flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <button className="btn-primary text-sm w-fit">
                                    Book Meeting
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
