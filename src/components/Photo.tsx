"use client";
import { motion } from "framer-motion";
import React from "react";
import ParticlesComponent from "./ParticlesContainer";
import CustomImage from "./CustomImage";

const Photo = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Particles Component with lower z-index */}
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 10, // Ensure this is lower than the image
        }}
      >
        <ParticlesComponent id={"tsparticles"} />
      </div> */}

      {/* Image Component with higher z-index */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
        }}
        style={{ position: "relative", zIndex: 20 }} // Ensure this is higher than the particles
      >
        <div className="absolute w-[298px] h-[298px] xl:w-[440px] xl:h-[440px] mix-blend-darken">
          <CustomImage
            src="/assets/profile.png"
            priority
            quality={100}
            fill
            alt={""}
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Circle Component */}
      <motion.svg
        className="w-[300px] xl:w-[450px] h-[300px] xl:h-[450px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="var(--accent)" // Use the CSS variable for stroke color
          strokeWidth="4"
          strokeLinejoin="round"
          initial={{ opacity: 0, strokeDasharray: "24 15 0 0" }}
          animate={{
            opacity: 1,
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
