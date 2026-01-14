import React, { useEffect, useRef } from 'react';

const ShaderBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener('resize', resize);

        const drawWave = (
            yOffset: number,
            amplitude: number,
            frequency: number,
            speed: number,
            color: string,
            lineWidth: number,
            phase: number = 0
        ) => {
            if (!ctx) return;

            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            ctx.lineCap = 'round';

            const centerY = canvas.height / 2 + yOffset;

            for (let x = 0; x <= canvas.width; x += 2) {
                const y = centerY +
                    Math.sin((x * frequency) + (time * speed) + phase) * amplitude +
                    Math.sin((x * frequency * 0.5) + (time * speed * 0.7) + phase) * (amplitude * 0.5) +
                    Math.sin((x * frequency * 2) + (time * speed * 1.3) + phase) * (amplitude * 0.3);

                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }

            ctx.stroke();
        };

        const animate = () => {
            if (!ctx) return;

            // Clear with gradient background
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#0a0118');
            gradient.addColorStop(0.5, '#0d0320');
            gradient.addColorStop(1, '#150530');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Add subtle radial glow
            const radialGradient = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, canvas.width * 0.6
            );
            radialGradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
            radialGradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.05)');
            radialGradient.addColorStop(1, 'transparent');
            ctx.fillStyle = radialGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw multiple wave layers
            const waveConfigs = [
                // Main bright waves
                { yOffset: 0, amplitude: 80, frequency: 0.003, speed: 0.8, color: 'rgba(168, 85, 247, 0.9)', lineWidth: 2.5, phase: 0 },
                { yOffset: -20, amplitude: 70, frequency: 0.0035, speed: 0.9, color: 'rgba(147, 51, 234, 0.8)', lineWidth: 2, phase: 1 },
                { yOffset: 30, amplitude: 90, frequency: 0.0025, speed: 0.7, color: 'rgba(192, 132, 252, 0.85)', lineWidth: 2.2, phase: 2 },

                // Secondary waves
                { yOffset: -50, amplitude: 60, frequency: 0.004, speed: 1.0, color: 'rgba(139, 92, 246, 0.7)', lineWidth: 1.8, phase: 3 },
                { yOffset: 60, amplitude: 75, frequency: 0.003, speed: 0.85, color: 'rgba(124, 58, 237, 0.75)', lineWidth: 2, phase: 4 },
                { yOffset: -80, amplitude: 55, frequency: 0.0045, speed: 1.1, color: 'rgba(167, 139, 250, 0.6)', lineWidth: 1.5, phase: 5 },

                // Subtle background waves
                { yOffset: 100, amplitude: 50, frequency: 0.005, speed: 0.6, color: 'rgba(139, 92, 246, 0.4)', lineWidth: 1.2, phase: 6 },
                { yOffset: -100, amplitude: 45, frequency: 0.0055, speed: 0.65, color: 'rgba(124, 58, 237, 0.35)', lineWidth: 1, phase: 7 },
                { yOffset: 130, amplitude: 40, frequency: 0.006, speed: 0.55, color: 'rgba(147, 51, 234, 0.3)', lineWidth: 0.8, phase: 8 },
                { yOffset: -130, amplitude: 35, frequency: 0.0065, speed: 0.5, color: 'rgba(168, 85, 247, 0.25)', lineWidth: 0.8, phase: 9 },

                // Extra fine detail waves
                { yOffset: 40, amplitude: 65, frequency: 0.0038, speed: 0.95, color: 'rgba(192, 132, 252, 0.6)', lineWidth: 1.5, phase: 10 },
                { yOffset: -40, amplitude: 70, frequency: 0.0032, speed: 0.88, color: 'rgba(167, 139, 250, 0.65)', lineWidth: 1.6, phase: 11 },
            ];

            // Apply blur effect for glow
            ctx.shadowBlur = 15;
            ctx.shadowColor = 'rgba(147, 51, 234, 0.5)';

            waveConfigs.forEach(config => {
                drawWave(
                    config.yOffset,
                    config.amplitude,
                    config.frequency,
                    config.speed,
                    config.color,
                    config.lineWidth,
                    config.phase
                );
            });

            // Reset shadow
            ctx.shadowBlur = 0;

            // Add sparkle/particle effects
            const particleCount = 20;
            for (let i = 0; i < particleCount; i++) {
                const x = (Math.sin(time * 0.5 + i * 0.5) * 0.5 + 0.5) * canvas.width;
                const y = canvas.height / 2 + Math.sin(time * 0.3 + i * 0.7) * 120;
                const opacity = Math.sin(time * 2 + i) * 0.3 + 0.4;
                const size = Math.sin(time * 1.5 + i * 0.3) * 1.5 + 2;

                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.fill();
            }

            time += 0.016;
            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 0 }}
        />
    );
};

export default ShaderBackground;
