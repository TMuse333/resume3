import React, {  useState } from "react";
import { motion, Variants } from "framer-motion";
import {useIntersectionObserver} from './intersectionObserver'
import Link from "next/link";

interface TextFormatProps {
  isAnimated: boolean ,
  reverse: boolean 
}

const TextFormat: React.FC<TextFormatProps> = ({ isAnimated, reverse  }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  };
  const componentRef = useIntersectionObserver(setIsVisible,options)


  

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
    'Inherited a house that you have no use for?',
    'Nightmare tenants making your life miserable',
    'Mooching relatives living in your house without paying',
    'Too many repairs needed and don’t have the desire to fix it?',
    'Want to invest in a business or another house and need the cash?',
    'Much more'
  ];

  return (
    <motion.article
      ref={componentRef}
      className="w-[90vw] pl-0 pr-4 relative mt-5 
   md:mt-0
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
      <motion.h3 className="text-2xl pb-2 text-left ml-0 font-bold 
      md:mb-[-1rem] sm:text-3xl
      bg-gradient-to-b from-gray-800 to-gray-500 bg-clip-text text-transparent ">
      Who we help</motion.h3>
      <motion.p variants={isAnimated ? textVariants : nullVariants}
       initial="initial" 
       animate={isVisible ? "animate" : "initial"}
      className="text-lg w-screen pr-2 pl-0  text-left w-[90vw] 
      sm:max-w-[650px]
      ml-auto
    
      md:w-[50vw] md:max-w-[350px]">
<br/>



      </motion.p>
      <motion.ul className="text-left  pl-4  list-disc
     ">
        {points.map((point, index) => (
          <motion.li className="text-gray-800 mb-2 md:text-lg"
           key={index} 
          variants={isAnimated ? pointVariants(index) : nullVariants}
           initial="initial" 
           animate={isVisible ? "animate" : "initial"}
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
        animate={{ opacity: isVisible ? 1 : 0 }}
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