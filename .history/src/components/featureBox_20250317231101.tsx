import Image from "next/image";
import React, { useRef } from "react";
import AppearingGradient from "./appearingGradient";
import {useInView, motion} from 'framer-motion'
import { animate } from "framer-motion/dist/dom";
interface BoxProps {
    src:string,
    alt:string,
    title:string,
    description:string
  
}

interface Data {
    boxData:{
    src:string,
    alt:string,
    title:string,
    description:string
   
    }[]
}


const FeatureBox:React.FC<BoxProps> = ({
    src,alt,title,description,
    
}) => {

    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 1 });


    const variants = (delay:number) => {

        return {

        
        initial:{
            opacity:0,
            y:-33
        },
        animate:{
           
                opacity:1,
                y:0,
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    mass: 1,
                  },
            
        }
    }
}


    return (
        <div className={`w-[90vw] mx-auto p-4 mb-8
        border border-[#0251a1] rounded-xl sm:w-[40vw]
        bg-gradient-to-b from-[#001F3F] to-[#0356a8] 
        md:h-[350px]
        `}>
            <Image
            src={src}
            alt={alt}
            width={600}
            height={1300}
            className='w-[30px] sm:w-[35px] md:h-[40px] mx-auto mb-4 object-contain
            '
            />
            <motion.h3 
            variants={variants(0)}
            animate={inView ? 'variants' : variants.initial}
            className="text-lg font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                {title}</motion.h3>
            <p>{description}</p>
        </div>
    )
}


const FeatureBoxes:React.FC<Data> = ({
    boxData
}) => {


    return (
        <section className="">
        <AppearingGradient
  text="Focused and ready to work"
  subText="Here are some of my general attributes that make me someone you want on your team"
  

/>


        <section className="flex flex-col mx-auto
        justify-center items-center
        sm:grid grid-cols-2
        ">

            {boxData.map((box, index) => (
                <FeatureBox
                {...box}
                key={index}
                />

            ))}

</section>
        </section>
    )
}

export default FeatureBoxes