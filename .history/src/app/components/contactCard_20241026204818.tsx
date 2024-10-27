import React, { useEffect, useRef, useState, useMemo } from "react";
// import Testimonials from "../testimonials/testimonials";
import side from '../../../public/tom-side-angle.png'

import linked from '../../media/linkedin.png'
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from 'next/image'
import ig from '../../../public/ig-logo.webp'
import linkedIn from '../../../public/linkedin-logo.jpg'
import yt from '../../../public/youtube.jpg'

const ContactCard = () => {
    
    const profileRef = useRef<HTMLDivElement>(null); // Specify type here
const inView = useInView(profileRef,{
    once:true
})
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 800);

    const [tiltAngle,setTiltAngle] = useState(30)

    const [tiltFinished,setTiltFinished] = useState(false)

    const socials = [
        {
            
        }
    ]
  

    useEffect(() => {
        const handleScroll = () => {
            const contentElement = profileRef.current;

            if (!contentElement) return; // Null check

            const elementTop = contentElement.getBoundingClientRect().top;
            const elementHeight = contentElement.clientHeight;
            const windowHeight = window.innerHeight;

            // Calculate the percentage of the element's bottom in view
            const visiblePercentBottom = Math.max(
                0,
                Math.min(100, ((windowHeight - (elementTop + elementHeight)) / windowHeight) * 100)
            );

            // Check if only the bottom 33% of the element is in view
            const bottomThirdInView = visiblePercentBottom >= 67;

            // Calculate the percentage of the element in view
            const visiblePercent = Math.max(
                0,
                Math.min(100, ((windowHeight - elementTop) / windowHeight) * 100)
            );

            // Gradually decrease the tilt angle from 30 to 0 as 60% of the element becomes visible
            const newTiltAngle = Math.max(0, 30 - (visiblePercent / 60) * 30);

            setTiltAngle(newTiltAngle);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [setTiltAngle]);
    

    useEffect(()=>{
        if(tiltAngle === 0){
            setTiltFinished(true)
        }
    })



    



    



    const socials = [
        {
            // image: insta,
            url:'https://www.instagram.com/thomas__musial/'
        },
        {
            // image: linked,
            url:'https://www.linkedin.com/in/thomas-musial-0077332b5/'
        },
        // {
        //     image: x
        // },
        // {
        //     image: img
        // },
        // {
        //     image: img
        // },
    ];

    const variants = {
        hidden:{
            opacity:0,
            x:-40,
        },
        animate:{
            opacity:1,
            x:0,
            transition:{
                duration:0.5
            }
        }
    }

    const imgVariants = {
        hidden:{
            opacity:0,

        },
        animate:{
            opacity:1,
            transition:{
                delay:0.55
            }
        }
    }

    const textVariants = (left:boolean, delay:number) => {

        const direction = left ? -1 : 1

        return {
           initial:{
            x: direction * 40,
            opacity:0
           },
           animate:{
            x:0,
            opacity:1,
            transition:{
                delay:delay,
                duration:0.8
            }
           }
        }

    }

    const socialVariants = (delay:number) => {

        return {

        
        initial:{
            opacity:0,
            y:10
        },
            animate:{
                opacity:1,
                transition:{
                    delay:1.5 + delay
                },
                y:0
            }
        }

    }

    return (
<>

<section className="w-screen flex flex-col
">
    <h3 className="text-center">Thomas Musial</h3>
    <Image
    src={side.src}
    className='w-[40vw]
    mx-auto object-contain
    md:w-[20vw]'
    alt='Thomas Musial'
    width={600}
    height={1300}
    />
    <section className="flex">
        <ul>

        </ul>
    </section>

</section>

       
        

</>
      
    );
};

export default ContactCard;