"use client"

import React, { useEffect, useState , useRef} from "react";
import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
import SlidingText from "../slidingText/slidingText";

interface ContentProps {
    src: string;
    alt?: string;
    isVideo?: boolean;
    description?: string;
    id: string;
    sliderText: string;
}

const AppearingContent: React.FC<ContentProps> = ({
    src,
    alt,
    isVideo,
    description,
    id,
    sliderText,
}) => {
    const [scope, animate] = useAnimate();
    const [animationStarted, setAnimationStarted] = useState(false);

    const handleAnimation = async () => {

        await animate(`#p-${id}`, {opacity:1})

        // Start by making the container visible
        await animate(`#container-${id}`, { opacity: 1 });

        // Animate each side of the border sequentially
        await animate(`#border-top-${id}`, { width: "100%" }, { duration: 0.5 });
        await animate(`#border-left-${id}`, { height: "50vh" }, { duration: 0.5 });
        await animate(`#border-bottom-${id}`, { width: "100%" }, { duration: 0.5 });
      
        await animate(`#border-right-${id}`, { height: "50vh" }, { duration: 0.5 });


        // Animate image opacity
        await animate(`#content-${id}`, { opacity: 1 },
        { duration: 0.5 });
    };

    useEffect(() => {
        if (animationStarted) {
            handleAnimation();
        }
    }, [animationStarted]);

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Scaling the section when scrolling past it
    const scale = useTransform(scrollYProgress, [0.25, 1], [1, 0.15]);

    return (
        <motion.section
        style={{
            scale
        }}
         className="w-screen relative my-8">
            <SlidingText text={sliderText} setSlideComplete={setAnimationStarted} />

            <section className="relative" ref={scope}>
                <p id={`p-${id}`} className="text-left px-4 opacity-0 my-6
                mx-auto max-w-[900px] md:text-lg">
                  At FocusFlow Software, we believe that creative web page design is the key to unlocking your business's full potential online.
                  With our <span className="font-semibold">
                    creative, custom-coded websites
                  </span> and years of honing our craft we are confident
                  we are confident we offer the <span className='font-semibold'>
                    the best web design in Halifax, Nova Scotia.
                  </span>

                    <br/>
                    <br/>
{/* We’ve helped countless clients in Halifax and beyond <span className='font-semibold'>transform</span> their digital presence with our custom web design services, and we’re excited to do the same for you. Watch the video to discover how we build websites that stand out from the competition, meet your specific needs, and are delivered <span className='font-semibold'>quickly</span> and <span className='font-semibold'>efficiently</span>. Your journey to a better online presence starts here! */}
                </p>

                <div
                    id={`container-${id}`}
                    className="w-[90vw] max-w-[1000px] max-h-[500px] relative opacity-0
                    mx-auto my-auto"
                >
                    <div
                        id={`border-top-${id}`}
                        className="absolute top-0 left-0 h-[2px] bg-[#00bfff]"
                        style={{ width: "0%" }} // Start with zero width
                    ></div>
                      <div
                        id={`border-right-${id}`}
                        className="absolute bottom-0 right-0 w-[2px] bg-[#00bfff]"
                        style={{ height: "0%" }} // Start with zero height, from bottom
                    ></div>
                    <div
                        id={`border-bottom-${id}`}
                        className="absolute bottom-0 left-0 h-[2px] bg-[#00bfff]"
                        style={{ width: "0%" }} // Start with zero width
                    ></div>
                    <div
                        id={`border-left-${id}`}
                        className="absolute top-0 left-0 w-[2px] bg-[#00bfff]"
                        style={{ height: "0%" }} // Start with zero height
                    ></div>

                        {isVideo ? (
                            <>

<video
id={`content-${id}`}

controls
className="w-full mx-auto object-contain opacity-0
max-h-[500px] h-[50vh]">
    <source src={src} type='video/mp4'/>

</video>


</>

                        ) : (

                            <motion.img
                            id={`content-${id}`}
                            src={src}
                            alt={alt}
                            className="w-full mx-auto object-contain opacity-0

                            max-h-[500px]"
                        />
                        )}

                   
                </div>
            </section>
        </motion.section>
    );
};

export default AppearingContent;