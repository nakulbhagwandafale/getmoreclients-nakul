import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    alpha: number;
    targetAlpha: number;
    flickerSpeed: number;
}

interface FlickeringTextProps {
    text: string;
    className?: string;
    particleCount?: number; // Approximate scaling factor
    fontSize?: number;
}

export default function FlickeringText({
    text = "GET MORE CLIENTS",
    className = "",
    fontSize = 120,
}: FlickeringTextProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;

        const spawnParticles = (width: number, height: number) => {
            // 1. Create an offscreen canvas to sample text
            const offCanvas = document.createElement("canvas");
            offCanvas.width = width;
            offCanvas.height = height;
            const offCtx = offCanvas.getContext("2d");
            if (!offCtx) return;

            // 2. Draw Text
            // Adjust font size based on screen width
            const responsiveFontSize = window.innerWidth < 768 ? fontSize * 0.5 : fontSize;

            offCtx.font = `900 ${responsiveFontSize}px "Inter", sans-serif`; // Use a thick font
            offCtx.textAlign = "center";
            offCtx.textBaseline = "middle";
            offCtx.fillStyle = "white";
            offCtx.fillText(text, width / 2, height / 2);

            // 3. Sample pixels
            const imageData = offCtx.getImageData(0, 0, width, height);
            const data = imageData.data; // RGBA array

            particles = [];
            // Step size determines density (smaller step = more particles)
            // We want high density but performant.
            const step = 4;

            for (let y = 0; y < height; y += step) {
                for (let x = 0; x < width; x += step) {
                    const index = (y * width + x) * 4;
                    const alpha = data[index + 3]; // Alpha channel

                    if (alpha > 128) {
                        // Found a pixel inside text
                        // Add some randomness to position to avoid grid look
                        if (Math.random() > 0.3) { // 70% chance to spawn
                            particles.push({
                                x: x + (Math.random() - 0.5) * step,
                                y: y + (Math.random() - 0.5) * step,
                                size: Math.random() * 1.5 + 0.5,
                                alpha: Math.random(),
                                targetAlpha: Math.random(),
                                flickerSpeed: 0.02 + Math.random() * 0.05,
                            });
                        }
                    }
                }
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Glow effect
            ctx.shadowBlur = 4;
            ctx.shadowColor = "rgba(168, 85, 247, 0.5)"; // Purple glow

            particles.forEach((p) => {
                // Flicker logic
                if (Math.abs(p.alpha - p.targetAlpha) < 0.05) {
                    p.targetAlpha = Math.random() * 0.8 + 0.2; // Stay visible
                }

                // Lerp alpha
                const diff = p.targetAlpha - p.alpha;
                p.alpha += diff * p.flickerSpeed;

                ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        const resize = () => {
            const { clientWidth, clientHeight } = container;
            // Setup high-DPI canvas
            const dpr = window.devicePixelRatio || 1;
            canvas.width = clientWidth * dpr;
            canvas.height = clientHeight * dpr;
            canvas.style.width = `${clientWidth}px`;
            canvas.style.height = `${clientHeight}px`;

            ctx.scale(dpr, dpr);
            spawnParticles(clientWidth, clientHeight);
        };

        // Initial setup
        const observer = new ResizeObserver(() => resize());
        observer.observe(container);
        resize();
        render();

        return () => {
            observer.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, [text, fontSize]);

    return (
        <div ref={containerRef} className={`w-full h-full flex items-center justify-center ${className}`}>
            <canvas ref={canvasRef} />
        </div>
    );
}
