"use client";
import MicrocontrollerCard from "./Cards/MicrocontrollerCard";
import React, { useState } from "react";
import WebsiteCard from "./Cards/WebsiteCard";
import LedLogo from "../svgs/Led-Logo";
import CircuitryCard from "./Cards/CircuitryCard";
import Design3dCard from "./Cards/3dDesignCard";
import Print3dCard from "./Cards/3dPrintCard";
const ImageCarousel = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const handleNext = () => {
    setArray((prevArray) => {
      const newArray = [...prevArray];
      const firstElement = newArray.pop();
      if (firstElement !== undefined) newArray.unshift(firstElement);
      return newArray;
    });
  };
  const handlePrev = () => {
    setArray((prevArray) => {
      const newArray = [...prevArray];
      const lastElement = newArray.shift();
      if (lastElement !== undefined) newArray.push(lastElement);
      return newArray;
    });
  };
  const handleButton = (item: number, index: number) => {
    console.log(index);
    console.log(item);
    for (let i = 0; i < item - 1; i++) {
      handleNext();
    }
  };

  return (
    <>
      <div className="flex w-10/12 mx-auto h-5/6 justify-center">
        <MicrocontrollerCard
          className={`bg-white shadow-teal-500 card-${array[0]}`}
        />
        <WebsiteCard className={`bg-white shadow-amber-200 card-${array[1]}`} />
        <CircuitryCard className={`bg-white shadow-black card-${array[2]}`} />
        <Design3dCard className={`bg-white shadow-red-500 card-${array[3]}`} />
        <Print3dCard className={`bg-white  card-${array[4]}`} />
      </div>
      <div className="mx-auto flex justify-center items-center gap-4">
        <button
          onClick={handlePrev}
          className="rounded-full text-[50px] h-[50px] w-[50px] animate-bounce-left border-2 border-black mr-16"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10t flex items-center rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </button>
        {array.map((item, index) => (
          <button
            onClick={() => handleButton(item, index)}
            key={index}
            className={`${
              array[index] == 1 ? "bg-gray-600" : "bg-gray-300"
            } w-3 h-3 rounded-full hover:outline hover:outline-black  hover:outline-offset-2 z-10 `}
          />
        ))}

        <button
          onClick={handleNext}
          className=" rounded-full text-[50px] h-[50px] w-[50px] animate-bounce-right border-2 border-black ml-16"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10t flex items-center -rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ImageCarousel;
