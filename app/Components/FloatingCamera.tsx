
// "use client";

// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// interface FloatingCameraProps {
//   sections: number;
// }

// const FloatingCamera = ({ sections }: FloatingCameraProps) => {
//   const cameraRef = useRef<HTMLImageElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     if (!cameraRef.current || !containerRef.current) return;

//     const camera = cameraRef.current;

//     // Initial position: center of first page
//     gsap.set(camera, {
//       xPercent: -50,
//       yPercent: -50,
//       left: "50%",
//       top: "50%",
//       opacity: 1,
      
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: `+=${window.innerHeight * (sections - 1)}`, // covers 4 pages worth of scroll
//         scrub: 1,
//       },
//     });

//     // 1️⃣ Page 1 → 2 transition
//     tl.to(
//       camera,
//       {
//         top: `calc(55% - ${window.innerHeight / 4}px)`,
//         left: `calc(50% + ${window.innerWidth / 4}px)`,
//         rotation: 15,
//         scale: 1.3,
//         ease: "none",
//       },
//       0
//     );

//     tl.addLabel("midSecondPage", 0.5);

//     // 2️⃣ Page 2 → 3 transition
//     tl.to(
//       camera,
//       {
//         top: "50%",
//         left: "50%",
//         rotation: 0,
//         scale: 1,
//         ease: "none",
//       },
//       "midSecondPage"
//     );

//     // 3️⃣ Fade out when reaching 4th section
//     tl.to(
//       camera,
//       {
//         opacity: 0,
//         ease: "none",
//       },
//       sections - 3 // triggers around the 3rd→4th section scroll
//     );
//   });

//   return (
//     <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10">
//       <img
//         ref={cameraRef}
//         src="camera.png"
//         alt="3D camera"
//         className="absolute w-[900px] opacity-90"
//       />
//     </div>
//   );
// };

// export default FloatingCamera;






// removed scroll section 


"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FloatingCameraProps {
  sections: number;
}

const FloatingCamera = ({ sections }: FloatingCameraProps) => {
  const cameraRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!cameraRef.current || !containerRef.current) return;

    const camera = cameraRef.current;

    // Initial camera position
    gsap.set(camera, {
      xPercent: -50,
      yPercent: -50,
      left: "50%",
      top: "50%",
      opacity: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${window.innerHeight * (sections - 1)}`,
        scrub: 1,
        scroller: window,
        invalidateOnRefresh: true,
      },
    });

    // 🟩 1️⃣ First → Second page
    tl.to(
      camera,
      {
        top: `calc(55% - ${window.innerHeight / 4}px)`,
        left: `calc(50% + ${window.innerWidth / 4}px)`,
        rotation: 15,
        scale: 1.3,
        ease: "none",
      },
      0
    );

    tl.addLabel("midSecondPage", 0.5);

    // 🟦 2️⃣ Second → Third page
    tl.to(
      camera,
      {
        top: "50%",
        left: "50%",
        rotation: 0,
        scale: 1,
        ease: "none",
        opacity:0
        
      },
      "midSecondPage"
    );

    // 🟥 3️⃣ Fade out for the last section
    
    tl.to(
      camera,
      {
        opacity: 0,
        ease: "none",

      },
      
      
      sections - 3
    );

    ScrollTrigger.refresh();
  });

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10">
      <img
        ref={cameraRef}
        src="camera.png"
        alt="3D camera"
        className="absolute w-[900px] opacity-90"
      />
    </div>
  );
};

export default FloatingCamera;
