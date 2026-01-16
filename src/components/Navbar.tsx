import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Work', href: '/work', isRoute: true },
    { name: 'Services', href: '/services', isRoute: true },
    { name: 'About Us', href: '/about', isRoute: true },
    { name: 'Blog', href: '/blog', isRoute: true },
    { name: 'Contact', href: '/contact', isRoute: true },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 hidden md:block bg-gradient-to-r from-[#0a0118]/95 via-[#1a0a2e]/90 to-[#0a0118]/95 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-900/20">
                <div className="w-full px-8 md:px-12 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo - Left */}
                        <Link to="/" className="flex items-center space-x-2">
                            <img src="/logo.png" alt="getmoreclients.in" className="h-20 w-auto" />
                        </Link>


                        {/* Standard Navigation - Center */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navigation.map((link) => (
                                link.isRoute ? (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.href
                                            ? 'text-purple-400'
                                            : 'text-gray-300 hover:text-white'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                                    >
                                        {link.name}
                                    </a>
                                )
                            ))}
                        </div>

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
                        <Link to="/" className="flex items-center">
                            <img src="/logo.png" alt="getmoreclients.in" className="h-8 w-auto" />
                        </Link>

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
                                {navigation.map((link) => (
                                    link.isRoute ? (
                                        <Link
                                            key={link.name}
                                            to={link.href}
                                            className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.href
                                                ? 'text-purple-400'
                                                : 'text-gray-300 hover:text-white'
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    )
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
