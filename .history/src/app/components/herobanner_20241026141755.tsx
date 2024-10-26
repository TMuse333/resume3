import Image from "next/image";
import Link from "next/link";
import React from "react";
import tom from '../../../public/tom-header-min.png'


const Herobanner = () => {

    return (
       <header className="flex flex-col md:flex-row">
        <section className="flex flex-col">
            <h1>Thomas Musial</h1>
            <h2>
            Frontend engineer, content creator, freelancer, designer, all around cool guy.

            </h2>
        </section>
       </header>
    )
}

export default Herobanner