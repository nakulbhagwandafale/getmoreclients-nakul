'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const GradientShaderMaterial = {
    uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color('#0a0118') },
        uColor2: { value: new THREE.Color('#1a0a2e') },
        uColor3: { value: new THREE.Color('#4c1d95') }, // Purple accent
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    varying vec2 vUv;

    // Simplex noise function
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      // Slow moving noise for organic flow
      float noise1 = snoise(vUv * 3.0 + uTime * 0.1);
      float noise2 = snoise(vUv * 6.0 - uTime * 0.15);
      
      // Mix colors based on noise
      vec3 color = mix(uColor1, uColor2, noise1 * 0.5 + 0.5);
      
      // Add subtle accent highlights
      float highlight = smoothstep(0.4, 0.6, noise2);
      color = mix(color, uColor3, highlight * 0.15); // Low opacity for subtle effect
      
      // Vignette
      float dist = distance(vUv, vec2(0.5));
      color *= 1.0 - dist * 0.5;

      gl_FragColor = vec4(color, 1.0);
    }
  `
};

const GradientBackground = () => {
    const mesh = useRef<THREE.Mesh>(null);

    // Initialize uniforms reference
    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uColor1: { value: new THREE.Color('#030014') }, // Deepest dark
            uColor2: { value: new THREE.Color('#0f0524') }, // Dark purple
            uColor3: { value: new THREE.Color('#581c87') }, // Purple accent
        }),
        []
    );

    useFrame((state) => {
        if (mesh.current) {
            (mesh.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.getElapsedTime();
        }
    });

    return (
        <mesh ref={mesh}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={GradientShaderMaterial.vertexShader}
                fragmentShader={GradientShaderMaterial.fragmentShader}
            />
        </mesh>
    );
};

export default function ShaderBackground() {
    return (
        <div className="absolute inset-0 w-full h-full -z-10">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                dpr={[1, 2]}
            >
                <GradientBackground />
            </Canvas>
        </div>
    );
}
