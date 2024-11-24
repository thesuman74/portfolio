"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+977) XXXX-XXX-XXX",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "youremail@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Pokhara, Gandaki , Nepal",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-2 container mx-20"
    >
      <div className="container mt-10 mx-auto">
        <div className="flex flex-col xl:flex-row space-x-10">
          {/* form */}
          <div className="flex-1 xl:max-w-[60%]">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h2 className="text-4xl font-bold text-green-500">
                Let's work together
              </h2>
              <p className="text-white/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                nihil sapiente pariatur id totam.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  placeholder="Firstname"
                  className="bg-[#1c1c1e] border border-accent text-white"
                />
                <Input
                  placeholder="Lastname"
                  className="bg-[#1c1c1e] border border-accent text-white"
                />
                <Input
                  placeholder="Email address"
                  className="bg-[#1c1c1e] border border-accent text-white"
                />
                <Input
                  placeholder="Phone number"
                  className="bg-[#1c1c1e] border border-accent text-white"
                />
                <Select>
                  <SelectTrigger className="bg-[#1c1c1e] border border-accent text-white">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1c1c1e] border border-accent text-white">
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      <SelectItem value="web-design">Web Design</SelectItem>
                      <SelectItem value="seo">SEO</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Type your message here."
                  className="col-span-1 md:col-span-2 border border-accent bg-[#1c1c1e] text-white"
                />
              </div>
              <Button
                type="submit"
                className="bg-green-500 text-black hover:bg-green-600 w-full md:w-auto"
              >
                Send message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex flex-1 flex-col gap-6 mt-10 ">
            {info.map((item, index) => (
              <div key={index} className="flex items-center mb-6 last:mb-0">
                <div className="text-green-500 text-3xl mr-4 bg-[#27272c] p-7 hover:animate-pulse">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium">
                    {item.title}
                  </h4>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
