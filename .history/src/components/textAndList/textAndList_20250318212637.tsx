
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {motion, useInView} from 'framer-motion'
import { useGeneralContext } from "@/context/context";
import Image from "next/image";

interface ListAspects {
  
    title:string,
    description:string
    index:number,
    isSelected:boolean,
    setExpandedIndex:React.Dispatch<React.SetStateAction<number | null>>;
    parentInView:boolean
}


const ListElement:React.FC<ListAspects> = ({
title,description,index,
isSelected, setExpandedIndex,
parentInView
}) => {

    const handleClick = (index:number) => {
        setExpandedIndex(index);
      };

      const ref = useRef(null)

      const inView = useInView(ref,{
        once:true,
        amount:0.3
      })
    
      const slideInVariants = (delay:number) => {

        return {
            initial:{
                x:40,
                y:33,
                opacity:0
            },
            animate:{
                x:0,
                y:0,
                opacity:1,
                transition:{
                    delay:delay,
                    duration:0.3
                }
            }
        }
      }

      const {isMobile} = useGeneralContext()

          //#a8865e darker dark
    //#e7c696 slightly bright
    //#f2d99d brighter bright

    return (

        <motion.div  ref={ref}
        variants={slideInVariants(index * 0.15)}
        initial='initial'
        animate={(!isMobile && parentInView) || inView ? 'animate' : 'initial'}
        className="border border-black rounded-3xl overflow-hidden ">
        <button
          className="w-full flex justify-between items-center text-left text-black p-4 font-semibold bg-gray-200 rounded-t-lg focus:outline-none"
          onClick={() => handleClick(index)}
        >
          <span className="">{title}</span>
          <span>
            {isSelected ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </span>
        </button>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isSelected ? "h-[30vh] lg:h-[30vh]" : "h-0"
          }`}
        >
          <div className="p-4">
            <p className="text-black">{description}</p>
          </div>
        </div>
      </motion.div>
    )
}


interface Props {
    subTitle:string
    title:string,
    src?:string,
    alt?:string,
    description:string,
    listAspects:{
        src:string,
        alt:string,
        title:string,
        description:string
    }[]
}


const TextAndList:React.FC<Props> = ({
    title,description,
    listAspects,subTitle,
    src,alt
}) => {



    const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

    useEffect(()=>{
        console.log('expanded index',expandedIndex)
      },[expandedIndex])

    // const handleClick = (index:number) => {
    //     setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    //   };

      const ref = useRef(null)

      const inView = useInView(ref,{
        once:true,
        amount:0.7
      })

    //   const dropDownAnimation = (delay:number) => {
    //     return {
    //         initial:{
    //             opacity:0,
    //             y:30
    //         },
    //         animate:{
    //             opacity:1,
    //             y:0,
    //             transition:{
    //                 delay:delay
    //             }
    //         }
    //     }
    //   }
   
      return (
        <section ref={ref}
        className="flex flex-col md:flex-row
         text-black md:w-[90vw] bg-white
        mx-auto">
          {/* Top Section */}
          <section className="flex flex-col justify-center items-center
          md:items-start space-y-4 p-4
          mb-auto text-center">
            <h3 className="text-lg font-semibold text-gray-700">{subTitle}</h3>
            <h2 className="text-3xl font-bold text-gray-900
            text-center font-cursive">{title}</h2>
            {src && alt && (
              <Image
              width={600}
              height={1300}
                src={src}
                alt={alt}
                className="w-[60vw] h-[90vw] mb-[-1rem]
                max-w-[300px] max-h-[200px] object-contain
                mr-auto"
              />
            )}
            <p className="text-black
            mt-[-3rem]
            md:text-left">{description}</p>
            <button className="p-3 rounded-2xl
            bg-gray-300 text-black">
               Book now
            </button>
          </section>
    
          {/* Accordion Section */}
          <section
            className={` rounded-xl mx-auto w-[90vw] p-5 mb-7 max-w-[800px]`}
          >
            <div className="space-y-4">
              {listAspects.map((aspect, index) => (
                <ListElement
                {...aspect}
                key={index}
                index={index}
                isSelected={index === expandedIndex}
                setExpandedIndex={setExpandedIndex}
                parentInView={inView}
                />
              ))}
            </div>
          </section>
        </section>
      );
}


export default TextAndList