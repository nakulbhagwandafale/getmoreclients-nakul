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
            // If absolute, use parent dimensions? Or just window?
            // For full-screen sections like footer, window is fine.
            // But better to use clientWidth/clientHeight for robustness if we can.
            // Stick to window for now as footer is h-screen.
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            const starCount = Math.floor((canvas.width * canvas.height) / 3000); // Adjust density
            stars = [];
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5, // Larger stars (0.5 to 2.5px)
                    opacity: Math.random() * 0.6 + 0.4, // Brighter stars (0.4 to 1.0 opacity)
                    speed: Math.random() * 0.2 + 0.05,
                });
            }
        };

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Move star
                star.y -= star.speed;

                // Reset if off screen
                if (star.y < 0) {
                    star.y = canvas.height;
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
