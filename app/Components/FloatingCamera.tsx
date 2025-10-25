
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

//     const cameraHeight = camera.offsetHeight;
//     const cameraWidth = camera.offsetWidth;

//     // Initial position: center of first page
//     gsap.set(camera, {
//       xPercent: -50,
//       yPercent: -50,
//       left: "50%",
//       top: "50%",
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: `+=${window.innerHeight * (sections - 1)}`,
//         scrub: 1,
//       },
//     });

//     // 1️⃣ First → Second page: move diagonally to the right
//     tl.to(camera, {
//       top: `calc(50% - ${window.innerHeight / 4}px)`, // slightly up for second page
//       left: `calc(50% + ${window.innerWidth / 4}px)`, // move right
//       rotation: 15,
//       scale: 1.3,
//       ease: "power1.inOut",
//     });

//     // 2️⃣ Second → Third page: move to center
//     tl.to(camera, {
//       top: "50%",  // center vertically
//       left: "50%", // center horizontally
//       rotation: 0,
//       ease: "power1.inOut",
//     });
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

    // Initial position: center of first page
    gsap.set(camera, {
      xPercent: -50,
      yPercent: -50,
      left: "50%",
      top: "50%",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${window.innerHeight * (sections - 2)}`, //animation length
        scrub: 1,
      },
    });

    // 1️⃣ First → Second page: same position, but finish sooner (at mid scroll)
    tl.to(
      camera,
      {
        top: `calc(55% - ${window.innerHeight / 4}px)`,
        left: `calc(50% + ${window.innerWidth / 4}px)`,
        rotation: 15,
        scale: 1.3,
        ease: "none",
      },
      0 // start immediately
    );

    // ⏱️ Add the timing tweak — compress this first motion into the first 50% of the scroll
    tl.addLabel("midSecondPage", 0.5);

    // 2️⃣ Second → Third page: move to center after that
    tl.to(
      camera,
      {
        top: "50%",
        left: "50%",
        rotation: 0,
        ease: "none",
      },
      "midSecondPage" // start next movement right after mid-second page
    );
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
