import React from 'react';

const CallToValue: React.FC = () => {
    return (
        <section className="relative py-20 bg-transparent overflow-hidden wave-bg">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Final Call-To-Value
                </h2>

                <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10">
                    We were here misto in Casse get Wherd for for its the borther.
                    Your telemarks Scen in Your CIOCK
                </p>

                {/* CTA Button */}
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

                {/* Decorative line */}
                <div className="mt-16 flex items-center justify-center">
                    <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default CallToValue;
