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
       md:h-screen relative items-center"
       style={{
        background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)'
      }}>
        <section className="flex flex-col
        md:w-[30vw] justify-center
        items-center">
            <h1 className="font-semibold
            text-3xl mt-4">Thomas Musial</h1>
            <h2 className="mx-auto p-6">
            Frontend engineer, 
            content creator, freelancer,
             designer, 
             all around cool guy.
            </h2>
            <p className="mx-auto p-6">
                I am a very focused individual
                who is dedicated to his craft of
                frontend design and becoming as
                useful and competent as I can be
                through hours of deep work everyday.
            </p>
            </section>
          
            < section className="w-[60vw] bg-gray-600 rounded-2xl
            relative max-h-[400px] z-[3]">

            
            {/* <Image
            src={half}
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-[60vw] object-contain mx-auto
           hidden   absolute bottom-0
            md:block
            "
            /> */}
            </section>

        
       </header>
    )
}

export default Herobanner