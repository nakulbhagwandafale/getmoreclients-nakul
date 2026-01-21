import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { CardStack } from "./ui/card-stack";
import type { CardStackItem } from "./ui/card-stack";

const staticTestimonials: CardStackItem[] = [
    {
        id: 101,
        title: "Sarah Jenkins",
        designation: "CMO, TechFlow",
        description: "GetMoreClients transformed our lead gen pipeline. We went from 50 to 300+ qualified leads per month in just one quarter. The ROI has been incredible.",
        imageSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=90&w=800&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 102,
        title: "Michael Chen",
        designation: "Founder, GrowthX",
        description: "Their AI-driven approach to SEO is unlike anything I've seen. We started ranking for competitive keywords within weeks, not months.",
        imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=90&w=800&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 103,
        title: "Elena Rodriguez",
        designation: "Director, CreativeStudio",
        description: "The team understood our brand voice perfectly. The content strategy they built increased our social engagement by 400%. Highly recommended!",
        imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=90&w=800&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 104,
        title: "David Park",
        designation: "CEO, InnovateNow",
        description: "Professional, data-driven, and transparent. They don't just promise results; they deliver them with detailed reporting every step of the way.",
        imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=90&w=800&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 105,
        title: "James Wilson",
        designation: "Marketing Head, SoftSolutions",
        description: "The best agency partner we've worked with. Their improved ad targeting lowered our CAC by 35% while scaling spend.",
        imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=90&w=800&auto=format&fit=crop",
        href: "#",
    },
];

const Testimonials = () => {
    const [items, setItems] = useState<CardStackItem[]>(staticTestimonials);

    useEffect(() => {
        const fetchTestimonials = async () => {
            if (!supabase) return;

            try {
                console.log("Fetching testimonials from Supabase...");
                const { data, error } = await supabase
                    .from('testimonials')
                    .select('*')
                    .eq('approved', true) // Only show approved testimonials
                    .order('created_at', { ascending: false });

                if (error) {
                    console.error('Error fetching testimonials:', error);
                    return;
                }

                console.log("Supabase testimonials data:", data);

                if (data && data.length > 0) {
                    const newItems: CardStackItem[] = data.map((item: any) => ({
                        id: item.id, // Keeping DB ID (e.g. 1, 2, 3)
                        title: item.name,
                        designation: item.designation + (item.company ? `, ${item.company}` : ''),
                        description: item.content,
                        imageSrc: item.image_url || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=90&w=800&auto=format&fit=crop", // Default avatar
                        href: "#",
                    }));

                    // Combine Supabase items with static items
                    setItems([...newItems, ...staticTestimonials]);
                } else {
                    console.log("No approved testimonials found.");
                }
            } catch (err) {
                console.error("Unexpected error fetching testimonials:", err);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <section className="relative py-32 bg-transparent wave-bg">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
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
                    <div className="w-full flex justify-center min-h-[550px] items-center relative z-10">
                        <CardStack
                            items={items}
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
