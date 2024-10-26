import Image from "next/image";
import Link from "next/link";
import React from "react";
import tom from '../../../public/tom-header-min.png'
import full from '../../../public/tom-in-suit-2.png'

const Herobanner = () => {

    return (
       <header className="flex flex-col md:flex-row">
        <section className="flex flex-col
        md:w-[30vw] justify-center
        items-center">
            <h1 className="font-semibold
            text-2xl">Thomas Musial</h1>
            <h2>
            Frontend engineer, 
            content creator, freelancer,
             designer, 
             all around cool guy.
            </h2>
            <p>
                I am a very focused individual
                who is dedicated to his craft of
                frontend design and becoming as
                useful and competent as I can be
                through hours of deep work everyday.
            </p>
            </section>
            <Image
            src={full}
            height={600}
            width={1300}
            alt='A full body image of Thomas Musial'
            className="w-[60vw] object-contain mx-auto
            max-h-[400px] max-w-[400px]"
            />
        
       </header>
    )
}

export default Herobanner