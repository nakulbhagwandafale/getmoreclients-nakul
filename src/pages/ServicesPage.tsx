import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-dark-500">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#0a0118] via-[#0d031a] to-dark-500 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Back Button */}
                    <Link
                        to="/"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
                            Our Services
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">AI-Powered</span> Marketing Solutions
                        </h1>
                        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                            We combine cutting-edge AI technology with proven marketing strategies to deliver exceptional results.
                            Explore our comprehensive range of services designed to accelerate your business growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Component with Flipping Cards */}
            <Services />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-b from-dark-500 to-[#0d031a]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Let's discuss how our AI-powered marketing solutions can help you achieve your goals.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="btn-primary text-base px-8 py-4 inline-flex items-center space-x-2 group">
                            <span>Book a Free Consultation</span>
                            <svg
                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                        <Link
                            to="/"
                            className="px-8 py-4 text-base text-white border border-purple-500/50 rounded-full hover:bg-purple-500/10 transition-all duration-300"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServicesPage;
