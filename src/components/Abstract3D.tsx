import { Abstract3DPaths } from './ui/abstract-3d-paths';

interface Abstract3DProps {
    className?: string;
    style?: React.CSSProperties;
}

const Abstract3D: React.FC<Abstract3DProps> = ({ className = "w-full h-full", style }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`} style={style}>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-purple-600/25 rounded-full blur-3xl scale-50"></div>

            <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 0 40px rgba(139, 92, 246, 0.5))' }}
                role="img"
                aria-label="Abstract 3D Shape"
            >
                <Abstract3DPaths />
            </svg>
        </div>
    );
};

export default Abstract3D;
