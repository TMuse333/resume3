"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, animate, useInView } from 'framer-motion';
import { useGeneralContext } from "@/context/context";

import {cubicBezier, easeIn} from 'framer-motion/dom'


interface Props {
    title: string,
    src: string,
    alt: string,
    description: string,
    aspects: string[],
    link: string,
    reverse?: boolean
}

const ExperienceCard: React.FC<Props> = ({
    title, src, alt, description, aspects,
    link, reverse
}) => {
    const ref = useRef(null);
    const { isMobile } = useGeneralContext();
    const MotionImage = motion.create(Image);
    const skillsRef = useRef(null)
    const [startAnimation, setStartAnimation] = useState(false)

    const skillsInView = useInView(skillsRef,{
        amount:0.6
    })


    // Framer Motion's useScroll and useTransform
    const { scrollYProgress } = useScroll({
        target: ref, // Watch this section
        offset: ["start end", "end start"], // Trigger based on when it enters and leaves the viewport
    });

    // Map scrollYProgress to scale and opacity
    const scale = useTransform(scrollYProgress, [0, 0.3], [0.7, 1],  { ease:easeIn });
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

    useMotionValueEvent(scale, "change", (latestScale) => {
        if (latestScale === 1) {
            console.warn("Scale reached 1");
            setStartAnimation(true)
        }
    });


    const handleAnimation = async () => {

        const header = document.getElementById(`${title}-header`)
        const image = document.getElementById(`${title}-image`)
        const description = document.getElementById(`${title}-description`)
        if(header){
            await animate(header,{opacity:1, y:0,scale:1.3},
                {ease:'easeInOut'})
                await animate(header,{scale:1},
                //     {
                //     delay:0.2
                // }
                )
        }
        if(image){
            await animate(image,{opacity:1},
                {ease:'easeInOut'})
        }
        if(description){
            await animate(description,{opacity:1},
                {ease:'easeInOut'})
        }
    }

    useEffect(() => {
        if(startAnimation){
            handleAnimation()
        }
    },[startAnimation])


    const liVariants =(delay:number,index:number) => {

        return {
            initial:{
                opacity:0,
                x: index % 2 === 0 ? 20 : -20
            },
            animate:{
                opacity:1,
                x:0
            }
        }
    }
    

    return (
        <>
            <motion.section
                ref={ref}
                style={{ scale,  }}
                className="mx-auto w-[90vw] rounded-2xl bg-[#00bfff]
                transition-all opacity-1"
            >
                <h2 id={`${title}-header`}
                    className="text-center w-full text-3xl sm:text-4xl  mb-6 font-bold pt-4
                    translate-y-[-2rem] opacity-0"
                >
                    {title}
                </h2>
                <section className={`flex flex-col md:px-4 mx-auto ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <MotionImage
                        id={`${title}-image`}
                        src={src}
                        alt={alt}
                        width={600}
                        height={1300}
                        className='w-[80vw] mx-auto mb-4 md:w-[40vw] max-w-[500px] rounded-2xl
                         opacity-0'
                    />
                    <motion.p
                        id={`${title}-description`}
                        className="px-4 font-semibold my-auto
                        opacity-0"
                    >
                        {description}
                    </motion.p>
                </section>

                <section className="w-full"
                ref={skillsRef}>

                
                <h3
                    className="text-center my-6 text-3xl font-semibold"
                >
                    Skills learned
                </h3>
                <ul className="mx-auto font-semibold mt-4 md:flex flex-row md:px-4">
                    {aspects.map((aspect, index) => (
                        <motion.li className="mb-4 w-[90%] mx-auto p-3 bg-blue-600 rounded-2xl flex justify-center items-center text-center md:w-full md:mr-4"
                            key={index}
                            variants={liVariants(index * 0.2,index) : {}}
                            

                        >
                            {aspect}
                        </motion.li>
                    ))}
                </ul>
                </section>
            </motion.section>
        </>
    );
}

export default ExperienceCard;
