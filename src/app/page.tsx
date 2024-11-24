import Stats from "@/components/contact/Stats";
import HeroSection from "@/components/Home/HeroSection";
import SkillsList from "@/components/SkillsList";
import { TimelineSection } from "@/components/timeline/TimelineSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <Stats />
      <div className="my-10">
        <SkillsList />
      </div>

      <TimelineSection />
    </>
  );
}
