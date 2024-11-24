import React from "react";
import { TimelineSection } from "@/components/timeline/TimelineSection";
import { TimelineItem } from "@/components/timeline/TimelineItems";

const page = () => {
  const data = {
    title: "Explore tools and frameworks used in ProCodrr courses",
    images: ["https://assets.aceternity.com/templates/startup-1.webp"],
    overview:
      "Deeply understand advanced concepts, practice with real-world exercises, and build expertise to boost your career.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],
  };
  return (
    <div>
      <TimelineSection />
      {/* <TimelineItem data={data} /> */}
    </div>
  );
};

export default page;
