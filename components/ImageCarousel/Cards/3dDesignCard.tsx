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
      className={`w-[960px] min-w-[960px] max-w-[960px] h-[550px] min-h-[550px] max-h-[550px] mx-auto rounded-2xl shadow-2xl mb-4 transition-all duration-300 px-16 ${className} `}
    >
      <h1 className="pt-4 text-[48px] w-fit font-meduim mx-auto font-mono text-center bg-clip-text text-black">
        3d Design and Modeling
      </h1>
    </div>
  );
};

export default Design3dCard;
