"use client";

import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Years of Experience",
  },
  {
    num: 26,
    text: "Projects Completed",
  },
  {
    num: 7,
    text: "Technologies Mastered",
  },
  {
    num: 500,
    text: "Code Commits",
  },
];

const Stats = () => {
  // const GithubProfileData = await getGithubProfile();

  // console.log("github profile data", GithubProfileData);
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 text-textColor">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  start={0}
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : " max-w-[150px]"
                  } leading-snug `}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
