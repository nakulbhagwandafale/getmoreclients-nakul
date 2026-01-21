import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.5,  // Reduced for snappier response (was 0.8)
            easing: (t) => 1 - Math.pow(1 - t, 3), // Smoother cubic easing
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,  // More responsive wheel scrolling
            touchMultiplier: 2,  // Default is usually better for mobile
            infinite: false,
            syncTouch: false,  // Disabled to prevent conflicts with native touch
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
