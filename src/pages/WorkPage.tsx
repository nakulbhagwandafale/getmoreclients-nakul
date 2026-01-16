import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterSection';
import StarField from '@/components/ui/StarField';

interface Project {
    id: number;
    title: string;
    description: string;
    client: string;
    image: string;
    tags: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Scaling SaaS to $10M ARR",
        description: "Implemented an AI-driven content engine that multiplied organic traffic by 400% in 6 months.",
        client: "TechFlow",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
        tags: ["SEO", "Content Marketing", "AI Strategy"]
    },
    {
        id: 2,
        title: "E-Commerce Conversion Optimization",
        description: "Redesigned the checkout flow using behavioral psychology, resulting in a 35% uplift in conversion.",
        client: "LuxeWear",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070",
        tags: ["CRO", "UX Design", "Data Analytics"]
    },
    {
        id: 3,
        title: "FinTech Brand Repositioning",
        description: "Executed a complete rebrand and go-to-market strategy for a next-gen payment processor.",
        client: "NovaPay",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2370",
        tags: ["Branding", "GTM Strategy", "Social Media"]
    },
    {
        id: 4,
        title: "AI Chatbot Integration",
        description: "Deployed a custom LLM support bot that reduced support ticket volume by 60% while improving CSAT.",
        client: "StreamLine",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2406",
        tags: ["AI Development", "Customer Support", "Automation"]
    }
];

const clients = [
    "Acme Corp", "GlobalTech", "Nebula", "Velocity", "FoxRun", "Circle",
    "Quantum", "Apex", "Horizon", "Elevate", "Zenith", "Pinnacle",
    "Vortex", "Synergy", "Metric", "Oasis"
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10"
        >
            <div className="aspect-[4/3] overflow-hidden relative">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-purple-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <button className="px-6 py-3 bg-white text-purple-900 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                        View Case Study <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="p-8 relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">{project.client}</span>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const WorkPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0118] relative font-sans text-white overflow-hidden">
            <StarField />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                        Our Portfolio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Transforming Ideas into <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Digital Reality.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Explore how we've helped ambitious brands scale through AI-driven marketing and world-class design.
                    </p>
                </motion.div>
            </section>

            {/* Projects Grid */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </section>

            {/* Trusted By Clients Marquee */}
            <section className="py-24 border-t border-white/5 bg-white/[0.02] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                    <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Trusted by industry leaders</p>
                </div>

                <div className="relative flex overflow-hidden group">
                    {/* Gradient Masks for Fade Effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#0a0118] to-transparent z-10 pointers-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#0a0118] to-transparent z-10 pointers-events-none" />

                    <motion.div
                        className="flex gap-16 md:gap-24 whitespace-nowrap min-w-max"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 50,
                            ease: "linear",
                            repeat: Infinity
                        }}
                    >
                        {[...clients, ...clients].map((client, i) => (
                            <div
                                key={i}
                                className="text-3xl md:text-4xl font-bold text-white/40 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 cursor-default tracking-tight"
                            >
                                {client}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to start your project?</h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary px-10 py-5 text-lg rounded-2xl inline-flex items-center gap-2"
                    >
                        Get a Proposal <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WorkPage;
