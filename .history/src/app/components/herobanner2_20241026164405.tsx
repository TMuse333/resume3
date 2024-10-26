import React from "react";
import Image from 'next/image'

import half from '../../../public/smiley-tom-half.png'

const Herobanner2 = () => {




    return (

        <>
        <header className="relative h-screen
        bg-blue-300">
            <h1 className="font-bold text-center
            text-5xl">Focused and competent</h1>
             <h2 className="mx-auto p-6
           text-3xl font-semibold ">
            Frontend engineer, 
            content creator, freelancer,
             designer, 
             all around cool guy.
            </h2>

        <Image
        className='absolute bottom-0 h-[60vh]
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