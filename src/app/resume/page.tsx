"use client";
import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ParticlesComponent from "@/components/ParticlesContainer";
import SkillsList from "@/components/SkillsList";

const about = [
  {
    title: "About Me",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam laborum ad",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Suman Adhikari",
      },
      {
        fieldName: "Phone",
        fieldValue: "+977 xxxx-xxx-xxx",
      },
      {
        fieldName: "Experience",
        fieldValue: "13+ months",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Nepalese",
      },
      {
        fieldName: "Email",
        fieldValue: "mail2sumanadhikari@gmail.com",
      },
    ],
  },
];

const experience = [
  {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam laborum ad",
    items: [
      {
        company: "Tech Solutions Inc.",
        position: "Front End Developer",
        duration: "2022- present",
      },
      {
        company: "Tech Solutions Inc.",
        position: "Front End Developer",
        duration: "2022- present",
      },
      {
        company: "Tech Solutions Inc.",
        position: "Front End Developer",
        duration: "2022- present",
      },
      {
        company: "Tech Solutions Inc.",
        position: "Front End Developer",
        duration: "2022- present",
      },
    ],
  },
];

const education = [
  {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam laborum ad",
    items: [
      {
        institution: "Gandaki college of Engineering And Science",
        degree: "Software Engineering",
        duration: "2020- present",
      },
      {
        institution: "Amarsingh Higher Secondary School",
        degree: "Science and Technology",
        duration: "2022- present",
      },
    ],
  },
];

const skills = [
  {
    title: "My Skills",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam laborum ad",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "Html-5",
        color: "#dd4b25",
      },
      {
        icon: <FaCss3 />,
        name: "CSS",
        color: "#2946ff",
      },
      {
        icon: <FaJs />,
        name: "Java Script",
        color: "#efd81d",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tail Wind",
        color: "#12b7d6",
      },
      {
        icon: <FaReact />,
        name: "React",
        color: "#5ed3f3",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
        color: "#ffffff",
      },
    ],
  },
];

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <ParticlesComponent id={"tsparticles"} />
      <div className="container mx-auto z-50">
        <Tabs
          defaultValue="Experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="Experience">Experience</TabsTrigger>
            <TabsTrigger value="Education">Education</TabsTrigger>
            <TabsTrigger value="Skills">Skills</TabsTrigger>
            <TabsTrigger value="About Me">About Me</TabsTrigger>
          </TabsList>
          {/* experience section  */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="Experience" className="w-full">
              <div className="flex flex-col gap-4 text-center xl:text-left">
                {experience.map((exp, index) => (
                  <div key={index}>
                    <h2 className="text-4xl font-bold">{exp.title}</h2>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {exp.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {exp.items.map((item, idx) => {
                          return (
                            <li
                              key={idx}
                              className="bg-[#232329] h-[184px] py-6 px-10 flex 
                            flex-col justify-center items-center lg:items-start gap-1"
                            >
                              <span className="text-accent">
                                {item.duration}
                              </span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                {item.position}
                              </h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.company}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                ))}
              </div>
            </TabsContent>
            {/* eductaion section  */}
            <TabsContent value="Education" className="w-full">
              <div className="flex flex-col gap-4 text-center xl:text-left">
                {education.map((exp, index) => (
                  <div key={index}>
                    <h2 className="text-4xl font-bold">{exp.title}</h2>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {exp.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education[0].items.map((item, idx) => {
                          return (
                            <li
                              key={idx}
                              className="bg-[#232329] h-[184px] py-6 px-10 flex 
                            flex-col justify-center items-center lg:items-start gap-1"
                            >
                              <span className="text-accent">{item.degree}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                {item.duration}
                              </h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">
                                  {item.institution}
                                </p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                ))}
              </div>
            </TabsContent>
            {/* skills section  */}
            <TabsContent value="Skills" className="w-full">
              <SkillsList />
            </TabsContent>
            {/* about section  */}
            <TabsContent value="About Me" className="w-full">
              <div className="flex flex-col gap-[30px]">
                {about.map((info, index) => (
                  <div key={index}>
                    <h2 className="text-4xl font-bold">{info.title}</h2>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                      {info.description}
                    </p>
                    <ul className="grid grid-cols-1 mt-8 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {info.info.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-center xl:justify-start"
                        >
                          <span className="text-white/60">
                            {item.fieldName}:
                          </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
