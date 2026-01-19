import { FlippingCard } from './ui/flipping-card';
import { GradientBorderCard } from './ui/gradient-border-card';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import type { ServiceDetail } from '../data/services';
import { Link } from 'react-router-dom';

interface CardProps {
    service: ServiceDetail;
}

function CardFront({ service }: CardProps) {
    const Icon = service.icon;
    return (
        <GradientBorderCard className="p-8 flex flex-col h-full bg-[#0a0118]/90">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-all duration-500">
                    <Icon className="w-6 h-6" />
                </div>
                <div className="text-right opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-purple-400" />
                </div>
            </div>

            {/* Content */}
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {service.title}
                </h3>
                <p className="text-purple-400/80 text-sm font-medium mb-4 uppercase tracking-wider">
                    {service.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                </p>
            </div>

            {/* Hint */}
            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">Hover to flip</span>
            </div>
        </GradientBorderCard>
    );
}

function CardBack({ service }: CardProps) {
    const Icon = service.icon;
    return (
        <GradientBorderCard className="p-8 flex flex-col h-full items-center justify-center text-center bg-[#1a0a2e]/95">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 mb-6">
                <Icon className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-8">
                {service.shortDescription}
            </p>

            <Link
                to={`/services/${service.id}`}
                className="px-8 py-3 bg-white text-purple-900 text-sm font-bold rounded-full hover:bg-purple-50 transition-colors shadow-lg shadow-white/5 inline-flex items-center gap-2"
            >
                Explore Solution <ArrowRight className="w-4 h-4" />
            </Link>
        </GradientBorderCard>
    );
}

const Services = () => {
    return (
        <section id="services" className="relative py-32 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our Expertise
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        We combine creativity with data-driven technologies to deliver
                        exceptional digital experiences that grow your business.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {servicesData.map((service) => (
                        <div key={service.id} className="cursor-pointer">
                            {/* Wrapping in functionality done via Link in CardBack, 
                                 but user might want entire card clickable? 
                                 Flipped card interaction suggests button click is primary. 
                                 Keeping it consistent with design. 
                             */}
                            <FlippingCard
                                width={350}
                                height={450}
                                frontContent={<CardFront service={service} />}
                                backContent={<CardBack service={service} />}
                                className="group"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
