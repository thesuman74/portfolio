"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import type { Container } from "@tsparticles/engine";
import type { RecursivePartial } from "@tsparticles/engine";
import type { IOptions } from "@tsparticles/engine";

interface ParticlesProps {
  id: string;
}

const ParticlesComponent: React.FC<ParticlesProps> = ({ id }) => {
  const [init, setInit] = useState<boolean>(false);
  const [particlesColor, setParticlesColor] = useState<string>("");
  const [particlesLinkColor, setParticlesLinkColor] = useState<string>("");

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true); // Update state to indicate initialization is complete
    });
  }, []);

  // Function to get the correct value for the current theme (only on the client side)
  const getCSSVariable = (varName: string): string => {
    if (typeof window !== "undefined") {
      return getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
    }
    return ""; // Return a fallback value if not running on the client
  };

  // Set the CSS variables once the component has mounted
  useEffect(() => {
    if (typeof window !== "undefined") {
      setParticlesColor(getCSSVariable("--particles-color"));
      setParticlesLinkColor(getCSSVariable("--accent"));
    }
  }, []);

  const options: RecursivePartial<IOptions> = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: particlesColor || "#ffffff", // Default to white if the variable is not loaded yet
        },
        links: {
          color: particlesLinkColor || "#ffffff", // Default to white if the variable is not loaded yet
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 100,
          },
          value: 150,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [particlesColor, particlesLinkColor] // Recalculate options when CSS variables change
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10,
      }}
    >
      <Particles id={id} options={options} />
    </div>
  );
};

export default ParticlesComponent;
