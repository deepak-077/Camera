"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface ScrollSectionsProps {
  sections: React.ReactNode[];
  className?: string;
}

const ScrollSections = ({ sections, className }: ScrollSectionsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elems = sectionRefs.current;
    const total = elems.length;
    if (!elems[0]) return;

    // Initial state
    gsap.set(elems[0], { y: "0%", opacity: 1, scale: 1, rotation: 0 });
    for (let i = 1; i < total; i++) {
      gsap.set(elems[i], { y: "100%", opacity: 0, scale: 1, rotation: 0 });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${window.innerHeight * (total - 1)}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    for (let i = 0; i < total - 1; i++) {
      const curr = elems[i];
      const next = elems[i + 1];

      // Outgoing section animation
      tl.to(
        curr,
        {
          y: "-100%",
          opacity: 0,
          scale: 0.95,
          rotation: 3,
          duration: 1,
          ease: "none",
        },
        i
      );

      // Incoming section animation
      tl.to(
        next,
        {
          y: "0%",
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "none",
        },
        i
      );
    }
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-screen overflow-hidden", className)}
    >
      {sections.map((Section, i) => (
        <div
          key={i}
          ref={(el) => (sectionRefs.current[i] = el)}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        >
          {Section}
        </div>
      ))}
    </div>
  );
};

export default ScrollSections;
