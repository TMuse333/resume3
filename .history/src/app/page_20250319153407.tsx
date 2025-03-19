"use client"

import { experienceCard1, experienceCard2, experienceCard3,
// codingCarousel,
 generalAttributes,
  bookCarousel,
// imageTextBox2,
 previousExperience,
codingStats,
codingAttributes} from "@/data/data";
import { lazy } from "react";
// import AuroraHero from "../components/auroraHero";
import ExperienceCard from "../components/experienceCard";
import FeatureBoxes from "../components/featureBox";






// const StickyCarousel = lazy(() => import("../components/stickyCarousel"));
// import { promoVid } from "@/data/data";
// const ImageTextBox = lazy(() => import("../components/imageTextBox"));


// const FlashContent = lazy(() => import("../components/flashContent"));
// import moneyball from '../../public/moneyball.webp';
const ScrollCarousel = lazy(() => import("../components/scrollCarousel"));

// const AppearingSquare = lazy(() => import("../components/appearingSquare"));

// import Closer from "../components/closer";
import ElectricContainer from "../components/electricContainer";
import CountUpImageText from "@/components/countUpImageText/countUpImageText";
import DisplayBoxes from "@/components/displayBox/displayBox";
import TextAndList from "@/components/textAndList/textAndList";
import FullBodyHero from "@/components/herobanner/herobanner";
import Closer from "@/components/closer";
import ContactForm from "@/components/contactForm/contactForm";

export default function Home() {

  const links = [
    {
      name: "home",
      destination: string
      hasScroll: boolean
  }
  ]
  return (
  <main className="w-screen overflow-x-hidden bg-gray-800">
    {/* <Herobanner/> */}
   
{/* <AuroraHero/> */}
   {/*   */}
   <FullBodyHero/>

   <CountUpImageText
   {...codingStats}
   />
   <section className="bg-gray-800">


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
       </section>

    {/* <StickyCarousel
    title="Primary skill: Web Developer"
    description="My primary skill is creating visually appealing, animated websites with next js. I have spent 1100 hours since august 2023 (3-4 hours of coding everyday) honing this craft. Here are some of the aspects of my front end engineering skills."
    images={codingCarousel}
    /> */}

    <TextAndList
    {...codingAttributes}
    />

   

<DisplayBoxes
data={previousExperience}
bgColor
/>
   

    <FeatureBoxes
    boxData={generalAttributes}
    />
    
    {/* <AppearingSquare
    isVideo
    src={promoVid}
    id='promo-video'
    sliderText="Other design skills"
    />
     */}
    {/* <FlashContent
    src={moneyball.src}
    alt="The moneyball to represent earning more money from marketing"/> */}

<section className="w-screen"
  style={{
    background: 'radial-gradient(circle, #00bfff -130%, rgba(0, 191, 255, 0%) 60%)'
    
  }}>


    {/* <ImageTextBox
    description={`I have started posting 
    coding tutorials on my youtube channel
    to help others make cool animations on
    their own websites and to deepen
    my own knowledge and make sure I know
    what I am doing.`}
  
    alt="The marketing laptop"
    title="Youtube Tutorials"
   
    reverse
   
    
    iframe={<iframe
      className="absolute h-full w-full"
    src="https://www.youtube.com/embed/jG37sILjFIw?si=wDB3SyXe5uZ1aoco" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
    
    /> */}

    {/* <ImageTextBox
    {...imageTextBox2}
   
    /> */}
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
    

    <ContactForm/>

   {/* <Closer/> */}
   
  </main>
  );
}
