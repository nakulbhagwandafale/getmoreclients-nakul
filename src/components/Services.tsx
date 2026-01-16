import {
    Share2,
    Search,
    MousePointerClick,
    FileText,
    Smartphone,
    BarChart3,
    ShoppingCart,
    Play,
    Palette,
} from 'lucide-react';
import { FlippingCard } from './ui/flipping-card';

interface Service {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    backDescription: string;
    icon: React.ReactNode;
    buttonText: string;
}

const services: Service[] = [
    {
        id: 'social-media',
        title: 'Social Media',
        subtitle: 'AI-Powered Strategy',
        description: 'Successful social media marketing starts with a well-defined strategy enhanced by AI-driven insights.',
        backDescription: 'We enhance social media planning with AI insights, trend analysis, and performance prediction to deliver the right content to the right audience at the right time.',
        icon: <Share2 className="w-8 h-8" />,
        buttonText: 'Learn More',
    },
    {
        id: 'seo',
        title: 'SEO',
        subtitle: 'AI-Enhanced Optimization',
        description: 'Improve the quality and quantity of organic traffic to your website with AI-powered optimization.',
        backDescription: 'We strengthen SEO using AI-powered keyword research, content optimization, and ranking analysis to accelerate visibility on search engines and sustain long-term organic growth.',
        icon: <Search className="w-8 h-8" />,
        buttonText: 'Boost Rankings',
    },
    {
        id: 'ppc',
        title: 'PPC',
        subtitle: 'Smart Advertising',
        description: 'Pay-per-click marketing with AI-based bidding strategies for maximum ROI and conversions.',
        backDescription: 'We use AI-based bidding strategies, audience targeting, and ad performance optimization to reduce cost per click and maximize conversions with better ROI.',
        icon: <MousePointerClick className="w-8 h-8" />,
        buttonText: 'Start Campaign',
    },
    {
        id: 'content-strategy',
        title: 'Content Strategy',
        subtitle: 'AI-Driven Planning',
        description: 'Strategic content planning across platforms using AI insights for trending topics and formats.',
        backDescription: 'By using AI insights, we identify trending topics, optimal content formats, and platform-specific preferences to ensure your content reaches the right audience faster and builds trust.',
        icon: <FileText className="w-8 h-8" />,
        buttonText: 'Create Content',
    },
    {
        id: 'app-web-design',
        title: 'App & Web Design',
        subtitle: 'AI-Assisted UX',
        description: 'Combine creativity with AI-assisted user behavior analysis for impressive, converting websites.',
        backDescription: 'We combine creativity with AI-assisted user behavior analysis, performance testing, and design optimization to build visually impressive, easy-to-navigate websites that convert faster.',
        icon: <Smartphone className="w-8 h-8" />,
        buttonText: 'View Portfolio',
    },
    {
        id: 'infographics',
        title: 'Infographics',
        subtitle: 'Visual Storytelling',
        description: 'Transform complex information into visually engaging content optimized by AI.',
        backDescription: 'We enhance infographic design using AI-supported data structuring and visual optimization to communicate your brand message clearly and increase shareability.',
        icon: <BarChart3 className="w-8 h-8" />,
        buttonText: 'See Examples',
    },
    {
        id: 'ecommerce-assets',
        title: 'E-Commerce Assets',
        subtitle: 'AI-Optimized Assets',
        description: 'Persuasive digital assets that drive conversions with AI-based consumer behavior analysis.',
        backDescription: 'We use AI-based consumer behavior analysis and platform-specific optimization to create high-impact assets that improve purchase confidence and drive higher sales.',
        icon: <ShoppingCart className="w-8 h-8" />,
        buttonText: 'Increase Sales',
    },
    {
        id: 'animations',
        title: 'Animations',
        subtitle: 'AI-Enhanced Motion',
        description: 'Interactive and engaging animations with AI-assisted scripting and visual flow optimization.',
        backDescription: 'Our animation process is enhanced with AI-assisted scripting, visual flow optimization, and audience engagement analysis to convey complex ideas clearly and creatively.',
        icon: <Play className="w-8 h-8" />,
        buttonText: 'Watch Demo',
    },
    {
        id: 'brand-assets',
        title: 'Brand Assets',
        subtitle: 'AI-Driven Identity',
        description: 'Cohesive, memorable brand assets using AI-powered design consistency tools.',
        backDescription: 'We use AI-powered design consistency tools and brand intelligence to create cohesive, memorable brand assets that resonate with your audience.',
        icon: <Palette className="w-8 h-8" />,
        buttonText: 'Build Brand',
    },
];

interface CardFrontProps {
    service: Service;
}



function CardFront({ service }: CardFrontProps) {
    return (
        <div className="flex flex-col h-full w-full p-8 border border-white/5 bg-white/5 backdrop-blur-xl rounded-3xl hover:border-purple-500/30 transition-all duration-500 group">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-all duration-500">
                    {service.icon}
                </div>
                <div className="text-right">
                    <span className="text-xs font- tracking-wider text-purple-400/60 uppercase">Service</span>
                </div>
            </div>

            {/* Content */}
            <div className="mt-2">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {service.title}
                </h3>
                <p className="text-purple-300/80 text-sm font-medium mb-4">
                    {service.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                </p>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-6 flex items-center text-sm font-medium text-white/40 group-hover:text-purple-400 transition-colors">
                <span>Explore Details</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </div>
    );
}

interface CardBackProps {
    service: Service;
}

function CardBack({ service }: CardBackProps) {
    return (
        <div className="flex flex-col h-full w-full p-8 border border-purple-500/30 bg-purple-900/40 backdrop-blur-xl rounded-3xl relative overflow-hidden">
            {/* Decorative Gradient */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col h-full items-center text-center justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 mb-6">
                    {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-[260px]">
                    {service.backDescription}
                </p>

                <button className="px-8 py-3 bg-white text-purple-900 text-sm font-bold rounded-full hover:bg-purple-50 transition-colors shadow-lg shadow-white/5">
                    {service.buttonText}
                </button>
            </div>
        </div>
    );
}

const Services = () => {
    return (
        <section id="services" className="relative py-32 bg-transparent overflow-hidden wave-bg">
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
                    {services.map((service) => (
                        <FlippingCard
                            key={service.id}
                            width={340}
                            height={420}
                            frontContent={<CardFront service={service} />}
                            backContent={<CardBack service={service} />}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
