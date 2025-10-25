"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface Floating3DProps {
  sections: number;
}

function CameraPlane() {
  const texture = useLoader(TextureLoader, "/camera.png");
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(t * 0.5) * 0.15;
    meshRef.current.rotation.x = Math.cos(t * 0.3) * 0.08;
    meshRef.current.position.y = Math.sin(t * 0.6) * 0.05;
  });

  return (
    <mesh ref={meshRef} scale={[3, 3, 3]}>
      <planeGeometry args={[3, 2]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

export default function Floating3DCamera({ sections }: Floating3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<THREE.Group>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!groupRef.current || !containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body, // track global scroll
        start: "top top",
        end: `+=${window.innerHeight * (sections - 1)}`,
        scrub: 1,
      },
    });

    tl.to(groupRef.current.rotation, { z: 0.3, x: 0.1 }, 0);
    tl.to(groupRef.current.scale, { x: 1.3, y: 1.3, z: 1.3 }, 0);
    tl.to(groupRef.current.position, { z: -1, x: 0.5 }, 0);
  });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[5]"
    >
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <group ref={groupRef}>
          <CameraPlane />
        </group>
      </Canvas>
    </div>
  );
}
