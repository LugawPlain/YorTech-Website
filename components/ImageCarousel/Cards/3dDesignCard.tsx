import CircuitryLogo from "@/components/svgs/Circuitry-logo";
import EspressifLogo from "@/components/svgs/Espressif-logo";
import LedLogo from "@/components/svgs/Led-Logo";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type props = {
  className?: string;
};

const Design3dCard: React.FC<props> = ({ className = " " }) => {
  return (
    <div
      className={`overflow-hidden flex w-[960px] min-w-[960px] max-w-[960px] h-[550px] min-h-[550px] max-h-[550px]  border border-gray-300 mx-auto rounded-2xl shadow-2xl mb-4 transition-all duration-300  ${className} `}
    >
      
      <h1 className="pt-4 text-[48px] w-fit font-meduim mx-auto font-mono text-center bg-clip-text text-black px-16">
        3d Design and Modeling
      </h1>
      <img className="scale-75" src="/3dexample.png"></img>
    </div>
  );
};

export default Design3dCard;
