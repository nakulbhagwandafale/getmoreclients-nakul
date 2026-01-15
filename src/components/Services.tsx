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
        <div className="flex flex-col h-full w-full p-6">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white mb-5 shadow-lg shadow-purple-500/25">
                {service.icon}
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl font-bold text-white mb-1">
                {service.title}
            </h3>
            <p className="text-purple-400 text-sm font-medium mb-4">
                {service.subtitle}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {service.description}
            </p>

            {/* Hover hint */}
            <div className="mt-4 flex items-center text-purple-400 text-sm font-medium">
                <span>Hover to learn more</span>
                <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
        <div className="flex flex-col items-center justify-center h-full w-full p-6 text-center">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white mb-4 shadow-lg shadow-purple-500/25">
                {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-3">
                {service.title}
            </h3>

            {/* Full Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {service.backDescription}
            </p>

            {/* CTA Button */}
            <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-sm font-semibold rounded-full hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
                {service.buttonText}
            </button>
        </div>
    );
}

const Services = () => {
    return (
        <section id="services" className="relative py-24 bg-gradient-to-b from-dark-500 via-[#0d031a] to-dark-500 overflow-hidden">

            {/* Services Grid with Flipping Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-6">
                    {services.map((service) => (
                        <FlippingCard
                            key={service.id}
                            width={320}
                            height={340}
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
