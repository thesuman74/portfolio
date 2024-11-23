import React from "react";

type TimelineItemProps = {
  title: string; // Title of the section
  images?: string[]; // Optional array of image URLs
  overview: string; // Overview text
  technologies: string[]; // List of technologies
  content: React.ReactNode; // Custom content as JSX
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  images,
  overview,
  technologies,
  content,
}) => {
  return (
    <div className="mb-12">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
        {title}
      </h2>
      {images && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="rounded-lg object-cover shadow-md w-full"
            />
          ))}
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
          Overview
        </h3>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 mt-2">
          {overview}
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-white text-xs md:text-sm font-medium py-1 px-3 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
          Content
        </h3>
        <div className="text-sm md:text-base text-neutral-800 dark:text-neutral-300 mt-2">
          {content}
        </div>
      </div>
    </div>
  );
};
