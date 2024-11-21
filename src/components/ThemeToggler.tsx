"use client";

import * as React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? (
        <FaSun className="h-[1rem] w-[1rem]" />
      ) : (
        <FaMoon className="h-[1rem] w-[1rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
