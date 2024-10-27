import React, { useEffect, useRef, useState, useMemo } from "react";
// import Testimonials from "../testimonials/testimonials";
import side from '../../../public/tom-side-angle.png'


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
    

    const [tiltAngle,setTiltAngle] = useState(30)

    const [tiltFinished,setTiltFinished] = useState(false)

    const socials = [
        {
            url:'https://www.instagram.com/thomas__musial/',
            src:ig,
            alt:'Instagram logo'
        },
        {
         url:'https://www.youtube.com/channel/UCRwy7k-muMe9AiNxs_1a6jQ',
         src:yt,
         alt:"Youtube logo"   
        },
        {
            url:'https://www.linkedin.com/in/thomas-musial-0077332b5/',
            src:linkedIn,
            alt:'Linked in'
        }
    ]
  





    



    



  

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
bg-[#00bfff] bg-opacity-[0.5]">
     <span className="mb-1.5 text-center mt-4 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
         Ready to do whatever it takes
        </span>
        <section className="text-center">

       
    <h3 className="text-center
    text-3xl">Thomas Musial</h3>
    <p>You can contact me below</p>
    <span>Phone:902-999-1006</span>
    <p>Email: thomaslmusial@gmail.com</p>
    </section>
    
    <Image
    src={side.src}
    className='w-[40vw]
    mx-auto object-contain
    md:w-[20vw]'
    alt='Thomas Musial'
    width={600}
    height={1300}
    />
    <section className="flex w-full ">
        <ul className="flex w-full justify-around mt-4
        max-w-[400px] mx-auto">
        {socials.map((social, index) => (
            <li key={index}>
                <Link
                href={social.url}
                />
                <Image
                src={social.src}
                alt={social.alt}
                className='h-[40px] w-[40px]
                bg-gray-500
                object-contain  rounded-2xl'
                />
            </li>
        ))}
        </ul>
    </section>

</section>

       
        

</>
      
    );
};

export default ContactCard;