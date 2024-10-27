import React from 'react';
import dynamic from 'next/dynamic'; // Import dynamic
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion';
import AppearingGradient from './appearingGradient';
import laptop from '../../../public/laptop-growth.webp'

// Dynamically import motion components from framer-motion


interface Props {
    src: string;
    alt: string;
}

const FlashContent: React.FC<Props> = ({ src, alt }) => {

    const MotionImage = motion.create(Image)
    return (
        <>
            <section className='mx-auto w-screen max-w-[1200px] relative mb-8'>
                <AppearingGradient
                    text='Going to the next level'
                    subText='I am currently learning to combine marketing analtytics into my next js apps'
                />
                <MotionImage
                    src={src}
                    alt={alt}
                    width={600}
                   
                    layout='preserve-aspect'
                    height={1300}
                    className='w-[70vw] mx-auto my-5 md:w-[50vw] h-[205px] sm:h-[223px] md:h-[270px] object-contain'
                    animate={{
                        y: [0, -4, 0], // Oscillate up and down
                    }}
                    transition={{
                        duration: 1.5, // Duration of the oscillation
                        repeat: Infinity, // Infinite loop
                        ease: 'easeInOut', // Smooth transition
                    }}
                />
                <motion.p className='px-4 mx-auto md:w-[80%] md:text-lg rounded-2xl text-white text-left '>
                My design skills are strong, and as I 
    continue refining my Next.js expertise, I’m expanding into the realm of data-driven marketing. 
    Recognizing the high value of actionable insights, I’m now focused on integrating social media APIs 
    to gather meaningful data, which can drive lead generation strategies for clients.
    <br/><br/>
    By combining visually engaging, high-performance designs with data analysis, my goal is to create 
    Next.js applications that not only enhance user experience but also support business growth through 
    targeted lead generation and customer engagement. This dual approach allows me to deliver powerful tools 
    that help businesses reach their goals more effectively.
                    
                </motion.p>
            </section>
        </>
    );
}

export default FlashContent;