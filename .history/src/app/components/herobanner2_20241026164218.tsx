import React from "react";
import Image from 'next/image'

import half from '../../../public/smiley-tom-half.png'

const Herobanner2 = () => {




    return (

        <>
        <header className="relative h-screen
        bg-blue-300">
            <h1>Focused and competent</h1>

        <Image
        className='absolute bottom-0 h-[60vh]
        left-[50%] -translate-x-1/2
        
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