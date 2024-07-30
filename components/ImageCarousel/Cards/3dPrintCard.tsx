import CircuitryLogo from "@/components/svgs/Circuitry-logo";
import EspressifLogo from "@/components/svgs/Espressif-logo";
import LedLogo from "@/components/svgs/Led-Logo";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type props = {
  className?: string;
};

const Print3dCard: React.FC<props> = ({ className = " " }) => {
  return (
    <div
      className={`overflow-hidden flex w-[960px] min-w-[960px] max-w-[960px] h-[550px] min-h-[550px] max-h-[550px]  border border-gray-300 mx-auto rounded-2xl shadow-2xl mb-4 transition-all duration-300  ${className} `}
    >
      <div className="flex flex-col w-1/2 px-12 font-medium">
      <h1 className="text-[48px] border-b border-red-300 font-bold text-stroke mx-auto text-center py-4 bg-clip-text bg-gradient-to-b from-red-600 to-red-300 text-transparent">
        3d Printing
      </h1>
      <h2 className="text-lg mt-8">Designing complex engineering structures for analysis, visualization and simulation</h2>
      <div className="mt-44 px-8"
      >   
         <button className=" text-red-500 hover:bg-red-500 active:underline hover:text-white transition-all duration-300 border-red-500 border-2 rounded-md font-bold font-sans-serif w-full text-lg py-2"> See More</button>
      </div>
  
      </div>



      <div className=" w-1/2 px-4 ">
      <div className="relative h-5/6  overflow-hidden flex justify-center mt-8 items-center">
      <span className="absolute opacity-0 animate-example3d">
      <img className="" width={"400px"}  src="/3dexample.png"></img>
      </span>
       
      <span className="absolute opacity-0 animate-example3d example3d-item-2">
      <img className="" width={"500px"}  src="/3dexample2.png"></img>
      </span>

      <span className="absolute opacity-0 animate-example3d example3d-item-3">
      <img className="" width={"500px"} src="/3dexample3.png"></img>
      </span>

      <span className="absolute opacity-0 animate-example3d example3d-item-4">
      <img className="" width={"400px"}  src="/3dexample4.png"></img>
      </span>
      </div>

      <h1 className="mt-2 text-center text-sm font-medium  animate-[pulse_4s_ease-in-out_infinite]">Examples</h1>

      </div>
    </div>
  );
};

export default Print3dCard;
