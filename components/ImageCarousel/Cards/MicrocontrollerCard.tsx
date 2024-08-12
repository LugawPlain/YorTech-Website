import EspressifLogo from "@/components/svgs/Espressif-logo";
import LedLogo from "@/components/svgs/Led-Logo";
import Link from "next/link";
import React from "react";

type props = {
  className?: string;
};
const MicrocontrollerCard: React.FC<props> = ({ className = " " }) => {
  return (
    <div
      className={`light text-textColor overflow-hidden w-[960px]flex relative  min-w-[960px] max-w-[960px] h-[550px] min-h-[550px] max-h-[550px] mx-auto rounded-2xl border border-t-2 shadow-2xl mb-4 transition-all duration-300 px-16 ${className}`}
    >
      <h1 className="text-[48px] w-fit font-meduim mx-auto text-center py-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-black to-red-400">
        Micro-Controllers
      </h1>
      <div className="flex 2xl:gap-24 justify-center xl:gap-12 gap-4">
        <div className="flex w-64 flex-col items-center ">
          {/* arduino */}
          <div className="flex justify-center items-center h-32 mb-8">
            <a
              href="https://www.arduino.cc/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="hover:scale-125 transition-all ease-in-out duration-300 "
                src="./arduino-logo.png"
                width={"80px"}
                height={"80px"}
              ></img>
            </a>
          </div>
          <div className="bg-[#006d70] w-full h-12 flex items-center justify-center rounded-md">
            <h2 className="text-center text-3xl font-medium text-white my-auto ">
              Arduino
            </h2>
          </div>
          <div className="h-36">
            <h3 className="py-4 pt-8 text-center text-xl  font-medium">
              Controlling components using a simple arduino board
            </h3>
          </div>
        </div>
        {/* espcard */}
        <div className="flex w-64 flex-col items-center ">
          <div className="flex justify-center items-center h-32 mb-8">
            <a
              href="https://www.espressif.com/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <EspressifLogo className="hover:scale-125 transition-all ease-in-out duration-300 " />
            </a>
          </div>
          <div className="bg-black w-full h-12 flex items-center justify-center rounded-md">
            <h2 className="text-center text-3xl font-medium text-gray-200 my-auto">
              Esp32
            </h2>
          </div>
          <div className="h-36">
            <h3 className="py-4 pt-8 text-center text-xl font-medium">
              Built-In Wi-fi And Bluetooth For Internet of Things integration
            </h3>
          </div>
        </div>
        {/* rpicard */}
        <div className="flex w-64 flex-col items-center ">
          <div className="flex justify-center items-center h-32 mb-8">
            <a
              href="https://www.raspberrypi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="hover:scale-125 transition-all ease-in-out duration-300 "
                src="./RaspberryPi-Logo.jpg"
                width={"140px"}
                height={"80px"}
              ></img>
            </a>
          </div>
          <div className="bg-red-600 w-full h-12 flex items-center justify-center rounded-md">
            <h2 className="text-center text-3xl font-medium text-white my-auto">
              Raspberry Pi
            </h2>
          </div>
          <div className="h-36">
            <h3 className="py-4 pt-8 text-center text-xl font-medium">
              More Complex Embedded Systems,Web Centers and Robotics
            </h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link href="/micro-controller">
          <button
            className="group bg-neutral-800 px-4 pr-12 rounded-2xl py-4 h-fit underline decoration-1 decoration-white text-white underline-offset-2 outline outline-white -outline-offset-4 outline-1 
        hover:transition-all hover:duration-300 hover:decoration-2 hover:underline-offset-4  hover:outline-green-300 hover:text-green-300 hover:decoration-green-300 hover:bg-black 
        active:outline-2 active:duration"
          >
            <LedLogo className=" inline mr-8 " />
            See more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MicrocontrollerCard;
