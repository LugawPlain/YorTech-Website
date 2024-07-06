"use client";
import Card from "./Cards/MicrocontrollerCard";
import React, { useState } from "react";
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
      <div className="flex w-10/12 mx-auto relative h-5/6 justify-center">
        <div
          className={`card-${array[0]} bg-white mx-auto rounded-2xl border border-t-2 shadow-2xl drop-shadow-2xl mb-4 transition-all duration-300 px-4 `}
        >
          <h1 className="text-[48px] font-meduim mx-auto text-center py-4">
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
                <h3 className="py-4 pt-8 text-center text-xl font-medium">
                  Controlling components using a simple arduino board
                </h3>
              </div>
              <div className="h-16 flex justify-center items-center py-12 text-nowrap">
                <button className="bg-gradient-to-b from-[#006d70] to-[#184143] py-2 px-8 rounded-2xl text-white text-xl font-semibold">
                  Learn More &gt;&gt;
                </button>
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
                  <img
                    className="hover:scale-125 transition-all ease-in-out duration-300 "
                    src="./Esp32-Logo.png"
                    width={"80px"}
                    height={"80px"}
                  ></img>
                </a>
              </div>
              <div className="bg-black w-full h-12 flex items-center justify-center rounded-md">
                <h2 className="text-center text-3xl font-medium text-gray-200 my-auto">
                  Esp32
                </h2>
              </div>
              <div className="h-36">
                <h3 className="py-4 pt-8 text-center text-xl font-medium">
                  Built-In Wi-fi And Bluetooth For Internet of Things
                  integration
                </h3>
              </div>
              <div className="h-16 flex justify-center items-center py-12 text-nowrap">
                <button className="bg-gradient-to-b from-gray-600 to-gray-950 py-2 px-8 rounded-2xl text-white text-xl font-semibold">
                  Learn More &gt;&gt;
                </button>
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
              <div className="h-16 flex justify-center items-center py-12 text-nowrap ">
                <button className="bg-gradient-to-b from-green-100 via-red-500  to-red-700 py-2 px-8 rounded-2xl text-white text-xl font-semibold">
                  Learn More &gt;&gt;
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`card-${array[1]} bg-green-500 mx-auto rounded-2xl border border-t-2 shadow-2xl drop-shadow-2xl mb-4 transition-all duration-300 px-4 `}
        >
          <h1 className="text-[48px] font-meduim mx-auto text-center py-4">
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
                <h3 className="py-4 pt-8 text-center text-xl font-medium">
                  Controlling components using a simple arduino board
                </h3>
              </div>
              <div className="h-16 flex justify-center items-center py-12 text-nowrap">
                <button className="bg-gradient-to-b from-[#006d70] to-[#184143] py-2 px-8 rounded-2xl text-white text-xl font-semibold">
                  Learn More &gt;&gt;
                </button>
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
                  <img
                    className="hover:scale-125 transition-all ease-in-out duration-300 "
                    src="./Esp32-Logo.png"
                    width={"80px"}
                    height={"80px"}
                  ></img>
                </a>
              </div>
              <div className="bg-black w-full h-12 flex items-center justify-center rounded-md">
                <h2 className="text-center text-3xl font-medium text-gray-200 my-auto">
                  Esp32
                </h2>
              </div>
              <div className="h-36">
                <h3 className="py-4 pt-8 text-center text-xl font-medium">
                  Built-In Wi-fi And Bluetooth For Internet of Things
                  integration
                </h3>
              </div>
              <div className="h-16 flex justify-center items-center py-12 text-nowrap">
                <button className="bg-gradient-to-b from-gray-600 to-gray-950 py-2 px-8 rounded-2xl text-white text-xl font-semibold">
                  Learn More &gt;&gt;
                </button>
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
              <div className="h-16 flex justify-center items-center py-12 text-nowrap ">
                <button className="bg-gradient-to-b from-green-100 via-red-500  to-red-700 py-2 px-8 rounded-2xl text-white text-xl font-semibold">
                  Learn More &gt;&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
        <Card className={`bg-red-500 card-${array[2]}`} />
        <Card className={`bg-violet-500 card-${array[3]}`} />
        <Card className={`bg-blue-500 card-${array[4]}`} />
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
            } w-3 h-3 rounded-full hover:outline`}
          />
        ))}

        <button
          onClick={handleNext}
          className="rounded-full text-[50px] h-[50px] w-[50px] animate-bounce-right border-2 border-black ml-16"
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
