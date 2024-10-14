import Image from "next/image";
import React from "react";


interface Props {
    title:string,
    src:string,
    alt:string,
    description:string
    aspects:string[]
    link:string
    reverse?:boolean
}


const ExperienceCard:React.FC<Props> = ({
    title,src,alt,description,aspects,
    link, reverse
}) => {


    return (
        <>
          <h2 
            className="text-center text-3xl px-4 mb-6
            font-bold pt-4">{title}</h2>
        </>
        <section className="mx-auto w-[90vw]
        rounded-2xl bg-[#00bfff]">
          
            <section className={`flex flex-col 
            md:px-4 mx-auto ${reverse? 'md:flex-row-reverse' : 'md:flex-row'}`}>

            
            <Image
            src={src}
            alt={alt}
            width={600}
            height={1300}
            className='w-[80vw] mx-auto mb-4
            md:w-[40vw] max-w-[500px] rounded-2xl
            '
            />
            <p className="px-4 font-semibold
            my-auto">{description}</p>
            </section>
<h3 className="text-center my-6 text-3xl text-semibold">Skills learned</h3>
            <ul className="mx-auto font-semibold mt-4
            md:flex flex-row md:px-4">
                {aspects.map((aspect,index) => (
                    <li className="mb-4 w-[90%] mx-auto
                    p-3 bg-blue-600 rounded-2xl flex 
                    justify-center items-center
                    text-center md:w-full md:mr-4"
                    key={index}>
                        {aspect}
                    </li>
                ))}
            </ul>

        </section>

    )
}


export default ExperienceCard



