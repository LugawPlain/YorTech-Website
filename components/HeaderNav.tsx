"use client";
import React from "react";
import LogoNoBg from "./Logo-no-bg";
import Link from "next/link";
import { useState, useEffect } from "react";

const HeaderNav = () => {
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
      className={`header-nav flex justify-between flex-wrap sticky z-10 h-20 top-0 text-white overflow-hidden`}
    >
      <div
        className={`absolute  bg-[#0d0f1c] transition-all duration-1000 w-full origin-top h-full  left-0 -z-10 ${
          sticky ? "opacity-95 block top-0  " : "-top-20"
        }`}
      ></div>

      <span className="group/logo  flex w-fit mx-auto">
        <LogoNoBg className="group hover:cursor-pointer hover:scale-125 transition duration-200 ease-in-out " />
        <span className="translate-x-8 origin-left duration-200 ease-linear group-hover/logo:scale-100 lg:scale-0 y-auto  font-medium bg-gray-800 rounded-md shadow-sm p-2  px-4 ">
          <h1 className="text-textcolor my-auto text-center ">
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
          href="#"
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
          href="#"
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
