import React from "react";
import Image from 'next/image'

import half from '../../../public/smiley-tom-half.png'

const Herobanner2 = () => {




    return (

        <>
        <header className="relative h-[100vh]
        bg-blue-300 flex flex-col items-start">
            <section className="
            mt-12">


            <h1 className="font-bold text-center
            text-3xl sm:text-4xl
            md:text-5xl pt-3 mb-2">Thomas Musial</h1>
             <h2 className="mx-auto px-6
           text-xl font-semibold 
           sm:text-2xl md:text-3xl">
            Frontend engineer, 
            content creator, freelancer,
             designer, 
             all around cool guy.
            </h2>
            <p className="mx-auto p-6 font-semibold 
            text-lg sm:text-2xl md:text-3xl">
                I am a very focused individual
                who is dedicated to his craft of
                frontend design and becoming as
                useful and competent as I can be
                through hours of deep work everyday.
            </p>
            </section>

        <Image
        className='absolute bottom-0 h-[50vh]
        left-[50%] translate-x-[-40%]
        
        object-cover'
        src={half}
        alt="image"
        width={600}
        height={1300}
        />


        </header>
        </>
    )
    }


    export default Herobanner2