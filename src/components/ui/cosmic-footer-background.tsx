import React, { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
    targetX?: number;
    targetY?: number;
}

const CosmicFooterBackground: React.FC<{ className?: string }> = ({ className = "" }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        let width = 0;
        let height = 0;
        let mouseX = 0;
        let mouseY = 0;

        const resizeCanvas = () => {
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        };

        const initStars = () => {
            const density = 2500; // Density factor
            const count = Math.floor((width * height) / density);
            const maxStars = 400;
            const finalCount = Math.min(count, maxStars);

            stars = [];
            for (let i = 0; i < finalCount; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 2 + 0.5,
                    opacity: Math.random() * 0.7 + 0.3, // Brighter stars
                    speed: Math.random() * 0.4 + 0.1, // Floating speed
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // subtle glow for stars
            // Optimization: Batch draw calls to minimize state changes

            // 1. Draw small stars (no shadow)
            ctx.shadowBlur = 0;
            ctx.fillStyle = "white";

            stars.forEach((star) => {
                // Update physics first
                const dx = mouseX - star.x;
                const dy = mouseY - star.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 150;

                if (dist < maxDist) {
                    const force = (maxDist - dist) / maxDist;
                    star.x -= (dx / dist) * force * 2;
                    star.y -= (dy / dist) * force * 2;
                }

                star.y -= star.speed;
                star.x += Math.sin(star.y * 0.01) * 0.1;

                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }
                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;

                // Draw only if small
                if (star.size <= 1.5) {
                    ctx.globalAlpha = star.opacity;
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            // 2. Draw large stars (with glow)
            ctx.shadowBlur = 4;
            ctx.shadowColor = "rgba(255, 255, 255, 0.5)";

            stars.forEach((star) => {
                if (star.size > 1.5) {
                    ctx.globalAlpha = star.opacity;
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        window.addEventListener('resize', resizeCanvas);
        container.addEventListener('mousemove', handleMouseMove);

        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            container.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className={`absolute inset-0 w-full h-full bg-[#0a0118] ${className}`}>
            {/* Deep Cosmic Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118] via-[#110524] to-black z-0 pointer-events-none" />

            {/* Nebula Fog Layers */}
            <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10000ms]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/10 rounded-full blur-[100px] mix-blend-screen animate-bounce duration-[15000ms]" />
            <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-pink-900/5 rounded-full blur-[90px] mix-blend-overlay" />

            {/* Stars Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-10 w-full h-full opacity-90 block"
            />

            {/* Fine Grain Overlay for texture (optional premium feel) */}
            <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

export default CosmicFooterBackground;
