import Social from "@/components/contact/Social";
import Stats from "@/components/contact/Stats";
import HeroSection from "@/components/Home/HeroSection";
import Photo from "@/components/Photo";
import SkillsList from "@/components/SkillsList";
import { Button } from "@/components/ui/button";
import { h1 } from "framer-motion/client";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <HeroSection />

      <Stats />

      {/* <Stats /> */}
      <div className="my-10">
        <SkillsList />
      </div>
    </>
  );
}
