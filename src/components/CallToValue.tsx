import React from 'react';

const CallToValue: React.FC = () => {
    return (
        <section className="relative py-32 bg-transparent overflow-hidden wave-bg">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                    Ready to Scale Your Business?
                </h2>

                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
                    Join hundreds of successful businesses that have transformed their digital presence.
                    Let's build something extraordinary together.
                </p>

                {/* CTA Button */}
                <button className="btn-primary text-lg md:text-xl px-10 py-5 inline-flex items-center space-x-3 group rounded-full shadow-2xl shadow-purple-900/40 hover:scale-105 transition-transform duration-300">
                    <span>Start Your Journey</span>
                    <svg
                        className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default CallToValue;
