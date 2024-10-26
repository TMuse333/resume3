import Image from "next/image";
import Link from "next/link";
import React from "react";
import tom from '../../../public/thomas-full-body-1-nogb.png'
import full from '../../../public/smile-tom.png'
import side from '../../../public/tom-side-angle.png'
import half from '../../../public/smiley-tom-half.png'
const Herobanner = () => {

    return (
       <header className="flex flex-col md:flex-row
       md:h-screen relative items-center  "
       style={{
        background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)'
      }}>
        <section className="flex flex-col
        md:w-[50vw] justify-center
        items-center mx-auto max-w-[px]">
            <h1 className="font-semibold
            text-6xl mt-4 text-center md:text-start md:pl-6">Thomas Musial</h1>
            <h2 className="mx-auto p-6
           text-3xl font-semibold ">
            Frontend engineer, 
            content creator, freelancer,
             designer, 
             all around cool guy.
            </h2>
            <Image
            src={side}
            
          
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-[80vw]  object-contain mx-auto
           md:hidden rounded-full bg-gray-600
            
            "
            />
            <p className="mx-auto p-6 font-semibold 
            text-xl">
                I am a very focused individual
                who is dedicated to his craft of
                frontend design and becoming as
                useful and competent as I can be
                through hours of deep work everyday.
            </p>
            </section>
          
            <Image
            src={side}
            
          
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-[40vw]  object-contain mx-auto
          rounded-full bg-gray-600 max-w-[342px]
          max-h-[515px]
            
            "
            />
           

        
       </header>
    )
}

export default Herobanner