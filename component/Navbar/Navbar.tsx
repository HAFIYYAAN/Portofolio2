"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className={`fixed top-0 w-full bg-black text-white z-50 transition-all duration-300
    ${
      isFixed
        ? "bg-black/70 backdrop-blur-md shadow-md py-1"
        : "bg-transparent py-3"
    }`}
    >
      <nav className="max-w-5xl mx-auto flex justify-between items-center h-[52px]">
        <div>
          <h1 className="font-bold text-2xl ">Naufal</h1>
        </div>
        <ul className="flex gap-16 text-[14px]">
          <li className="cursor-pointer text-white font-bold  hover:text-cyan-200 transition duration-500">
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li className="cursor-pointer text-white font-bold  hover:text-cyan-200 transition duration-500">
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li className="cursor-pointer text-white font-bold  hover:text-cyan-200 transition duration-500">
            <ScrollLink to="projects" smooth={true} duration={500}>
              Project
            </ScrollLink>
          </li>
          <li className="cursor-pointer text-white font-bold  hover:text-cyan-200 transition duration-500">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </main>
  );
}

// "top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white shadow-md z-50 "
