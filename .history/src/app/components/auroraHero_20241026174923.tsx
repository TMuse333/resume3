"use client"

import { useEffect } from "react";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Link from "next/link";
import side from '../../../public/tom-side-angle.png'
import Image from "next/image";


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
 const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
    
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200
    "
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
         Front end engineer, content creator, marketer
        </span>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
         Thomas Musial
        </h1>
        <Image
            src={side}
            
          
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-[80vw]  object-contain mx-auto
           md:hidden rounded-full bg-gray-600
            
            "
            />

        <p className="my-6 max-w-xl text-left  text-base leading-relaxed md:text-lg md:leading-relaxed">
        Websites are becoming more and more important everyday. With so many of websites out there you need one that stands out to attraction attention but simple enough for a effortless user experience.
<br/><br/>
A great website can be the difference between your business thriving and having no one take you seriously. Would you trust someone with a non professional website or who doesn't even have one? Focus Flow will take care of all these problems for you and deliver a fantastic website to turn your vision into reality.
        </p>
        <Link href='/lets-work'>


        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Lets get to work
          {/* <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" /> */}
        </motion.button>
        </Link>
      </div>

      
    </motion.section>
    </>
  );
};

export default AuroraHero