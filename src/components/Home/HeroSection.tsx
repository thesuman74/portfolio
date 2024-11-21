import Social from "@/components/contact/Social";
import Stats from "@/components/contact/Stats";
import Photo from "@/components/Photo";
import SkillsList from "@/components/SkillsList";
import { Button } from "@/components/ui/button";
import { h1 } from "framer-motion/client";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

const HeroSection = () => {
  return (
    <>
      <section className="my-14  ">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-2">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none text-black dark:text-white">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1 text-black dark:text-white">
                Hello I'm <br />{" "}
                <span className="text-accent ">Suman Adhikari</span>
              </h1>
              <p className="max-w-[500px] mb-9  ">
                I excel at crafting elegant digital experiences and I am
                proficient in various programming languages and technologies
              </p>
              {/* buttons and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button>
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0 ">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* photo section */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        {/* <Stats /> */}
        <div className="my-10">{/* <SkillsList /> */}</div>
      </section>
    </>
  );
};

export default HeroSection;
