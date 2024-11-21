import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://linkedin.com/",
  },
  {
    icon: <FaTwitter />,
    path: "https://twitter.com/",
  },
  {
    icon: <FaInstagram />,
    path: "https://instagram.com/",
  },
];

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
