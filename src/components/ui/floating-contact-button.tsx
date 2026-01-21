
import { Mail } from 'lucide-react';

const FloatingContactButton = () => {
    return (
        <a
            href="https://cal.com/getmoreclients/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 left-8 z-[9999] p-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full shadow-lg shadow-purple-600/30 hover:scale-110 transition-all duration-300 group"
            aria-label="Start a project"
        >
            {/* Pulsing Glw Effect */}
            <div className="absolute inset-0 rounded-full bg-purple-500 blur-xl opacity-40 group-hover:opacity-60 animate-pulse duration-[3000ms]" />
            <div className="absolute inset-0 rounded-full bg-indigo-500 blur-md opacity-30 group-hover:opacity-50 animate-pulse delay-75 duration-[2000ms]" />

            {/* Main Button */}
            <div className="relative w-16 h-16 rounded-full bg-[#1a0b2e] border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] group-hover:border-purple-500/50 transition-all duration-300">
                <Mail className="w-7 h-7 text-white group-hover:text-purple-300 transition-colors" />

                {/* Inner Shine */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
            </div>

            {/* Tooltip hint (optional, appears on hover) */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
                Start a project
            </div>
        </a>
    );
};

export default FloatingContactButton;
