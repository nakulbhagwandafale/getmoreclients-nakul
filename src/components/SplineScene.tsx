'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                        <p className="text-purple-400 text-sm animate-pulse">Loading 3D Experience...</p>
                    </div>
                </div>
            }
        >
            <Spline
                scene={scene}
                className={className}
                style={{
                    width: '120%',
                    height: '100%',
                }}
            />
        </Suspense>
    )
}

export default SplineScene
