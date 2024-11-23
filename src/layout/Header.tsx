"use client";
import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "@/components/ui/button";
import { ThemeToggler } from "@/components/ThemeToggler";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="pt-3 text-black dark:text-white bg-background">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo and Theme Indicator */}
          <Link href="/">
            <p className="text-4xl font-semibold cursor-pointer ">Suman</p>
          </Link>
          <div className="flex space-x-2">
            <span
              className="cursor-pointer text-4xl text-red-500"
              // onClick={() => handleThemeChange("red")}
            >
              .
            </span>
            <span
              className="cursor-pointer text-4xl text-violet-500"
              // onClick={() => handleThemeChange("violet")}
            >
              .
            </span>
            <span
              className="cursor-pointer text-4xl text-orange-500"
              // onClick={() => handleThemeChange("orange")}
            >
              .
            </span>
          </div>
        </div>

        {/* Desktop Navigation and Hire Me Button */}
        <div className="hidden xl:flex items-center gap-5 ">
          <Nav />
          <Link href="/contact">
            <Button className="animate-bounce">Hire me</Button>
          </Link>
          <ThemeToggler />
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
