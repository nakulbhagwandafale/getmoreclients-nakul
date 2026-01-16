import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Users, Zap, Heart, Linkedin, Twitter, Github } from 'lucide-react';
import Navbar from '../components/Navbar';
import { GradientBorderCard } from '../components/ui/gradient-border-card';
import Footer from '../components/FooterSection';
import StarField from '../components/ui/StarField';

// --- Mock Data ---
const teamMembers = [
    {
        id: 1,
        name: "Elena Rodriguez",
        role: "Chief Executive Officer",
        bio: "Visionary leader with 15+ years in digital transformation. Elena steered her previous startup to a $50M exit before founding GetMoreClients.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        id: 2,
        name: "David Chen",
        role: "Chief Technology Officer",
        bio: "Former Principal Engineer at Google. David architects our proprietary AI models and ensures our infrastructure scales effortlessly.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        socials: { linkedin: "#", github: "#" }
    },
    {
        id: 3,
        name: "Sarah Johnson",
        role: "Head of Product",
        bio: "Sarah bridges the gap between complex AI capabilities and intuitive user experiences. She believes technology should feel like magic.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        id: 4,
        name: "Michael Ross",
        role: "Lead AI Engineer",
        bio: "PhD in Machine Learning from Stanford. Michael pushes the boundaries of what our predictive algorithms can achieve.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
        socials: { linkedin: "#", github: "#" }
    },
    {
        id: 5,
        name: "Emily Parker",
        role: "Creative Director",
        bio: "Award-winning designer with a portfolio spanning major tech brands. Emily ensures every pixel we ship is perfect.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        id: 6,
        name: "James Wilson",
        role: "VP of Sales",
        bio: "James understands the agency landscape inside out. He focuses on building lasting partnerships rather than just closing deals.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
        socials: { linkedin: "#" }
    },
    {
        id: 7,
        name: "Linda Wu",
        role: "Operations Manager",
        bio: "The glue that holds the team together. Linda optimizes our internal workflows so we can move fast without breaking things.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
        socials: { linkedin: "#" }
    },
    {
        id: 8,
        name: "Robert Fox",
        role: "Frontend Architect",
        bio: "Specialist in high-performance web applications. Robert ensures our client dashboards are snappy and responsive.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        socials: { linkedin: "#", github: "#" }
    },
    {
        id: 9,
        name: "Jessica Lee",
        role: "Marketing Strategist",
        bio: "Data-driven marketer who knows how to tell a story. Jessica crafts the campaigns that put GetMoreClients on the map.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        id: 10,
        name: "William Brown",
        role: "Customer Success Lead",
        bio: "Dedicated to our clients' growth. William leads the team that ensures every agency using our platform succeeds.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        socials: { linkedin: "#" }
    },
];

const AboutPage = () => {
    const [selectedId, setSelectedId] = useState(1);
    const selectedMember = teamMembers.find(m => m.id === selectedId) || teamMembers[0];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#11052C] relative">
            <StarField />
            <Navbar />

            <main className="pt-24 pb-0">
                {/* Hero Section */}
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-purple-200 to-purple-400 drop-shadow-lg">
                            We Are GetMoreClients
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Democratizing enterprise-grade growth systems for ambitious agencies worldwide.
                            We bridge the gap between human creativity and AI precision.
                        </p>
                    </motion.div>
                </section>

                {/* Our Story & Mission Grid */}
                <section className="py-16 px-4 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        {/* Story Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="h-full"
                        >
                            <GradientBorderCard className="p-8 h-full bg-[#0a0118]/80">
                                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    <Users className="text-blue-400" /> Our Story
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Founded in 2024, GetMoreClients emerged from a simple observation: agencies were great at serving clients but struggled to scale themselves. We set out to build the "OS for Agency Growth"—combining predictive AI, automated workflows, and battle-tested strategies to make growth inevitable, not accidental.
                                </p>
                            </GradientBorderCard>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="h-full"
                        >
                            <GradientBorderCard className="p-8 h-full bg-[#0a0118]/80">
                                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    <Target className="text-purple-400" /> Our Mission
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    To empower 10,000 agencies to double their revenue by 2026. We believe that when agencies thrive, innovation flourishes. We are building the infrastructure that powers the next generation of digital service businesses, removing the friction from client acquisition.
                                </p>
                            </GradientBorderCard>
                        </motion.div>
                    </div>
                </section>

                {/* Values / Approach Section */}
                <section className="py-20 bg-black/20">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white">Our Core Values</h2>
                            <p className="text-gray-400 mt-2">The principles that guide every decision we make.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Zap className="w-8 h-8 text-yellow-400" />,
                                    title: "Velocity",
                                    desc: "Speed matters. We ship fast, learn faster, and help our clients accelerate their time-to-value."
                                },
                                {
                                    icon: <Users className="w-8 h-8 text-pink-400" />,
                                    title: "Client-Obsessed",
                                    desc: "Your growth is our growth. We measure our success solely by the tangible results we generate for you."
                                },
                                {
                                    icon: <Heart className="w-8 h-8 text-red-500" />,
                                    title: "Integrity",
                                    desc: "We believe in transparent data, honest pricing, and building systems that stand the test of time."
                                }
                            ].map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="h-full group"
                                >
                                    <GradientBorderCard className="p-8 h-full bg-[#0a0118]/80">
                                        <div className="mb-4 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                            {value.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                        <p className="text-gray-400">{value.desc}</p>
                                    </GradientBorderCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section (Inlined from AboutUs) */}
                <section id="team" className="relative py-24 bg-transparent overflow-hidden">
                    {/* Ambient Background Glow */}
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-16">

                        {/* Section Header */}
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                                Meet Our Team
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Meet the diverse minds shaping the future of agency growth.
                            </p>
                        </div>

                        {/* --- UPPER PART: Selected Member Details --- */}
                        <div className="min-h-[300px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedMember.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full max-w-4xl"
                                >
                                    <GradientBorderCard className="p-8 md:p-12 w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-[#0a0118]/80">
                                        {/* Large Image of Selected Member */}
                                        <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                                            <img
                                                src={selectedMember.image}
                                                alt={selectedMember.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Text Content */}
                                        <div className="flex-1 text-center md:text-left space-y-4">
                                            <div>
                                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedMember.name}</h3>
                                                <p className="text-lg text-purple-400 font-medium tracking-wide border-b border-purple-500/30 inline-block pb-1">
                                                    {selectedMember.role}
                                                </p>
                                            </div>
                                            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                                                {selectedMember.bio}
                                            </p>

                                            {/* Social Links */}
                                            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                                                <button className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white">
                                                    <Linkedin className="w-5 h-5" />
                                                </button>
                                                <button className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white">
                                                    <Twitter className="w-5 h-5" />
                                                </button>
                                                <button className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white">
                                                    <Github className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </GradientBorderCard>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* --- LOWER PART: Infinite Marquee --- */}
                        <div className="relative w-full overflow-hidden mask-linear-fade">
                            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0118] to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0118] to-transparent z-10 pointer-events-none" />

                            <div className="flex w-full">
                                <motion.div
                                    className="flex gap-6 pr-6"
                                    animate={{ x: "-50%" }}
                                    transition={{
                                        duration: 30,
                                        ease: "linear",
                                        repeat: Infinity
                                    }}
                                >
                                    {[...teamMembers, ...teamMembers].map((member, idx) => (
                                        <motion.div
                                            key={`${member.id}-${idx}`}
                                            className={`
                                                relative w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-full overflow-hidden cursor-pointer border-2 transition-all duration-300
                                                ${selectedId === member.id ? 'border-purple-500 scale-110 shadow-[0_0_20px_rgba(168,85,247,0.5)]' : 'border-white/10 grayscale hover:grayscale-0 hover:scale-105 hover:border-white/50'}
                                            `}
                                            onMouseEnter={() => setSelectedId(member.id)}
                                            onClick={() => setSelectedId(member.id)}
                                        >
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
