"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

const images = [
  "img24.png",
  "img21.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
  "img7.png",
  "img8.png",
  "img15.png",
  "img10.png",
  "img11.png",
  "img12.png",
  "img13.png",
];

const Skiper30 = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="w-full bg-[#d2cabd] text-black">
      <div className="font-geist flex items-center justify-center gap-2 ">
          <span className="relative text-6xl uppercase leading-tight opacity-100 ">
            Where Every Click Becomes A Memory
          </span>
      </div>

      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-[#d2cabd] p-[2vw]"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[6], images[7], images[8]]} y={y4} />
      </div>
      
    </main>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
      style={{ y }}
    >
      
        {images.map((src, i) => (
          <div className="relative h-full w-full bg-white flex flex-col items-center gap-0.5 ">

        {/* first container - username and other info */}
              <div className="flex  w-full h-[35px] px-5 py-1">
                {/* inner container */}
                <div className="flex items-center justify-between w-full max-w-[466px] h-[32px] gap-2">

                  {/* dp image */}
                  <div className="flex items-center max-w-[41px] h-[41px]">
                    <img className="max-w-[32px] h-[32px] rounded-full" src="pic1.jpg" alt="" />
                  </div>

                  {/* name */}
                  <div className="flex w-full max-w-[390px] h-[18px] gap-5">
                    <div className="flex items-center max-w-[60px] h-[18px] gap-1" >
                      <span className=" text-sm">username</span>
                        {/* verified tag */}
                        <span className=" flex justify-center items-center max-w-[12px] h-[12px]">
                            <img className=" max-w-[12px] h-[12px]" src="verified.png" alt="" />
                        </span>
                    </div>
                  </div>

                  {/* follow button & option */}
                  <div className="flex items-center gap-1">
                    <button className="flex items-center justify-center h-[20px] text-sm text-center rounded-2xl bg-lime-400 p-2">Follow </button>
                    <span className="text-sm">...</span>
                  </div>

              </div>

            </div>
            
            <div key={i} className="relative h-[390px] w-[290px] overflow-hidden top-1.5">
              <img
              src={`${src}`}
              alt="image"
              className="pointer-events-none object-cover"
              />
            </div>
             <div className="flex h-[30px] w-[290px] bg-amber-300 justify-between items-center px-2">
                {/* like comment and share */}
                <div className="flex gap-1">
                  <img className="size-5 " src="like.png" alt="" />
                  <img className="size-5" src="comment.png" alt="" />
                  <img className="size-5" src="send.png" alt="" />
                </div>

                {/* bookmark */}
                <div>
                  <img className="size-5" src="bookmark.png" alt="" />

                </div>
              </div>

              {/* second section - total likes */}
              <div className="pl-5 w-full h-[18px] text-xs">
                707 likes
              </div>

              {/* third section - caption */}
              <div className="flex flex-col w-full min-h-[18px] max-h-[54px] h-auto pl-5">

                <div className="flex items-start max-w-[458px] w-full min-h-[18px] max-h-[36px] h-auto text-sm gap-0.5"> 
                  <div className="font-semibold"> username </div>
                  <span className="font-normal leading-tight">Thanks! for capturing the beautiful moments of life.</span>                
                </div>

                {/* fix later for long captions */}
                {/* <span className="text-sm">more</span> */}                 
              </div>

        </div>
      ))}
      
      
    </motion.div>
  );
};

export { Skiper30 };
