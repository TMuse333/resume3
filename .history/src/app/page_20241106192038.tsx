"use client"

import { experienceCard1, experienceCard2, experienceCard3,
codingCarousel, generalAttributes, bookCarousel,
imageTextBox2 } from "@/data/data";
import { lazy } from "react";
import AuroraHero from "./components/auroraHero";
import ExperienceCard from "./components/experienceCard";
import FeatureBoxes from "./components/featureBox";






const StickyCarousel = lazy(() => import("./components/stickyCarousel"));
import { promoVid } from "@/data/data";
const ImageTextBox = lazy(() => import("./components/imageTextBox"));
const TextFormat = lazy(() => import("./components/textFormat"));
import marketing from '../../public/laptop-growth.webp';

const FlashContent = lazy(() => import("./components/flashContent"));
import moneyball from '../../public/moneyball.webp';
const ScrollCarousel = lazy(() => import("./components/scrollCarousel"));
const Testimonials = lazy(() => import("./components/testimonials"));
const AppearingSquare = lazy(() => import("./components/appearingSquare"));

import Closer from "./components/closer";
import ElectricContainer from "./components/electricContainer";

export default function Home() {
  return (
  <main className="w-screen overflow-x-hidden 0">
    {/* <Herobanner/> */}
   
<AuroraHero/>
   {/*   */}
    <ExperienceCard
    {...experienceCard1}
    />
     <ExperienceCard
    {...experienceCard2}
    reverse={true}
    />

<ExperienceCard
    {...experienceCard3}

    />

    <StickyCarousel
    title="Primary skill: Web Developer"
    description="My primary skill is creating visually appealing, animated websites with next js. I have spent 1100 hours since august 2023 (3-4 hours of coding everyday) honing this craft. Here are some of the aspects of my front end engineering skills."
    images={codingCarousel}
    />

    <div className="h-[40vh]"/>

   

    <FeatureBoxes
    boxData={generalAttributes}
    />
    
    <AppearingSquare
    isVideo
    src={promoVid}
    id='promo-video'
    sliderText="Other design skills"
    />
    
    <FlashContent
    src={moneyball.src}
    alt="The moneyball to represent earning more money from marketing"/>

<section className="w-screen"
  style={{
    background: 'radial-gradient(circle, #00bfff -130%, rgba(0, 191, 255, 0%) 60%)'
    
  }}>


    <ImageTextBox
    src={marketing.src}
    alt="The marketing laptop"
    title="Current learnings"
    reverse
   iframe={}
    }
    />

    <ImageTextBox
    {...imageTextBox2}
   
    />
    </section>

 <ScrollCarousel
 images={bookCarousel}
 />

{/* <Testimonials/> */}

<ElectricContainer/>

    {/* <Carousel
    isGrid={true}
    images={artCarousel}
    /> */}
    

    

    <Closer/>
   
  </main>
  );
}
