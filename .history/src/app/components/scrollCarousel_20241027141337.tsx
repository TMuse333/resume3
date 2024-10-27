"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

import Image, { StaticImageData } from "next/image";
import SlidingText from "./slidingText";


// Define the props interface with title, description, and images array
interface Props {
    title?: string;
    description?: string;
    images: {
        src: string| StaticImageData;
        alt: string;
        title:string,
        description:string
       
    }[];
}

// ScrollableCarousel component without onClick features
const ScrollCarousel: React.FC<Props> = ({ title, description, images }) => {
  
    const ref = useRef(null)
    const inView = useInView(ref)

    const [slideComplete, setSlideComplete] = useState(false)

    // Use the custom hook to get a ref and observe intersection


    // Variants for the animation of images
    const imageVariants = (index: number): Variants => {
        return {
            initial: {
                opacity: 0,
                y: -100,
            },
            animate: {
                opacity: 1,
                y: 0,
                transition: {
                    delay: index * 0.5,
                },
            },
        };
    };

    const [hoveredImage, setHoveredImage] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredImage(index);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    return (
        <>
        <SlidingText
        text="Lessons from books"
        subText="I have read approximately 60 books over the years and have learned a lot of valuable information which I apply daily, here are some of my most impactful books I have read so far"
        setSlideComplete={setSlideComplete}
        />
            <section
                ref={ref}
                className={`relative w-screen ml-auto mb-[5rem] mt-[5rem] overflow-x-hidden
                bg-[#00bfff] bg-opacity-[0.2] py-8
                h-screen max-h-[900px]`}
            >
              

                <div
                    className="w-screen pr-[1rem] pl-[1rem] flex ml-auto sm:ml-0 sm:mr-0 overflow-x-scroll overflow-y-hidden
                    "
                >
                    {images.map((image, index) => (
                        <div
                            className="w-[75vw] bg-black   rounded-2xl max-h-[800px] relative flex-shrink-0   mr-10
                            pb-6 max-w-[500px] overflow-x-hidden"
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                transform: `translateY(${slideComplete ? '0' : '-12rem'}) `,
                                transitionDelay: `${(images.length - 1 - index) * 0.2}s, ${
                                    0.2 + (images.length - 1 - index) * 0.2
                                }s`,
                                opacity: slideComplete ? 1 : 0,
                                transitionProperty: 'transform, opacity',
                                transitionDuration: '1s',
                                transitionTimingFunction: 'ease-in-out',
                            }}
                        >
           

                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="relative ml-auto mr-auto mt-4 w-full 
                                z-[5] object-contain  transition-all   rounded-lg
                                h-[50%]  mb-auto border border-white
                                max-h-[700px]"
                                width={1000}
                                height={55}
                                
                            />
                            {/* <h5 className="text-white my-4  relative font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-xl">{image.title}</h5> */}
                            <p className="mt-4 text-center sm:text-lg
                            px-4 
                            ">{image.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ScrollCarousel;