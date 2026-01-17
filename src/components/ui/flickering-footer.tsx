import { useEffect, useRef } from "react";

interface Dot {
    x: number;
    y: number;
    isActive: boolean;
    // Animation properties
    phase: number;      // Random starting point in the sine wave
    frequency: number;  // How fast it pulses
    baseAlpha: number;  // Minimum brightness
    maxAlpha: number;   // Maximum brightness
}

interface FlickeringFooterProps {
    text?: string;
    className?: string;
    gridSize?: number; // Distance between dots (smaller = sharper text)
    dotSize?: number;  // Radius of dots
}

export const Component = ({
    text = "Get More Client",
    className = "",
    gridSize = 4,   // Reduced from 5 to 4 for "precise outlining" and higher density
    dotSize = 1.2,  // Slightly smaller dots for elegance
}: FlickeringFooterProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let dots: Dot[] = [];
        let animationFrameId: number;
        let width = 0;
        let height = 0;

        const initDots = (w: number, h: number) => {
            width = Math.floor(w);
            height = Math.floor(h);

            if (width <= 0 || height <= 0) return;

            // 1. Offscreen Sampling
            const offCanvas = document.createElement("canvas");
            offCanvas.width = width;
            offCanvas.height = height;
            const offCtx = offCanvas.getContext("2d");
            if (!offCtx) return;

            // Draw Text centered - Use a clean, geometric sans-serif
            const fontSize = Math.min(width / (text.length * 0.6), height * 0.8);

            offCtx.font = `900 ${fontSize}px "Inter", "Replica", "Arial", sans-serif`; // Heavy weight for better dot fill
            offCtx.textAlign = "center";
            offCtx.textBaseline = "middle";
            offCtx.fillStyle = "white";
            offCtx.fillText(text, width / 2, height / 2);

            const imageData = offCtx.getImageData(0, 0, width, height).data;

            dots = [];
            // Create Grid
            for (let y = 0; y < height; y += gridSize) {
                for (let x = 0; x < width; x += gridSize) {
                    const alphaValue = imageData[(Math.floor(y) * width + Math.floor(x)) * 4 + 3];
                    const isActive = alphaValue > 128; // Threshold

                    // Only store dots that are part of the grid. 
                    // Active dots get the pulse, inactive get static or very faint pulse.
                    const dot: Dot = {
                        x,
                        y,
                        isActive,
                        phase: Math.random() * Math.PI * 2, // Random start phase
                        frequency: 1 + Math.random() * 2,   // Random speed (1Hz to 3Hz roughly)
                        baseAlpha: isActive ? 0.4 : 0.05,   // Active starts at 0.4, Inactive at 0.05
                        maxAlpha: isActive ? 1.0 : 0.1,     // Active peaks at 1.0, Inactive at 0.1
                    };
                    dots.push(dot);
                }
            }
        };

        const render = () => {
            const time = Date.now() / 1000; // Time in seconds
            ctx.clearRect(0, 0, width, height);

            dots.forEach((dot) => {
                // Smooth Sine Wave Breathing Animation
                // alpha = base + (max - base) * (0.5 + 0.5 * sin(t * freq + phase))
                const sineValue = Math.sin(time * dot.frequency + dot.phase);
                const normalizedSine = (sineValue + 1) / 2; // 0 to 1

                const currentAlpha = dot.baseAlpha + (dot.maxAlpha - dot.baseAlpha) * normalizedSine;

                ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;

                // Draw Dot
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
                ctx.fill();

                // Advanced Glow for Active Dots
                // Only apply expensive shadow rendering to active dots that are currently bright
                if (dot.isActive && currentAlpha > 0.6) {
                    ctx.shadowBlur = 6;
                    ctx.shadowColor = `rgba(168, 85, 247, ${currentAlpha})`; // Pulse glow intensity with alpha
                } else {
                    ctx.shadowBlur = 0;
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        const resize = () => {
            if (!container) return;
            const rect = container.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;

            ctx.scale(dpr, dpr);

            initDots(rect.width, rect.height);
        };

        const observer = new ResizeObserver(() => resize());
        observer.observe(container);
        resize();
        render();

        return () => {
            observer.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, [text, gridSize, dotSize]);

    return (
        <div ref={containerRef} className={`w-full h-full ${className}`}>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default Component;
