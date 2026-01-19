import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';


const LetsMeetSection = () => {
    const cards = [
        {
            icon: <MessageCircle className="w-8 h-8 text-green-400" />,
            title: "Whatsapp Us",
            detail: "+91 9370425738",
            href: "https://wa.me/918779031795", // Assuming direct link
            delay: 0
        },
        {
            icon: <Phone className="w-8 h-8 text-blue-400" />,
            title: "Call Us",
            detail: "+91 9370425738",
            href: "tel:+919892010672",
            delay: 0.1
        },
        {
            icon: <MapPin className="w-8 h-8 text-purple-400" />,
            title: "We're On The Map",
            detail: "Mumbai | chembur",
            href: "#", // Link to actual map if available
            delay: 0.2
        },
        {
            icon: <Mail className="w-8 h-8 text-pink-400" />,
            title: "Send Us A Message",
            detail: "nakuldafale7@gmail.com",
            href: "mailto:teammofa@mofadigital.in",
            delay: 0.3
        }
    ];

    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 space-y-4"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Let’s Meet
                </h2>
                <p className="text-purple-300 font-medium text-lg tracking-wide">
                    Chai/Coffee And Samosa Is On Us
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, idx) => (
                    <motion.a
                        key={idx}
                        href={card.href}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: card.delay, duration: 0.6, ease: "easeOut" }}
                        className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center space-y-6 overflow-hidden"
                    >
                        {/* Hover Gradient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

                        {/* Icon Container with subtle glow */}
                        <div className="relative w-16 h-16 rounded-full bg-white/5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/5">
                            {card.icon}
                        </div>

                        <div className="space-y-2 relative z-10">
                            <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-gray-400 group-hover:text-white transition-colors font-medium">
                                {card.detail}
                            </p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default LetsMeetSection;
