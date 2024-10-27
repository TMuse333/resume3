import React, {  useRef, useState } from "react";
import { motion, Variants, useInView } from "framer-motion";

import Link from "next/link";

interface TextFormatProps {
  isAnimated: boolean ,
  reverse: boolean,

}

const TextFormat: React.FC<TextFormatProps> = ({ isAnimated, reverse  }) => {


    const ref = useRef(null)

    const inView = useInView(ref,{
        once:true
    })


  

  const pointVariants = (index: number): Variants => {
    return {
      initial: {
        opacity: 0,
        x: reverse ? 25 : -25
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          delay: index * 0.3
        }
      }
    };
  };

  const textVariants: Variants = {
    initial: {
      opacity: 0,
      x: reverse ? 25 : -25
    },
    animate: {
      opacity: 1,
      x: 0,
     
    }
  }


  const nullVariants: Variants = {
        initial:{

        },
        animate:{

        }
  }

  const points: string[] = [
    'Making dashboards to have custom formats of useful data all in one place',
    'Using the api from social media platforms to gather data',
    'Storing and interpreting the data',
    'Ensuring I have ways to track monthly progression and keep on schedule with posting'
    
  ];

  return (
    <motion.article
      ref={ref}
      className="w-[90vw] pl-0 pr-4 relative mt-5 
   md:mt-0 text-white
      mr-auto
      max-h-[567px]
    ml-auto
      sm:mt-8  
       md:pl-8
     text-left
     sm:pl-0
       sm:max-w-[668px]
      md:max-w-[350px] 
      bg-gradient-to-b from-gray-800 to-gray-500 bg-clip-text text-transparent
      md:-translate-y-[2rem]

      "   
      
    >

     
      {/* <div className={`${reverse ? 'md:-translate-x-0' : 'md:translate-x-6'}`}> */}
      <motion.h2 className="text-2xl pb-2 text-left ml-0 font-bold 
      md:mb-[-1rem] sm:text-3xl
      bg-gradient-to-b from-gray-200 to-white bg-clip-text text-transparent ">
      How I plan to do this</motion.h2>
      <motion.p variants={isAnimated ? textVariants : nullVariants}
       initial="initial" 
       animate={inView ? "animate" : "initial"}
      className="text-lg w-screen pr-2 pl-0  text-left w-[90vw] 
      sm:max-w-[650px]
      ml-auto
    
      md:w-[50vw] md:max-w-[350px]">
<br/>



      </motion.p>
      <motion.ul className="text-left  pl-4  list-disc
     ">
        {points.map((point, index) => (
          <motion.li className="text-white mb-2 md:text-lg"
           key={index} 
          variants={isAnimated ? pointVariants(index) : nullVariants}
           initial="initial" 
           animate={inView ? "animate" : "initial"}
           >
            {point}
          </motion.li>
        ))}
        <Link href='about'>

        
         <motion.button
        className="mt-5 w-[150px] ml-0  rounded-xl
        bg-blue-500 p-3 text-white
        hover:text-blue-500 hover:bg-white
        transition-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ delay: points.length * 0.3 }}
      >
        Learn more
      </motion.button>
      </Link>
      </motion.ul>
      {/* </div> */}
    </motion.article>
  );
};

export default TextFormat;