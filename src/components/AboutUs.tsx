import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function AboutUs() {
    const content = [
        {
            quote:
                "We are more than a digital agency; we are your strategic growth partners. Our mission is to democratize access to enterprise-grade growth systems for ambitious businesses worldwide.",
            name: "Our Mission",
            designation: "Empowering Growth",
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
        },
        {
            quote:
                "Innovation is in our DNA. We relentlessly explore the frontiers of AI, automation, and design to ensure our clients always stay ahead of the curve in a rapidly evolving digital landscape.",
            name: "Innovation First",
            designation: "Future-Ready Solutions",
            src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
        },
        {
            quote:
                "Transparency Builds Trust. We believe in clear communication, honest reporting, and zero hidden fees. Your success is the only metric that matters to us.",
            name: "Core Values",
            designation: "Integrity & Transparency",
            src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop",
        },
        {
            quote:
                "Our team is a collective of visionary designers, expert developers, and strategic marketers. We bring diverse expertise together to solve complex challenges with elegance.",
            name: "Global Team",
            designation: "Expertise Across Borders",
            src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
        },
        {
            quote:
                "From startups to enterprises, we've helped hundreds of businesses scale their operations, automate their workflows, and achieve unprecedented ROI.",
            name: "Our Impact",
            designation: "Measurable Success",
            src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
        },
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background/Layout container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Driven by data, designed for humans. Learn more about the minds behind the magic.
                    </p>
                </div>

                <AnimatedTestimonials testimonials={content} autoplay={true} />
            </div>
        </section>
    );
}
