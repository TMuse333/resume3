import { experienceCard1, experienceCard2 } from "@/data/data";
import Image from "next/image";
import ExperienceCard from "./components/experienceCard";
import Herobanner from "./components/herobanner";

export default function Home() {
  return (
  <main className="w-screen overflow-x-hidden">
    {/* <Herobanner/> */}
    <div className="h-[100vh]"/>
    <ExperienceCard
    {...experienceCard1}
    />
     <ExperienceCard
    {...experienceCard2}
    reverse={true}
    />
     <div className="h-[100vh]"/>
  </main>
  );
}
