import { SplineScene } from './SplineScene';
import { Spotlight } from './ui/Spotlight';

const ROBOT_SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-black/[0.96] overflow-hidden">
            {/* Spotlight Effect */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            {/* Content Container */}
            <div className="flex flex-col lg:flex-row h-screen items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Left Side - Text Content */}
                <div className="flex-1 relative z-10 flex flex-col justify-center py-20 lg:py-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Interactive 3D
                    </h1>

                    <p className="mt-4 text-neutral-300 max-w-lg text-base md:text-lg leading-relaxed">
                        Bring your UI to life with beautiful 3D scenes. Create immersive experiences
                        that capture attention and enhance your design.
                    </p>

                    <button className="mt-8 btn-primary text-sm md:text-base px-6 py-3 inline-flex items-center space-x-2 group w-fit">
                        <span>Book Meeting</span>
                        <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>

                {/* Right Side - 3D Robot */}
                <div className="flex-1 relative w-full h-[400px] lg:h-full">
                    <SplineScene
                        scene={ROBOT_SCENE_URL}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
