import React from 'react';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#services' },
        { name: 'About Us', href: '#about' },
        { name: 'Case Studies', href: '#cases' },
        { name: 'Contact', href: '#contact' },
    ];

    const services = [
        'Social Media Marketing',
        'SEO Optimization',
        'PPC Campaigns',
        'Content Strategy',
        'Web Development'
    ];

    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: '#' },
        { icon: <Twitter className="w-5 h-5" />, href: '#' },
        { icon: <Instagram className="w-5 h-5" />, href: '#' },
        { icon: <Linkedin className="w-5 h-5" />, href: '#' },
    ];

    return (
        <footer className="relative bg-transparent border-t border-purple-500/10">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">G</span>
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                GetMoreClients
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering businesses with data-driven digital marketing strategies.
                            We turn clicks into customers and visitors into value.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-purple-400 text-sm flex items-center group transition-colors"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service} className="text-gray-400 text-sm hover:text-purple-400 transition-colors cursor-pointer">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-3 text-gray-400 text-sm">
                                <MapPin className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                                <span>
                                    123 Innovation Drive,<br />
                                    Tech Valley, CA 94043
                                </span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 text-sm">
                                <Phone className="w-5 h-5 text-purple-500 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 text-sm">
                                <Mail className="w-5 h-5 text-purple-500 shrink-0" />
                                <span>hello@getmoreclients.in</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-purple-500/10 bg-black/20 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} GetMoreClients. All rights reserved.
                        </p>
                        <div className="flex space-x-8 text-sm text-gray-500 hover:text-gray-400">
                            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
