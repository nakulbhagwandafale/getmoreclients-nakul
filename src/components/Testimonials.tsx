import { CardStack } from "./ui/card-stack";
import type { CardStackItem } from "./ui/card-stack";

const testimonials: CardStackItem[] = [
    {
        id: 1,
        title: "Sarah Jenkins",
        designation: "CMO, TechFlow",
        description: "GetMoreClients transformed our lead gen pipeline. We went from 50 to 300+ qualified leads per month in just one quarter. The ROI has been incredible.",
        imageSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=90&w=800&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 2,
        title: "Michael Chen",
        designation: "Founder, GrowthX",
        description: "Their AI-driven approach to SEO is unlike anything I've seen. We started ranking for competitive keywords within weeks, not months.",
        imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=90&w=800&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 3,
        title: "Elena Rodriguez",
        designation: "Director, CreativeStudio",
        description: "The team understood our brand voice perfectly. The content strategy they built increased our social engagement by 400%. Highly recommended!",
        imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=90&w=800&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 4,
        title: "David Park",
        designation: "CEO, InnovateNow",
        description: "Professional, data-driven, and transparent. They don't just promise results; they deliver them with detailed reporting every step of the way.",
        imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=90&w=800&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 5,
        title: "James Wilson",
        designation: "Marketing Head, SoftSolutions",
        description: "The best agency partner we've worked with. Their improved ad targeting lowered our CAC by 35% while scaling spend.",
        imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=90&w=800&auto=format&fit=crop",
        href: "#",
    },
];

const Testimonials = () => {
    return (
        <section className="relative py-32 bg-transparent overflow-hidden wave-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="w-full text-center max-w-4xl mx-auto">
                        <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                            Client Success Stories
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Trusted by <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                                Industry Leaders
                            </span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Don't just take our word for it. See how we've helped businesses like yours achieve explosive growth and measurable results.
                        </p>
                        <div className="flex items-center justify-center space-x-8">
                            <div>
                                <h4 className="text-3xl font-bold text-white">500+</h4>
                                <p className="text-sm text-gray-500">Clients Served</p>
                            </div>
                            <div className="w-px h-12 bg-white/10"></div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">98%</h4>
                                <p className="text-sm text-gray-500">Retention Rate</p>
                            </div>
                        </div>
                    </div>

                    {/* Card Stack Animation */}
                    <div className="w-full flex justify-center h-[500px] items-center relative z-10">
                        <CardStack
                            items={testimonials}
                            autoAdvance={true}
                            intervalMs={4000}
                            pauseOnHover={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
