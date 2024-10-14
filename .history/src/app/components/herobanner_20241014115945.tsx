import Image from "next/image";
import Link from "next/link";
import React from "react";
import tom from '../../../public/tom-header-min.png'


const Herobanner = () => {

    return (
        <section className="w-screen md:h-screen bg-black flex justify-center items-center flex-col"
        style={{
            background: "radial-gradient(circle, #001F3F 40%, black 100%)"
        }}>
            <h1 className="text-4xl px-4  mb-4 mt-3
        sm:text-5xl md:text-6xl 
        font-semibold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent
       
          font-semibold text-center mb-4 ">
            Thomas Musial
            </h1>
            <Image
            src={tom}
            alt='tom'
            className="rounded-full w-[60vw] mx-auto bg-gray-600
            max-w-[350px] max-h-[350px] object-contain"
            width={600}
            height={1300}
            />

            <p className="text-white px-12 mx-auto font-semibold sm:text-3xl">
                Frontend engineer, content creator, marketer, designer,
                all around cool guy.

            </p>

            <p>I am extremley dedicated to my craft of design and becoming as useful
                as I can be and am well versed in multiple areas of design
            </p>
            
            <section className="flex flex-col md:flex-row md:w-[90%] mx-auto mt-12 md:justify-evenly">
  <div className="bg-[#003d7a] rounded-xl w-[75vw] mx-auto py-4 mb-8 md:mr-3">


  </div>
  <div className="bg-[#003d7a] rounded-xl w-[75vw] mx-auto py-4 mb-8 md:mr-3">
    <h2 className="text-left ml-8 text-xl font-semibold bg-gradient-to-b from-gray-300 to-gray-200 bg-clip-text text-transparent ">
      Boost Orders
    </h2>
    <p className="ml-8 text-left mt-4 text-gray-300">
      Increase your order volume with an intuitive system that makes it easier for customers to order online.
    </p>
  </div>
  <div className="bg-[#003d7a] rounded-xl w-[75vw] mx-auto py-4 mb-8">
    <h2 className="text-left ml-8 text-xl font-semibold bg-gradient-to-b from-gray-300 to-gray-200 bg-clip-text text-transparent ">
      Higher Earnings
    </h2>
    <p className="ml-8 text-left mt-4 text-gray-300">
      Keep more of your revenue by cutting down on third-party platform fees, so you save on every order.
    </p>
  </div>
</section>

        </section>
    )
}

export default Herobanner