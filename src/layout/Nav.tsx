"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Works",
    path: "/works",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <nav className="flex gap-8 z-40  ">
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname
                  ? "text-textColor border-b-2 border-accent"
                  : ""
              } capitalize text-textColor font-medium hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Nav;
