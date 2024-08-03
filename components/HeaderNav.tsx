"use client";
import React from "react";
import LogoNoBg from "./svgs/Logo-no-bg";
import Link from "next/link";
import { useState, useEffect } from "react";
import { DarkToggle } from "./DarkToggle";

type props = {
  className?: string;
};

const HeaderNav: React.FC<props> = ({ className = " " }) => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header-nav flex justify-between flex-wrap w-full fixed z-50 h-20 top-0 text-white overflow-hidden ${className}`}
    >
      <div
        className={`absolute  bg-primary transition-all duration-1000 w-full origin-top h-full  left-0 -z-10 border-b-2 border-gray-200 ${
          sticky ? "opacity-95 block top-0  " : "-top-20"
        }`}
      ></div>

      <span className="group/logo  flex w-fit mx-auto">
        <LogoNoBg className="group hover:cursor-pointer hover:scale-125 transition duration-200 ease-in-out " />
        <span className="translate-x-8 origin-left duration-200 ease-linear group-hover/logo:scale-100 lg:scale-0 y-auto  font-medium bg-gray-800 rounded-md shadow-sm flex flex-col items-center justify-center my-1  px-4 ">
          <h1 className="text-textcolor text-center ">
            Yor
            <span className="text-transparent from-[#00EBF4] to-[#9c5bf6] bg-clip-text bg-gradient-to-b ">
              Tech
            </span>
          </h1>
          <div className="absolute bg-inherit -z-40 rotate-45 min-w-10 max-w-10 min-h-10 max-h-10 -left-2 top-[25%] shadow-sm"></div>
          <p className="m-0 text-nowrap">Your Ideas,Our Technology</p>
        </span>
      </span>
      <nav className="flex py-4 text-textcolor text-lg  space-x-12 font-bold font-serif items-center mx-auto">
        <Link
          className="hover:drop-shadow-[0px_0px_10px__rgba(249,115,22,1)] hovertext hover:bg-gradient-to-r bg-clip-text
       from-orange-300 to-orange-600 hover:text-transparent"
          href="/"
        >
          <h2>Home</h2>
        </Link>
        <Link
          className="hover:drop-shadow-[0px_0px_10px__rgba(249,115,22,1)] hovertext hover:bg-gradient-to-r bg-clip-text
       from-orange-300 to-orange-600 hover:text-transparent"
          href="#"
        >
          Service
        </Link>
        <Link
          className="hover:drop-shadow-[0px_0px_10px__rgba(249,115,22,1)] hovertext hover:bg-gradient-to-r bg-clip-text
       from-orange-300 to-orange-600 hover:text-transparent"
          href="/contacts"
        >
          Contact
        </Link>
        <Link
          className="hover:drop-shadow-[0px_0px_10px__rgba(249,115,22,1)] hovertext hover:bg-gradient-to-r bg-clip-text
       from-orange-300 to-orange-600 hover:text-transparent"
          href="#"
        >
          About
        </Link>
        <Link
          className="hover:drop-shadow-[0px_0px_10px__rgba(249,115,22,1)] hovertext hover:bg-gradient-to-r bg-clip-text
       from-orange-300 to-orange-600 hover:text-transparent"
          href="#"
        >
          Account
        </Link>
      </nav>
    </header>
  );
};

export default HeaderNav;
