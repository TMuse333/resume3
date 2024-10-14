'use client'; // Mark this file as a client component

import React, { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';
import Link from "next/link";
import SlidingText from "./slidingText";
import { useGeneralContext } from "@/context/context";
import { HTMLMotionProps, animate, useInView } from "framer-motion";


// Dynamically import framer-motion's motion components with type assertion
const MotionImg = dynamic(() => import('framer-motion').then(mod => mod.motion.img), {
  ssr: false,
  loading: () => <div>Loading...</div>, // Optional loading fallback
}) as React.ComponentType<HTMLMotionProps<'img'>>;

const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), {
  ssr: false,
  loading: () => <div>Loading...</div>, // Optional loading fallback
}) as React.ComponentType<HTMLMotionProps<'p'>>;

const MotionButton = dynamic(() => import('framer-motion').then(mod => mod.motion.button), {
  ssr: false,
  loading: () => <div>Loading...</div>, // Optional loading fallback
}) as React.ComponentType<HTMLMotionProps<'button'>>;

// Define props interface
interface Props {
  src: string;
  alt: string;
  title: string;
  description: string;
  buttonText?: string;
  destination?: string;
  reverse?: boolean;
  customText?:React.FC
}

const ImageTextBox: React.FC<Props> = ({
  src, alt, title, description,
  buttonText, destination,
  reverse, customText
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.8, once: true });
  const [slideComplete, setSlideComplete] = useState(false);
  const { isMobile } = useGeneralContext();

  const handleAnimation = async () => {
    const image = document.getElementById(`${title}-image`);
    const paragraph = document.getElementById(`${title}-paragraph`);
    const button = document.getElementById(`${title}-button`);

    if (image) {
      await animate(image, { opacity: 1 });
    }

    if (paragraph) {
      await animate(paragraph, { opacity: 1, y: 0 }, { ease: 'easeInOut' });
    }

    if (button) {
      await animate(button, { opacity: 1, x: 0 }, { ease: 'easeInOut' });
    }
  };

  useEffect(() => {
    if (slideComplete) {
      handleAnimation();
    }
  }, [slideComplete]);

  return (
    <section
      ref={ref}
      className={`w-screen flex flex-col md:flex-row items-center
        justify-center text-white ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
        mb-14 max-w-[1200px] mx-auto`}
    >
      {isMobile && (
        <SlidingText
          text={title}
          setSlideComplete={setSlideComplete}
          reverse={reverse}
        />
      )}

      <MotionImg
        src={src}
        alt={alt}
        id={`${title}-image`}
        className="mx-auto object-contain w-[90vw] h-[55vw] max-h-[567px] max-w-[668px] md:w-[45vw] opacity-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <section className="w-full md:w-[50vw]">
        {!isMobile && (
          <SlidingText
            text={title}
            setSlideComplete={setSlideComplete}
            reverse={reverse}
          />
        )}



        <MotionP
          id={`${title}-paragraph`}
          className="px-4 mt-4 font-semibold
            sm:text-md md:text-lg transition-[transform]
            opacity-0 translate-y-[4rem]"
        >
          {description}
        </MotionP>

        {destination && buttonText && (
          <Link href={destination}>
            <MotionButton
              id={`${title}-button`}
              className={`mt-4 p-3
                rounded-2xl bg-[#00bfff]
                text-white hover:text-[#00bfff]
                hover:bg-white hover:scale-[1.05] 
                transition-transform transition-colors opacity-0
                ${!reverse ? 'translate-x-[8rem]' : '-translate-x-[8rem]'} ml-4`}
            >
              {buttonText}
            </MotionButton>
          </Link>
        )}
      </section>
    </section>
  );
}

export default ImageTextBox;