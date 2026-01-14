import React from 'react';
import ShaderBackground from './ShaderBackground';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Animated Shader Background */}
            <ShaderBackground />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                    <span className="text-white">Professional Digital, IT</span>
                    <br />
                    <span className="text-white">& Business Services...</span>
                    <br />
                    <span className="glow-text">Delivered with Clarity</span>
                    <br />
                    <span className="glow-text">and Reliability</span>
                </h1>

                <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    We help start-ups and growing businesses scale through
                    marketing, technology, design, and consulting — without
                    confusion or unnecessary complexity.
                </p>

                <button className="btn-primary text-base md:text-lg px-8 py-4 inline-flex items-center space-x-2 group">
                    <span>Book Meeting</span>
                    <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0118] to-transparent z-10"></div>
        </section>
    );
};

export default Hero;
