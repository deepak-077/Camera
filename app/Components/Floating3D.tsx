"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Floating3DProps {
  sections: number;
}

// 🧱 Separate child component inside Canvas
function FloatingObject() {
  const meshRef = useRef<Mesh>(null!);

  // Floating animation (inside Canvas ✅)
  useFrame(({ clock }) => {
    meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() / 2) * 0.2;
    meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.3;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

const Floating3D = ({ sections }: Floating3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<THREE.Group>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!groupRef.current || !containerRef.current) return;

    // Animate the entire group (✅ allowed)
    gsap.to(groupRef.current.position, {
      x: 2,
      y: -3,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${window.innerHeight * (sections - 1)}`,
        scrub: 1,
      },
    });
  });

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

       
        <group ref={groupRef}>
          <FloatingObject />
        </group>
      </Canvas>
    </div>
  );
};

export default Floating3D;
