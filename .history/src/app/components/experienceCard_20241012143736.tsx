import Image from "next/image";
import React from "react";


interface Props {
    title:string,
    src:string,
    alt:string,
    description:string
    aspects:string[]
    link:string
}


const ExperienceCard:React.FC<Props> = ({
    title,src,alt,description,aspects,
    link
}) => {


    return (
        <section className="mx-auto w-[90vw]
        rounded-2xl bg-[#00bfff]">
            <h2 
            className="text-center text-3xl px-4">{title}</h2>
            <Image
            src={src}
            alt={alt}
            width={600}
            height={1300}
            className='w-[80vw] mx-auto mb-4'
            />
            <p className="px-4 font-semibold">{description}</p>
            <ul>
                {aspects.map((aspect,index) => (
                    <li>
                        
                    </li>
                ))}
            </ul>

        </section>

    )
}


export default ExperienceCard



