import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const SkillsList = () => {
  return (
    <div className="flex flex-col gap-[30px] p-4 md:p-8  ">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold text-center text-textColor">
          {skills[0].title}
        </h3>
        {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {skills[0].description}
        </p> */}
      </div>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {skills[0].skillList.map((skill, index) => (
          <li
            key={index}
            className="bg-[#232329] h-[184px] py-6 px-10 flex flex-col justify-center items-center gap-1 text-center"
            style={{ "--hover-color": skill.color } as React.CSSProperties}
          >
            <span className="text-6xl  hover:text-[var(--hover-color)] hover:scale-125 transition-all">
              {skill.icon}
            </span>
            <p className="text-xl mt-4">{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;

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
