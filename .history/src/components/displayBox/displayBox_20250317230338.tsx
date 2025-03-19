import React, { useRef } from "react";
import Image from 'next/image'
import Link from "next/link";
import SlidingText from "../slidingText";
import { motion, useInView } from "framer-motion";

interface ElementProps {
    title:string,
    src:string,
    alt:string,
    description:string,
    buttonText?:string,
    destination?:string
}

const Element:React.FC<ElementProps> = ({
    title,src,alt,description,buttonText,
    destination
}) => {

    const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 1 });

  const containerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  };

  // Child elements animation variants
  const childVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 7,
      },
    },
  };
    return (
<motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`w-[90vw] mx-auto flex mt-2 neutral-gradient-bg p-4 rounded-2xl
        flex-col justify-center items-center relative mb-4 border border-4 
        h-[40vw] max-h-[500px] shadow-[0_0_25px_#e7c696]
        sm:w-[45vw] max-w-[500px] mb-8`}
    >
      <motion.h2
        variants={childVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ ...childVariants.visible.transition, delay: 0.1 }}
        className="text-white text-center text-2xl mb-4 font-semibold"
      >
        {title}
      </motion.h2>

      <motion.div
        variants={childVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ ...childVariants.visible.transition, delay: 0.3 }}
      >
        <Image
          src={src}
          alt={alt}
          width={600}
          height={1300}
          className="w-[40vw] h-[20vw] max-h-[150px] mx-auto object-contain 
            max-w-[200px] bg-gray-300 rounded-2xl"
        />
      </motion.div>

      <motion.p
        variants={childVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ ...childVariants.visible.transition, delay: 0.5 }}
        className="text-white my-4 font-semibold"
      >
        {description}
      </motion.p>

      {destination && buttonText && (
        <button className="bg-button-color p-2 rounded-2xl text-white">
          <Link href={destination}>{buttonText}</Link>
        </button>
      )}
    </motion.section>

    )
}

interface DisplayBoxProps {
    data:ElementProps[],
    bgColor?:boolean
}

    const DisplayBoxes:React.FC<DisplayBoxProps> = ({
        data,bgColor
    }) => {

        return (
            <>
            <SlidingText
            reverse
            text="Other experience"
            subText="Here are some other experiences that have helped me in my journey"
            />
            <section className={` mt-12 w-screen relative
            ${bgColor ? `bg-gradient-to-b from-[#001F3F] to-[#0356a8] ` : ''}`}
            >

           
            <section className="flex flex-col
            sm:grid grid-cols-2 justify-center
            items-center max-w-[1200px]
            mx-auto gap-4 r
             pt-5">
                <div className="absolute
                top-1/2 w-full
                 sm:top-0
                left-1/2 -translate-x-1/2 h-[5px]
                 md:h-full
                sm:w-[5px] bg-white"/>
                {data.map((data, index) => (
                    <Element
                    {...data}
                    key={index}
                    />
                ))}
            </section>
            </section>

            </>

        )
    }


    export default DisplayBoxes