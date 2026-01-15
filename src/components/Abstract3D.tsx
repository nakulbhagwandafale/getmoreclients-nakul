const Abstract3D = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-purple-600/25 rounded-full blur-3xl scale-50"></div>

            <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 0 40px rgba(139, 92, 246, 0.5))' }}
            >
                <defs>
                    {/* Dark charcoal metallic - for back parts */}
                    <linearGradient id="darkMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1a1a1f" />
                        <stop offset="20%" stopColor="#2a2a35" />
                        <stop offset="40%" stopColor="#1f1f28" />
                        <stop offset="60%" stopColor="#35354a" />
                        <stop offset="80%" stopColor="#25252f" />
                        <stop offset="100%" stopColor="#1a1a1f" />
                    </linearGradient>

                    {/* Purple metallic highlight */}
                    <linearGradient id="purpleMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4c1d95" />
                        <stop offset="25%" stopColor="#7c3aed" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="75%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#4c1d95" />
                    </linearGradient>

                    {/* Bright purple edge */}
                    <linearGradient id="brightPurple" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6b21a8" />
                        <stop offset="50%" stopColor="#c084fc" />
                        <stop offset="100%" stopColor="#6b21a8" />
                    </linearGradient>

                    {/* Dark chrome for the inner tube */}
                    <linearGradient id="darkChrome" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0f0f15" />
                        <stop offset="30%" stopColor="#2d2d3a" />
                        <stop offset="50%" stopColor="#1a1a25" />
                        <stop offset="70%" stopColor="#3a3a4d" />
                        <stop offset="100%" stopColor="#0f0f15" />
                    </linearGradient>

                    {/* White shine */}
                    <linearGradient id="whiteShine" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                        <stop offset="30%" stopColor="rgba(255,255,255,0.2)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>

                    {/* Glow filter */}
                    <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Shadow filter */}
                    <filter id="shadowFilter">
                        <feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#000" floodOpacity="0.5" />
                    </filter>
                </defs>

                {/* === TWISTED KNOT SHAPE === */}

                {/* Back twisted loop - dark metallic */}
                <path
                    d="M100,220 
                       C50,180 60,120 110,100 
                       C160,80 220,90 250,130 
                       C280,170 270,230 230,260 
                       C190,290 130,280 100,220"
                    fill="url(#darkMetal)"
                    filter="url(#shadowFilter)"
                />

                {/* Main twisted tube - going behind */}
                <path
                    d="M280,160 
                       C320,120 350,150 340,200 
                       C330,250 290,280 240,280 
                       C190,280 150,250 140,200 
                       C130,150 160,110 200,100 
                       C240,90 260,110 280,160"
                    fill="url(#darkChrome)"
                    filter="url(#shadowFilter)"
                />

                {/* Front crossing ribbon - purple metallic */}
                <path
                    d="M150,180 
                       C130,140 160,100 210,105 
                       C260,110 290,150 285,200 
                       C280,250 250,280 200,280 
                       C150,280 120,240 130,190 
                       C140,160 150,180 150,180"
                    fill="url(#purpleMetal)"
                    filter="url(#glowFilter)"
                />

                {/* Inner loop hole - dark */}
                <ellipse
                    cx="210" cy="190" rx="50" ry="35"
                    fill="url(#darkMetal)"
                    transform="rotate(-15 210 190)"
                />

                {/* Overlapping twisted segment */}
                <path
                    d="M170,150 
                       Q200,120 240,140 
                       Q280,160 275,200 
                       Q270,240 230,255 
                       Q190,270 160,240 
                       Q130,210 150,170 
                       Q165,145 170,150"
                    fill="url(#darkChrome)"
                    opacity="0.9"
                />

                {/* Purple accent band */}
                <path
                    d="M175,165 
                       Q210,135 250,160 
                       Q280,185 265,220 
                       Q250,255 210,255 
                       Q170,255 155,220 
                       Q145,190 175,165"
                    fill="none"
                    stroke="url(#brightPurple)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    filter="url(#glowFilter)"
                />

                {/* Second purple accent */}
                <path
                    d="M130,200 
                       Q140,160 180,155 
                       Q220,150 250,175"
                    fill="none"
                    stroke="url(#brightPurple)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    opacity="0.7"
                    filter="url(#glowFilter)"
                />

                {/* Highlight shine on top curve */}
                <ellipse
                    cx="190" cy="140" rx="35" ry="10"
                    fill="url(#whiteShine)"
                    transform="rotate(-25 190 140)"
                />

                {/* Secondary highlight */}
                <ellipse
                    cx="260" cy="175" rx="25" ry="7"
                    fill="url(#whiteShine)"
                    transform="rotate(15 260 175)"
                />

                {/* Small highlight dots */}
                <circle cx="180" cy="135" r="5" fill="rgba(255,255,255,0.7)" />
                <circle cx="255" cy="168" r="4" fill="rgba(255,255,255,0.5)" />
                <circle cx="145" cy="195" r="3" fill="rgba(255,255,255,0.4)" />

                {/* Bottom reflection line */}
                <path
                    d="M160,260 Q200,270 240,258"
                    fill="none"
                    stroke="rgba(139,92,246,0.4)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};

export default Abstract3D;
