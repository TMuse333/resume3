import React from "react";
import Image from 'next/image'

import half from '../../../public/smiley-tom-half.png'

const Herobanner2 = () => {




    return (

        <>
        <header className="relative h-[150vh]
        bg-blue-300">
            <h1>Focused and competent</h1>

        <Image
        className='absolute bottom-0 w-[70vw]'
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