import React, { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    size: number;
    baseOpacity: number; // The "resting" opacity
    opacity: number;     // Current opacity
    speed: number;
    twinkleSpeed: number;
    twinklePhase: number;
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
            const density = 2500; // Determines star count (pixel area per star)
            const starCount = Math.floor((canvas.width * canvas.height) / density);

            stars = [];
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.5, // 0.5 to 2.0 size
                    baseOpacity: Math.random() * 0.5 + 0.2, // 0.2 to 0.7 base
                    opacity: 0,
                    speed: Math.random() * 0.15 + 0.02, // Slow upward drift
                    twinkleSpeed: Math.random() * 0.05 + 0.01,
                    twinklePhase: Math.random() * Math.PI * 2,
                });
            }
        };

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const time = Date.now();

            stars.forEach((star) => {
                // Twinkle Logic: sine wave around baseOpacity
                // range: baseOpacity +/- 0.2 (clamped 0 to 1)
                const twinkle = Math.sin(time * 0.002 * star.twinkleSpeed + star.twinklePhase);
                star.opacity = Math.max(0.1, Math.min(1, star.baseOpacity + twinkle * 0.2));

                // Draw Star
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Glow Effect (only for brighter stars)
                if (star.opacity > 0.5) {
                    ctx.shadowBlur = star.size * 4;
                    ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
                } else {
                    ctx.shadowBlur = 0;
                }

                // Move star
                star.y -= star.speed;

                // Reset if off screen (wrap around)
                if (star.y < -5) {
                    star.y = canvas.height + 5;
                    star.x = Math.random() * canvas.width;
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
            className={`${className} z-0 pointer-events-none`}
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default StarField;
