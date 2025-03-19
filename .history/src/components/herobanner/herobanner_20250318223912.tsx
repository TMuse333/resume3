
import Image from "next/image";
// import Link from "next/link";
import React, {  useState } from "react";

import tom from '../../../../public/chris-hd-min.webp'
// import head from '../../../../public/placeholder.png'
import { TypeWriter } from "@/components/textAnimations/typeWriter/typeWriter";
import DiagonalClipContainer from "@/components/diagonalClip/diagonalClip";
import FadeInFromLeftText from "@/components/textAnimations/fadeInFromLeftText/fadeInFromLeftText";
import TypeAlongText from "@/components/textAnimations/typeAlongText/typeAlongText";
// import half from '../../../public/smiley-tom-half.png'
import { motion } from "framer-motion";
// import { start } from "repl";
// import logo from '../../../../public/remax-ballon.webp'
import network from '../../../../public/logo.webp'
import skyline from '../../../../public/skyline.webp'
// import { skyline } from "@/data/homepageData";

const FullBodyHero = () => {

  const [startTypeAlong, setStartTypeAlong] =
  useState(false)
  
  const [startImage, setStartImage] = useState(false)

  const [startFadeIn, setStartFadeIn] = useState(false)

  // const [startFullBody, setStartFullBody] = useState(false)

  const handleStartFadeIn = () => {
    setTimeout(() => {
      setStartFadeIn(true);
    }, 500);

  }
    return (

        
       <header className="
       md:min-h-screen relative items-center 
       mx-auto  text-black
      max-w-[1200px] text-white
      overflow-x-hidden
       relative z-[3] "
  
      >
        <Image
        src={skyline}
        className="w-full h-full
        absolute object-cover
        z-[1]"
        width={600}
        height={1300}
        priority
        alt="chris your network realtor"
        />
       {/* <video
        className="w-full h-full
        absolute object-cover
        z-[1]"
        
        loop
        muted
        autoPlay
      >
        <source src="skyline.mp4" type="video/mp4" />
        <p>Your browser does not support HTML5 video.</p>
      </video> */}
        <DiagonalClipContainer/>
        <section className="mx-auto 
        mt-auto items-center md:min-h-screen
        justify-center  relative   
          flex flex-col md:flex-row
      
          md:mr-auto">

      
        <section className="flex flex-col
         justify-center
        md:mr-auto
 max-w-[800px] 
   
        items-center  md
        md:items-start  py-4">

          <Image
          src={network}
          alt="logo"
          className="w-[70vw] max-w-[800px] mx-auto z-[2]
          mb-[-2rem]
          md:mb-[-4rem] mt-[-2rem]
          md:self-start md:mr-auto md:ml-12 object-contain"
          />
             <motion.h1
              initial={{
                opacity:0,
                y:-30
            }}
            animate={{
                opacity:1,
                y:0
            }}
            onAnimationComplete={()=>setStartTypeAlong(true)} 
             className="mx-auto 
             relative z-[2]
             md:mr-auto md:ml-6
           text-lg mt-4 font-semibold 
           text-center md:text-left">
           Chris Crowell | Real estate agent Halifax Nova Scotia
            
            </motion.h1>
            
          
           <TypeAlongText
           as="h2"
           styles="font-semibold
           relative z-[2]
           mr-auto self-start
           px-3 md:px-0  
           text-5xl sm:text-6xl md:text-7xl
            mt-4  md:ml-4
            
            "
            text="Chris Crowell"
            keywords={['Chris', 'Crowell']}
            startAnimation={startTypeAlong}
            setAnimationComplete={setStartImage}
            />

<motion.div
initial={{y:30,
opacity:0}}
animate={{
  opacity:startImage ? 1 : 0,
  y:startImage ? 0 : 30,
}}

>



            <Image
            src={tom}
            
          priority
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-[70vw] md:w-[40vw] 
            relative z-[1] md:hidden
            translate-y-[-0rem] sm:translate-y-0
              rounded-2xl  object-contain mx-auto

 relative z-[4] bg-transparent mt-[-3rem] md:mt-[-6.5rem]
  
            
            "
            />
            </motion.div>

<div className="flex flex-col
flex-col-reverse md:flex-col">


          <FadeInFromLeftText
          className=" p-6 font-semibold 
          bg-opacity-[0.4]
         rounded-2xl 
         md:w-[50vw] mr-auto 
          text-xl relative z-[2]
          "
          text="Whether you’re buying your first home, upgrading to a dream property, or selling to start a new chapter, I’m here to make the process simple and stress-free. With deep roots in Halifax and over a decade of sales and marketing experience, I combine local market knowledge with personalized service to help you reach your real estate goals.
          "
          startAnimation={startFadeIn}
  
          />
            <TypeWriter
            />
            </div>
      
            </section>
         <motion.div
             initial={{y:-100,
            opacity:0}}
            animate={{
              opacity:1 ,
              y: 0 ,
              transition:{
                duration:2,
               
              }
            }}
          onAnimationComplete={handleStartFadeIn}
  className="md:absolute md:bottom-0 md:right-[0%] 
  z-[3] mt-auto h-[80vh] w-[50vw]
  max-w-[535px] hidden md:flex
  flex flex-col justify-end"

>
  <Image
  priority
    src={tom}
    height={600}
    width={1300}
    alt="A full body image of Thomas Musial"
    className="hidden  md:block md:w-[55vw] rounded-2xl max-w-[535px] object-contain mx-auto bg-gray-300 bg-transparent h-auto relative z-[3] mt-auto"
  />
</motion.div>


           
</section>
           

        
       </header>
    )
}

export default FullBodyHero