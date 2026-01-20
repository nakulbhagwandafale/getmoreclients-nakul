import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.8,  // Reduced from 1.2 for snappier response
            easing: (t) => 1 - Math.pow(1 - t, 3), // Smoother cubic easing
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,  // More responsive wheel scrolling
            touchMultiplier: 1.5,  // Reduced from 2 for better touch control
            infinite: false,
            syncTouch: true,  // Better mobile performance
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
