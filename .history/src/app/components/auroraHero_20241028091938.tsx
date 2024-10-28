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

  function scrollToElementById(id:string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        console.warn(`Element with id "${id}" not found.`);
    }
}

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
    
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4  text-gray-200
    "
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
         Web Developer, Content Creator, Marketer
        </span>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
         Thomas Musial
        </h1>
        <Image
            src={side}
            priority
          
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-[40vw] md:w-[25vw] object-contain mx-auto
           rounded-full bg-gray-600 max-w-[240px] max-h-[360px]
            
            "
            />

        <p className="my-6 w-[80vw] max-w-[1000px] text-left  text-base leading-relaxed md:text-lg md:leading-relaxed
        sm:text-lg md:text-xl font-medium">
        I am a very focused individual
                who is dedicated to his craft of
                frontend design and becoming as
                useful and competent as I can be
                through hours of deep work everyday.
<br/><br/>
I build advanced animated web applications to help elevate other peoples
digital presences and currently learning how to do lead generation with my next js apps
        </p>
        <Link href='/lets-work'>


        <motion.button
        onClick={()=>scrollToElementById('closer')}
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