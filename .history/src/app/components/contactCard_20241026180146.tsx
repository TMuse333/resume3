import React, { useEffect, useRef, useState, useMemo } from "react";
// import Testimonials from "../testimonials/testimonials";
import side from '../../../public/tom-side-angle.png'

import linked from '../../media/linkedin.png'
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from 'next/image'

const Profile = () => {
    
    const profileRef = useRef(null);
const inView = useInView(ref,{
    once:true
})
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 800);

  

  



    



    



    const socials = [
        {
            image: insta,
            url:'https://www.instagram.com/thomas__musial/'
        },
        {
            image: linked,
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



        {!isDesktop ? (
            <section className="profile-container" ref={profileRef} id='broker'
            style={
                { transform: `perspective(1000px) rotateX(${tiltAngle}deg)` }
            }>
      
            <motion.img
            //  initial={imgVariants.hidden}
            //  animate={inView? imgVariants.animate : null}
              src={side.src} className='profile-image' />
            <motion.h2
            // initial={textVariants(true,2).initial}
            // animate={tiltFinished ? textVariants(true,2).animate : null}
            >
                Thomas Musial</motion.h2>
            <h3>Front end developer</h3>
            <p>Ready to Work</p>
          
            <div className="profile-contacts">

<motion.h2
  variants={textVariants(false,2)}
  initial='initial'
  animate={inView ? textVariants(false,0.6).animatee : 'initial'}>Contact information
  </motion.h2>
<motion.p
 initial={textVariants(false,2).hidden}
 animate={inView ? textVariants(false,0.6).animate : null}
 >902-999-1006</motion.p>
<motion.p
 initial={textVariants(false,2).hidden}
 animate={inView ? textVariants(false,0.6).animate : null}
>Thomaslmusial@gmail.com</motion.p>
            <div className="profile-socials">
                {socials.map((social, index) => (
                    <Link to={social.url}>

                   
                    <img src={social.image} key={index} />
                    </Link>
                ))}
            </div>
            </div>
            {/* <Testimonials /> */}
        </section>
        ) : (

            <>
         

            <section className="profile-container " ref={profileRef} id='broker'
            style={
                { transform: `perspective(1000px) rotateX(${tiltAngle}deg)` }
            }>


                <div className="profile-desktop">


                
                <div className="profile-name">
                <motion.h2
            initial={textVariants(true,2).hidden}
            animate={tiltFinished ? textVariants(true,0).animate : null}
            >Thomas Musial
            </motion.h2>
            <motion.h3
              initial={textVariants(true,2).hidden}
              animate={tiltFinished ? textVariants(true,0).animate : null}>
                Front end Developer</motion.h3>
            <motion.p
              initial={textVariants(true,2).hidden}
              animate={tiltFinished ? textVariants(true,0).animate : null}
            >I am ready to work and learn about how the software
            industry operates and contribue to awesome projects
            </motion.p>
            {/* <motion.p
              initial={textVariants(true,2).hidden}
              animate={tiltFinished ? textVariants(true,0).animate : null}>REL#1234567890</motion.p> */}
                </div>
                <motion.img
            //  initial={imgVariants.hidden}
            //  animate={inView? imgVariants.animate : null}
              src={tom} className='profile-image' />

              <div className="profile-contacts">

                    <motion.h2
                      initial={textVariants(false,2).hidden}
                      animate={tiltFinished ? textVariants(false,0.6).animate : null}>Contact information</motion.h2>
                    <motion.p
                     initial={textVariants(false,2).hidden}
                     animate={tiltFinished ? textVariants(false,0.6).animate : null}
                     >902-999-1006</motion.p>
                    <motion.p
                     initial={textVariants(false,2).hidden}
                     animate={tiltFinished ? textVariants(false,0.6).animate : null}
                    >Thomaslmusial@gmail.com</motion.p>
            
               <div className="profile-socials">
                
                {socials.map((social, index) => (
                    <Link to={social.url}>

                    
                    <motion.img
                    initial={socialVariants((index * 0.5)).initial}
                    animate={tiltFinished ?socialVariants((index * 0.25)).animate : null }
                     src={social.image} key={index} />
                     </Link>
                ))}
            </div>
            </div>
            </div>
            {/* <Testimonials /> */}
            </section>
            </>
        )}

</>
      
    );
};

export default Profile;