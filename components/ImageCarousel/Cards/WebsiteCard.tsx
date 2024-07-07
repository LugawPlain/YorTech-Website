import CssLogo from "@/components/svgs/Css-Logo";
import DockerLogo from "@/components/svgs/Docker-logo";
import FireBaseLogo from "@/components/svgs/FireBase-logo";
import GraphqlLogo from "@/components/svgs/Graphql-Logo";
import HtmlLogo from "@/components/svgs/Html-logo";
import JavaScriptLogo from "@/components/svgs/Javascript-logo";
import MongodbLogo from "@/components/svgs/Mongodb-logo";
import NextLogo from "@/components/svgs/Next-logo";
import ReactLogo from "@/components/svgs/React-logo";
import SassLogo from "@/components/svgs/Sass-Logo";
import TailwindLogo from "@/components/svgs/Tailwind-logo";
import React from "react";

type Props = {
  className?: string;
};
const WebsiteCard: React.FC<Props> = ({ className = " " }) => {
  return (
    <div
      className={`w-[960px] min-w-[960px] max-w-[960px] h-[550px] min-h-[550px] max-h-[550px] mx-auto rounded-2xl border border-gray-300 shadow-2xl drop-shadow-2xl mb-4 transition-all duration-300 px-16 ${className}`}
    >
      <h1 className="text-[48px] font-bold mx-auto text-center py-4  bg-clip-text bg-gradient-to-b from-yellow-100 to-yellow-600 text-transparent">
        Website Development
      </h1>
      <div className="flex justify-center items-center h-32 mb-8 gap-2">
        <a
          href="https://www.w3schools.com/html/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <HtmlLogo className="hover:scale-125 transition-all ease-in-out duration-300 " />
        </a>
        <a
          href="https://www.w3schools.com/css/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <CssLogo className="hover:scale-125 transition-all ease-in-out duration-300 " />
        </a>
        <a
          href="https://www.javascript.com/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <JavaScriptLogo className="hover:scale-125 transition-all ease-in-out duration-300 " />
        </a>

        <a href="https://react.dev/ " target="_blank" rel="noopener noreferrer">
          <ReactLogo className="animate-[spin_4s_linear_infinite]" />
        </a>
        <a
          href="https://nextjs.org/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <NextLogo className="hover:scale-125 transition-all ease-in-out duration-300 " />
        </a>
        <a
          href="https://graphql.org/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <GraphqlLogo className="hover:scale-125 transition-all ease-in-out duration-300" />
        </a>

        <a
          href="https://tailwindcss.com/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <TailwindLogo className="animate-pulse hover:scale-125 transition-all ease-in-out duration-300 " />
        </a>
        <a
          href="https://sass-lang.com/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <SassLogo className="hover:scale-125 transition-all ease-in-out duration-300 " />
        </a>
        <a
          href="https://firebase.google.com/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FireBaseLogo className="hover:scale-125 transition-all ease-in-out duration-300 " />
        </a>
        <a
          href="https://www.docker.com/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <DockerLogo className="hover:scale-125 transition-all ease-in-out duration-300 " />
        </a>

        <a
          href="https://www.mongodb.com/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <MongodbLogo className="hover:scale-125 transition-all ease-in-out duration-300" />
        </a>
      </div>

      <div className="flex justify-between items-center text-3xl text-gray-200  ">
        <p className="py-2 text-nowrap px-8 rounded-md relative outline-2 outline outline-offset-2 outline-gray-500 bg-gray-800">
          Front-end
        </p>
        <div className="w-full h-[2px] bg-clip-content px-1 bg-gray-600 relative -z-10">
          <div className="absolute w-20 h-[2px] animate-left-to-right "></div>
          <div className="absolute w-20 -left-2 h-[4px]  blur-lg  animate-left-to-right "></div>
        </div>

        <p className="py-2 text-nowrap px-8 rounded-md relative outline-2 outline outline-offset-2 outline-gray-500 bg-gray-800">
          Back-end
        </p>
      </div>
      <div className="mt-8 flex justify-between ">
        <p className="w-64 border-r-2">
          Designing user-interface (UI) and enchancing user experience
          (UX),Responsive and effective across different platforms
        </p>
        <a>
          <button
            className="bg-neutral-800 px-16 rounded-2xl py-4 mt-20 h-fit underline decoration-1 decoration-white text-white underline-offset-2 outline outline-white -outline-offset-4 outline-1 
        hover:transition-all hover:duration-300 hover:decoration-2 hover:underline-offset-4  hover:outline-yellow-300 hover:text-yellow-300 hover:decoration-yellow-300 hover:bg-black
        active:outline-2 active:duration"
          >
            See more
          </button>
        </a>

        <p className="w-64 border-l-2 pl-4">
          Managing database interactions and data storage and Ensuring security,
          authentication, and authorization.
        </p>
      </div>
    </div>
  );
};

export default WebsiteCard;
