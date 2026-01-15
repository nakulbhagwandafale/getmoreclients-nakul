import React from 'react';

interface ServiceCard {
    id: number;
    icon: React.ReactNode;
    title: string;
    items: string[];
}

const WhyChooseUs: React.FC = () => {
    const services: ServiceCard[] = [
        {
            id: 1,
            title: 'Development',
            items: ['Web & App Development', 'Cloud Solutions', 'Cybersecurity', 'AI Integration'],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            id: 2,
            title: 'Digital Marketing',
            items: ['SEO & SEM', 'Social Media Strategy', 'Content Marketing', 'Analytics & Reporting'],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            ),
        },
        {
            id: 3,
            title: 'Branding & Design',
            items: ['Brand Strategy', 'UI/UX Design', 'Video Production', 'Visual Identity'],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
        },
    ];

    return (
        <section className="relative py-32 bg-transparent overflow-hidden wave-bg">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Us</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        We blend innovation with expertise to deliver measurable results that drive your business forward.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white/5 border border-white/5 backdrop-blur-sm rounded-3xl p-10 text-center group hover:bg-white/10 hover:border-purple-500/20 transition-all duration-300"
                        >
                            {/* Icon container */}
                            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-all duration-300">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-purple-200 transition-colors">
                                {service.title}
                            </h3>

                            {/* Items */}
                            <ul className="text-gray-400 text-base space-y-3">
                                {service.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 opacity-60"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
