"use client"

import { experienceCard1, experienceCard2, experienceCard3,
codingCarousel } from "@/data/data";
import Image from "next/image";
import ExperienceCard from "./components/experienceCard";
import Herobanner from "./components/herobanner";
import StickyCarousel from "./components/stickyCarousel";

export default function Home() {
  return (
  <main className="w-screen overflow-x-hidden">
    <Herobanner/>
   
    <ExperienceCard
    {...experienceCard1}
    />
     <ExperienceCard
    {...experienceCard2}
    reverse={true}
    />

<ExperienceCard
    {...experienceCard3}
    reverse={true}
    />

    <StickyCarousel
    title="React js"
    description="My primary skill is creating visually appealing, animated websites with next js. I have spent 1100 hours since august 2023"
    images={codingCarousel}
    />
    

    
   
  </main>
  );
}
