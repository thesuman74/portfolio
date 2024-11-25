"use client";
import React, { useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "@/components/ui/button";
import { ThemeToggler } from "@/components/ThemeToggler";
import MobileNav from "./MobileNav";
import { Switch } from "@/components/ui/switch";
import ParticlesComponent from "@/components/ParticlesContainer";

const Header = () => {
  // State for controlling the visibility of particles
  const [particlesVisible, setParticlesVisible] = useState(true);

  // Function to change the theme color
  const handleThemeChange = (color: string) => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove("red", "violet", "orange", "green");
    htmlElement.classList.add(color);
  };

  // List of colors to map through
  const colors = ["red", "violet", "orange", "green"];

  // Static class names for Tailwind color classes
  const colorClasses = {
    red: "text-red-500",
    violet: "text-violet-500",
    orange: "text-orange-500",
    green: "text-green-500",
  };

  return (
    <header className="pt-3 text-black dark:text-white bg-background">
      <div className="container relative z-50 mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo and Theme Indicator */}
          <Link href="/">
            <p className="text-4xl font-semibold cursor-pointer text-textColor">
              Suman
            </p>
          </Link>
          <div className="flex space-x-2">
            {/* Dynamically rendered color selectors */}
            {colors.map((color) => (
              <span
                key={color}
                className={`cursor-pointer text-4xl ${
                  colorClasses[color as keyof typeof colorClasses]
                } animate-pulse`}
                onClick={() => handleThemeChange(color)} // Change to respective color theme
              >
                .
              </span>
            ))}
          </div>
        </div>

        {/* Desktop Navigation and Hire Me Button */}
        <div className="hidden xl:flex items-center gap-5">
          <Nav />
          <Link href="/contact">
            <Button className="animate-bounce">Hire me</Button>
          </Link>
          <ThemeToggler />
          <Switch
            checked={particlesVisible}
            onCheckedChange={(checked) => setParticlesVisible(checked)}
          />
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>

      {/* Particle Background */}
      {particlesVisible && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0, // Ensure this is lower than the content
          }}
        >
          <ParticlesComponent id="tsparticles" />
        </div>
      )}
    </header>
  );
};

export default Header;
