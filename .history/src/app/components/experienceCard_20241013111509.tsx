"use client"
import Image from "next/image";
import React, {useRef} from "react";
import {motion, useAnimate, useInView} from 'framer-motion'

interface Props {
    title:string,
    src:string,
    alt:string,
    description:string
    aspects:string[]
    link:string
    reverse?:boolean
}


const ExperienceCard:React.FC<Props> = ({
    title,src,alt,description,aspects,
    link, reverse
}) => {

    const ref = useRef(null)

    const MotionImage = motion(Image)

    return (
        <>
         
       
        <section ref={ref}
         className="mx-auto w-[90vw]
        rounded-2xl bg-[#00bfff]">
           <h2 
            className="text-center text-3xl sm:text-4xl px-4 mb-6
            font-bold pt-4">{title}</h2>
            <section className={`flex flex-col 
            md:px-4 mx-auto ${reverse? 'md:flex-row-reverse' : 'md:flex-row'}`}>

            
            <MotionImage
            id={`${title}-image`}
            src={src}
            alt={alt}
            width={600}
            height={1300}
            className='w-[80vw] mx-auto mb-4
            md:w-[40vw] max-w-[500px] rounded-2xl
            '
            />
            <motion.p 
            id={`${title}-`}
            className="px-4 font-semibold
            my-auto">{description}</motion.p>
            </section>
<h3 className="text-center my-6 text-3xl text-semibold">Skills learned</h3>
            <ul className="mx-auto font-semibold mt-4
            md:flex flex-row md:px-4">
                {aspects.map((aspect,index) => (
                    <li className="mb-4 w-[90%] mx-auto
                    p-3 bg-blue-600 rounded-2xl flex 
                    justify-center items-center
                    text-center md:w-full md:mr-4"
                    key={index}>
                        {aspect}
                    </li>
                ))}
            </ul>

        </section>
        </>

    )
    
}


export default ExperienceCard



