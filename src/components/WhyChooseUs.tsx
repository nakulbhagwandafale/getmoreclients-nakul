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
            title: 'Business & Services',
            items: ['Web & Tary Top, Cards', 'Cloud, AIML,', 'Cybersecurity'],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            id: 2,
            title: 'Digital Marketing Services',
            items: ['SEO, Google Ads, Social', 'Media, Content, Email,', 'Influencer Marketing,', 'Analytics.'],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            ),
        },
        {
            id: 3,
            title: 'Sales & Lead Services',
            items: ['UIVD Cloud Bd, SARIM,', 'Branding, Video Editing'],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
        },
    ];

    return (
        <section className="relative py-20 bg-dark-500 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title text-white">Why Choose Us</h2>
                    <p className="section-subtitle">
                        We've won games method envisioned find our organization
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="card text-center group hover:scale-105 transition-transform duration-300"
                        >
                            {/* Icon container */}
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-600/30 to-purple-800/30 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:text-purple-300 transition-colors">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-white mb-4">
                                {service.title}
                            </h3>

                            {/* Items */}
                            <ul className="text-gray-400 text-sm space-y-1">
                                {service.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-x-1/2"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl translate-x-1/2"></div>
        </section>
    );
};

export default WhyChooseUs;
