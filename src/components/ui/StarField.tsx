import React, { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
}

const StarField: React.FC<{ className?: string }> = ({ className = "fixed inset-0" }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            // Lower density -> fewer stars. (Area / Density) = count.
            // Increased density value to decrease star count.
            const density = 2000; // Increased density for more stars
            const starCount = Math.floor((canvas.width * canvas.height) / density);

            // Limit max stars to avoid overload on massive screens
            const maxStars = 600; // Increased max count
            const finalCount = Math.min(starCount, maxStars);

            stars = [];
            for (let i = 0; i < finalCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5, // Slightly larger stars
                    opacity: Math.random() * 0.8 + 0.2, // Higher minimum opacity
                    speed: Math.random() * 0.15 + 0.02, // Slower, more majestic movement
                });
            }
        };

        const drawStars = () => {
            // Clear with simple rect
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "white";
            ctx.shadowBlur = 4; // Add glow
            ctx.shadowColor = "white";

            // Batch draws for performance

            // 1. Draw small stars (no shadow)
            ctx.shadowBlur = 0;
            ctx.fillStyle = "white";

            stars.forEach((star) => {
                // Update position
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = canvas.height;
                    star.x = Math.random() * canvas.width;
                }

                // Draw if small
                if (star.size <= 1.5) {
                    ctx.globalAlpha = star.opacity;
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            // 2. Draw large stars (with glow)
            ctx.shadowBlur = 4;
            ctx.shadowColor = "white";

            stars.forEach((star) => {
                if (star.size > 1.5) {
                    ctx.globalAlpha = star.opacity;
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(drawStars);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawStars();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`${className} z-[1] pointer-events-none`}
            style={{ background: 'transparent' }}
        />
    );
};

export default StarField;
