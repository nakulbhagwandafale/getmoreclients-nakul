import { SplineScene } from './SplineScene';
import { Spotlight } from './ui/Spotlight';
import ShaderBackground from './ui/shader-background';

const ROBOT_SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <ShaderBackground />
            </div>

            {/* Spotlight Effect - Overlaid on top of background but behind content */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
            </div>

            {/* Content Container */}
            <div className="flex flex-col lg:flex-row h-screen items-center w-full px-8 md:px-12 relative z-10">

                {/* Left Side - Text Content */}
                <div className="flex-1 lg:flex-none lg:w-[50%] relative z-10 flex flex-col justify-center py-20 lg:py-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
                        Get More Clients,
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                            Grow Your Business
                        </span>
                    </h1>

                    <p className="mt-6 text-neutral-300 max-w-lg text-base md:text-lg leading-relaxed">
                        Transform your digital presence with data-driven marketing strategies.
                        We help businesses attract, convert, and retain high-value clients through
                        proven growth tactics and cutting-edge technology.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="btn-primary text-sm md:text-base px-6 py-3 inline-flex items-center space-x-2 group">
                            <span>Book a Free Consultation</span>
                            <svg
                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                        <button className="px-6 py-3 text-sm md:text-base text-white border border-purple-500/50 rounded-full hover:bg-purple-500/10 transition-all duration-300">
                            View Our Work
                        </button>
                    </div>
                </div>

                {/* Right Side - 3D Robot */}
                <div className="flex-1 lg:flex-none lg:w-[50%] relative w-full h-[400px] lg:h-full">
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
