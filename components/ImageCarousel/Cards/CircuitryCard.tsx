import CircuitryLogo from "@/components/svgs/Circuitry-logo";
import EspressifLogo from "@/components/svgs/Espressif-logo";
import LedLogo from "@/components/svgs/Led-Logo";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type props = {
  className?: string;
};

const CircuitryCard: React.FC<props> = ({ className = " " }) => {
  return (
    <div
      className={`w-[960px] min-w-[960px] max-w-[960px] h-[550px] min-h-[550px] max-h-[550px] mx-auto rounded-2xl shadow-2xl drop-shadow-2xl mb-4 transition-all duration-300 px-16 ${className} `}
    >
      <h1 className="pt-4 text-[48px] w-fit font-meduim mx-auto font-mono text-center bg-clip-text text-black">
        Circuitry
      </h1>
      <div className=" w-fit">
        <CircuitryLogo />
      </div>

      <div className="flex justify-center text-white">
        <div className="h-[60px] w-full relative bg-gray-300 rounded-lg overflow-hidden outline outline-black">
          <div className="card-border h-[150%] w-[150%] -left-1/4 -top-1/4 absolute animate-[spin_7s_linear_infinite] "></div>
          <div className="flex justify-center items-center w-[calc(100%-8px)] h-[calc(100%-8px)] absolute z-10 hover:h-full hover:w-full duration-200 transition-all hover:top-0 hover:left-0 left-[4px] top-[4px] border border-neutral-800 bg-neutral-800 rounded-md">
            Designing Schematic Diagram & PCB
          </div>
        </div>
        <button
          className="flex mx-16 text-nowrap text-sm h-fit w-fit items-center justify-center rounded-full
         bg-[#050404] px-[1em] py-[0.5em] text-white shadow-[inset_0px_-4px_4px_0px_#5f5f5f,0px_0px_0px_2px_#252525,0px_4px_0px_0px_black] duration-[250ms] 
        active:translate-y-[0.5em] active:shadow-[inset_0px_-4px_4px_0px_#f05b5b,0px_0px_0px_2px_#252525] hover:mx-[72px]
        hover:font-bold"
        >
          See More
        </button>
        <div className="h-[60px] w-full relative bg-gray-300 rounded-lg overflow-hidden outline outline-black">
          <div className="card-border h-[150%] w-[150%] -left-1/4 -top-1/4 absolute animate-[spin_6.5s_linear_infinite] "></div>
          <div className="flex justify-center items-center w-[calc(100%-8px)] h-[calc(100%-8px)] absolute z-10 hover:h-full hover:w-full duration-200 transition-all hover:top-0 hover:left-0 left-[4px] top-[4px] border border-neutral-800 bg-neutral-800 rounded-md"></div>
          <div className="inset-0 font-mono text-xl font-semibold flex justify-center items-center opacity-50 bg-gray-300 text-black absolute  z-20">
            Coming soon
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircuitryCard;
