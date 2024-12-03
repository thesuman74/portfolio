import Image from "next/image";
import React from "react";

type TimelineItemProps = {
  title: string; // Title of the section
  images?: string[]; // Optional array of image URLs
  overview: string; // Overview text
  technologies: string[]; // List of technologies
  content?: React.ReactNode; // Custom content as JSX
};

export const TimelineItem = ({ data }: { data: TimelineItemProps }) => {
  return (
    <div className="text-center">
      <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium mb-4">
        {/* Explore tools and frameworks used in ProCodrr courses. */}
        {data.title}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {data.technologies.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-white text-xs md:text-sm font-medium py-1 px-3 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
      {data.images && data.images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {data.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`coding project ${index + 1}`}
              className="rounded-lg object-cover shadow-lg w-full"
            />
          ))}
        </div>
      )}
    </div>
  );
};
