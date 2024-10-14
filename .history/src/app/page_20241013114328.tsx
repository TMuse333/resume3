import { experienceCard1 } from "@/data/data";
import Image from "next/image";
import ExperienceCard from "./components/experienceCard";
import Herobanner from "./components/herobanner";

export default function Home() {
  return (
  <main className="w-screen overflow-x-hidden">
    {/* <Herobanner/> */}
    <div className="h-[60vh]"/>
    <ExperienceCard
    {...experienceCard1}
    />
     <div className="h-[60vh]"/>
  </main>
  );
}
