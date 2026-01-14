import React from 'react';

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    image: string;
}

const Services: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            quote: "Colatify's structured features, the flexible onboarding process and the visual delight to build my team's confidence amazingly fast. It provides a completed user-friendly single platform for our Customer Success which is has...",
            author: "Sarah Johnson",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        },
        {
            id: 2,
            quote: "The user experience offered in Colatify has superb simplicity, being by easily choose a project-style way of handling different. We create your analytics tool and our company has that...",
            author: "Michael Chen",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        },
        {
            id: 3,
            quote: "Colatify's easy integration with native connectivity with a platform like HubSpot and Salesforce proved to be a great development. Segmenting customers for targeted automation saves us lots been a game-changer...",
            author: "Emily Rodriguez",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        },
    ];

    return (
        <section className="relative py-20 bg-dark-500 overflow-hidden">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="section-title text-white">Our Services</h2>
            </div>


            {/* Testimonials */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="card relative">
                            {/* Quote mark */}
                            <div className="absolute top-4 left-4 text-5xl text-purple-500/30 font-serif leading-none">
                                "
                            </div>

                            <div className="pt-8">
                                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                                    {testimonial.quote}
                                </p>

                                <div className="flex items-center mt-auto">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="w-10 h-10 rounded-full object-cover border-2 border-purple-500/50"
                                    />
                                    <span className="ml-3 text-white font-medium text-sm">
                                        {testimonial.author}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
