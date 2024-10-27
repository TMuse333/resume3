'use client'; // Mark this file as a client component

import React, {  useRef, useState } from "react";
import dynamic from 'next/dynamic';
import Link from "next/link";

import { useGeneralContext } from "@/context/context";
import { useInView, motion } from "framer-motion";
import Image from 'next/image'

// Dynamically import framer-motion's motion components with type assertion
// const MotionImg = dynamic(() => import('framer-motion').then(mod => mod.motion.img), {
//   ssr: false,
//   loading: () => <div>Loading...</div>, // Optional loading fallback
// }) as React.ComponentType<HTMLMotionProps<'img'>>;

// const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), {
//   ssr: false,
//   loading: () => <div>Loading...</div>, // Optional loading fallback
// }) as React.ComponentType<HTMLMotionProps<'p'>>;

// const MotionButton = dynamic(() => import('framer-motion').then(mod => mod.motion.button), {
//   ssr: false,
//   loading: () => <div>Loading...</div>, // Optional loading fallback
// }) as React.ComponentType<HTMLMotionProps<'button'>>;

// Define props interface
interface Props {
  src: string;
  alt: string;
  title: string;
  description?: string;
  buttonText?: string;
  destination?: string;
  reverse?: boolean;
  customText?:React.ReactNode
}

const ImageTextBox: React.FC<Props> = ({
  src, alt, title, description,
  buttonText, destination,
  reverse, customText
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.8, once: true });
  const [slideComplete, setSlideComplete] = useState(false);

  const variants = (delay:number) => {

    return {
      initial:{
        x: reverse ? -40 : 40,
        opacity:0
      },
      animate:{
        x:0,
        opacity:1,
        transition:{
          delay:delay
        }
      }
    }
  }

  const imageSlide = {

    initial:{
      opacity:0,
    x: reverse ? -40 : 40,
    }
  }

const MotionImage = motion(Image)

  return (
    <section
      ref={ref}
      className={`w-screen flex flex-col md:flex-row items-center
        justify-center text-white ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
        mb-14 max-w-[1200px] mx-auto`}
    >

{!customText && (
  <motion.h2 className="md:hidden
  font-semibold px-4 text-center
  text-3xl"
  variants={variants(0)}>{title}</motion.h2>
)}
    

      <MotionImage
        src={src}
        alt={alt}
        id={`${title}-image`}
        className="mx-auto object-contain w-[90vw] h-[55vw] max-h-[567px] max-w-[668px] md:w-[45vw]
        rounded-2xl"
        height={600}
        width={1300}

      />

<section className="w-full md:w-[50vw]">
  {!customText && (
  <motion.h2 className="hidden md:block text-white
  md:px-4 text-3xl font-semibold">
{title}
  </motion.h2>
  )}


  {/* Check if customText exists, otherwise render the default content */}
  {customText ? (
    <div className="custom-text-container">
     {customText}
    </div>
  ) : (
    <>
      <motion.p
        id={`${title}-paragraph`}
        className="px-4 mt-4 font-medium
          sm:text-md md:text-lg transition-[transform]
          whitespace-pre-line
         "
      >
        {description}
      </motion.p>

      {destination && buttonText && (
        <Link href={destination}>
          <motion.button
            id={`${title}-button`}
            className={`mt-4 p-3
              rounded-2xl bg-[#00bfff]
              text-white hover:text-[#00bfff]
              hover:bg-white hover:scale-[1.05] 
              transition-transform transition-colors opacity-0
              ${!reverse ? 'translate-x-[8rem]' : '-translate-x-[8rem]'} ml-4`}
          >
            {buttonText}
          </motion.button>
        </Link>
      )}
    </>
  )}
</section>

    </section>
  );
}

export default ImageTextBox;