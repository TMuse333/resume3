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
        rounded-2xl">

        </section>

    )
}


export default ExperienceCard



