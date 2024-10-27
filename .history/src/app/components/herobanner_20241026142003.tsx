import Image from "next/image";
import Link from "next/link";
import React from "react";
import tom from '../../../public/tom-header-min.png'
import full from '../../../public/tom-in-suit-2.png'


const Herobanner = () => {

    return (
       <header className="flex flex-col md:flex-row">
        <section className="flex flex-col">
            <h1>Thomas Musial</h1>
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
            <Image
            src={full}
        </section>
       </header>
    )
}

export default Herobanner