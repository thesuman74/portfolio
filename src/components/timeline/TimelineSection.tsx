"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { useRouter } from "next/navigation";

export function TimelineSection() {
  const router = useRouter();

  const data = [
    {
      title: "ProCodrr Mastery Courses",
      content: (
        <div className="text-center">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium mb-6">
            Deeply understand advanced concepts, practice with real-world
            exercises, and build expertise to boost your career.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2">JavaScript Course</h3>
              <ul className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                <li>✔️ Core fundamentals</li>
                <li>✔️ Practice sessions</li>
                <li>✔️ Hands-on projects</li>
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                ₹499 Enroll Now
              </button>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2">JS + RegEx Combo</h3>
              <ul className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                <li>✔️ Advanced concepts</li>
                <li>✔️ 2 certifications</li>
                <li>✔️ Expert mentorship</li>
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                ₹699 Enroll Now
              </button>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2">RegEx Pro Course</h3>
              <ul className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                <li>✔️ RegEx mastery</li>
                <li>✔️ Practice projects</li>
                <li>✔️ Certificate of completion</li>
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                ₹599 Enroll Now
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Tech Stack and Features",
      content: (
        <div className="text-center">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium mb-4">
            Explore tools and frameworks used in ProCodrr courses.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React.js",
              "Express.js",
              "Node.js",
              "Swiper.js",
              "MongoDB",
              "CSS",
              "JavaScript",
              "Figma",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-white text-xs md:text-sm font-medium py-1 px-3 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Course Benefits",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium mb-4">
            Unlock your coding potential with ProCodrr!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="coding project 1"
              className="rounded-lg object-cover shadow-lg w-full"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="coding project 2"
              className="rounded-lg object-cover shadow-lg w-full"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="coding project 3"
              className="rounded-lg object-cover shadow-lg w-full"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="coding project 4"
              className="rounded-lg object-cover shadow-lg w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "View More",
      content: (
        <div className="text-center">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium mb-6">
            Ready to explore more courses and features? Click below to dive
            deeper.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => router.push("/courses")}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 text-white py-3 px-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
            >
              View More Courses
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
