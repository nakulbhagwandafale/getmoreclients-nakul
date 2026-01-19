
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FloatingContactButton = () => {
    const navigate = useNavigate();

    return (
        <motion.button
            onClick={() => navigate('/contact')}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 left-8 z-50 group"
            aria-label="Contact Us"
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
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white text-sm font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
                Start a project
            </div>
        </motion.button>
    );
};

export default FloatingContactButton;
