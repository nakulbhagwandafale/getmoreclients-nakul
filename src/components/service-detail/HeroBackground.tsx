import { motion } from "framer-motion";

interface HeroBackgroundProps {
    gradientMap: { from: string; via: string; to: string };
}

export default function HeroBackground({ gradientMap }: HeroBackgroundProps) {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* 1. Deep Atmospheric Base */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${gradientMap.from} 0%, transparent 60%)`
                }}
            />

            {/* 2. Floating Gradient Orbs (Slower & Subtler) */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                    x: [-10, 10, -10],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] mix-blend-screen"
                style={{ backgroundColor: gradientMap.via, opacity: 0.1 }}
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                    y: [-20, 20, -20],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-40 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-screen"
                style={{ backgroundColor: gradientMap.to, opacity: 0.05 }}
            />

            {/* 3. Grid Overlay (Fainter) */}
            <div
                className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
                style={{ opacity: 0.03 }}
            />

            {/* 4. Floating Particles (Slower) */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        backgroundColor: i % 2 === 0 ? gradientMap.from : gradientMap.to,
                        width: Math.random() * 3 + 1 + "px",
                        height: Math.random() * 3 + 1 + "px",
                        top: Math.random() * 100 + "%",
                        left: Math.random() * 100 + "%",
                    }}
                    animate={{
                        y: [0, Math.random() * -50],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 10,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}
