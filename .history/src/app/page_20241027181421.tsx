"use client"

import { experienceCard1, experienceCard2, experienceCard3,
codingCarousel, generalAttributes, bookCarousel,
imageTextBox2 } from "@/data/data";
import Image from "next/image";

import ExperienceCard from "./components/experienceCard";
import FeatureBoxes from "./components/featureBox";
import Carousel from "./components/gridCarousel";
import Herobanner from "./components/herobanner";
import StickyCarousel from "./components/stickyCarousel";
import { promoVid } from "@/data/data";
import ImageTextBox from "./components/imageTextBox";
import TextFormat from "./components/textFormat";
import marketing from '../../public/laptop-growth.webp'
import Herobanner2 from "./components/herobanner2";
import AuroraHero from "./components/auroraHero";
import ContactCard from "./components/contactCard";
import FlashContent from "./components/flashContent";
import moneyball from '../../public/moneyball.webp'
import ScrollCarousel from "./components/scrollCarousel";
import Testimonials from "./components/testimonials";
import Closer from "./components/closer";
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

    <FeatureBoxes
    boxData={generalAttributes}
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
    customText={<TextFormat
    reverse={true}
    isAnimated={true}/>
    }
    />

    <ImageTextBox
    {...imageTextBox2}
   
    />
    </section>

 <ScrollCarousel
 images={bookCarousel}
 />

<Testimonials/>

    {/* <Carousel
    isGrid={true}
    images={artCarousel}
    /> */}
    

    

    <Closer/>
   
  </main>
  );
}
