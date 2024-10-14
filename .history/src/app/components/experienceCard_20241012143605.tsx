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
            

        </section>

    )
}


export default ExperienceCard



