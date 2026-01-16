import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

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

export default function AboutUs() {
    const [selectedId, setSelectedId] = useState(1);
    const selectedMember = teamMembers.find(m => m.id === selectedId) || teamMembers[0];

    return (
        <section className="relative py-24 bg-transparent overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-16">

                {/* Section Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                        About Us
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
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 w-full max-w-4xl flex flex-col md:flex-row items-center gap-8 md:gap-12"
                        >
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
                                    {/* Mock Social Icons */}
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
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* --- LOWER PART: Infinite Marquee --- */}
                <div className="relative w-full overflow-hidden mask-linear-fade">
                    {/* 
                      Gradient Masks on sides to fade the marquee edges.
                      (Requires custom CSS or inline styles if tailwind plugin not configured)
                    */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0118] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0118] to-transparent z-10 pointer-events-none" />

                    <div className="flex w-full">
                        {/* We duplicate the array to create a seamless loop */}
                        <motion.div
                            className="flex gap-6 pr-6"
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 30, // Slow speed
                                ease: "linear",
                                repeat: Infinity
                            }}
                            whileHover={{ animationPlayState: 'paused' }} // Note: Framer Motion uses visual state, simple CSS hover is easier for pause. 
                        // Actually, with Framer Motion 'animate', sticking to native 'animation-play-state' logic via CSS class is often more robust, 
                        // but let's try a hover override or just accept continuous flow.
                        // Better UX: Allow interaction. 
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
                                // Make sure mouse enter triggers dynamic update
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
    );
}

// Ensure the marquee has wide enough content for x: -50% to work correctly with duplicated array.
// With 20 items (10x2), it should be plenty wide.
