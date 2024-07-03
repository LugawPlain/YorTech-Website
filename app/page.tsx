import Image from "next/image";
import LogoNoBg from "@/components/Logo-no-bg";
import Link from "next/link";
import ArduinoLogo from "@/components/Arduino-logo";
import HeaderNav from "@/components/HeaderNav";
export default function Home() {
  return (
    <>
      <HeaderNav />
      <div className="h-[calc(100vh-9rem)]">
        <div className="bg-cover bg-no-repeat bg-[url('/Arduino-Background.jpg')] absolute block top-0 w-full -z-10 h-[100vh] text-white"></div>
        <main className="text-white mt-16">
          <section className="flex  flex-wrap w-full ">
            <div className="px-8 flex flex-col mx-auto text-center lg:text-start max-w-[700px]  ">
              <h1 className="text-4xl lg:text-[58px] font-medium leading-normal ">
                Cutting-Edge Technical Solutions
                <div className=" bg-clip-text bg-gradient-to-b from-sky-200 to-sky-500 text-transparent">
                  in Coding, Circuitry, and 3D Design
                </div>
              </h1>
              <p className="mt-4  text-2xl font-mono">
                Need help with your Projects?
              </p>
              <button className="mx-auto relative lg:mx-0 mt-4 bg-sky-600 font-semibold inline-flex max-w-fit py-2 px-8 text-lg rounded-full hover:bg-sky-500">
                {/* <div className="absolute top-0 left-0 w-[50%] h-[110%] bg-white rounded-full "></div> */}
                Click Here &gt;&gt;
              </button>
            </div>
            <div className=" relative w-fit max-h-[187px] mx-auto mt-12  ">
              <div className="max-h-[187px] h-[187px] max-w-[420px] w-[420px]"></div>
              <div className="absolute top-0 brightness-75 rounded-md">
                <img className="max-w-full rounded-md" src="Lcd2.png"></img>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[32px]">
                <img
                  className="max-w-full w-[355px] rounded-md"
                  src="https://tinygif.com/images/2024/06/23/NAhHL.gif"
                  alt="Welcome to Yortech"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="bg-cover w-full h-[800px] bg-white">
        <h1 className="text-[48px]  font-meduim mx-auto text-center py-8">
          Micro-Controllers
        </h1>
        <p></p>
        {/* arduinocard */}
        <div className="flex justify-center gap-20 items-center h-[610px]">
          <button className="rounded-full text-[50px] h-[50px] w-[50px] animate-bounce-left border-2 border-black">
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
          <div>
            <div className="flex absolute justify-center gap-20 shadow-xl p-20 rounded-lg border translate-x-32 scale-90 z-0">
              <div className="flex w-64 flex-col items-center ">
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
                <div className="h-16 flex justify-center items-center py-12">
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
                <div className="h-16 flex justify-center items-center py-12">
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
                <div className="h-16 flex justify-center items-center py-12">
                  <button className="bg-gradient-to-b from-green-100 via-red-500  to-red-700 py-2 px-8 rounded-2xl text-white text-xl font-semibold">
                    Learn More &gt;&gt;
                  </button>
                </div>
              </div>
            </div>

            <div className="flex relative justify-center gap-20 shadow-xl p-20 rounded-lg border z-10">
              <div className="flex w-64 flex-col items-center ">
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
                <div className="h-16 flex justify-center items-center py-12">
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
                <div className="h-16 flex justify-center items-center py-12">
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
                <div className="h-16 flex justify-center items-center py-12">
                  <button className="bg-gradient-to-b from-green-100 via-red-500  to-red-700 py-2 px-8 rounded-2xl text-white text-xl font-semibold">
                    Learn More &gt;&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="rounded-full text-[50px] h-[50px] w-[50px] animate-bounce-right border-2 border-black ">
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
        <div className="h-4 flex justify-center relative">
          <div className="gap-4 flex absolute -top-12 w-fit h-4 ">
            <button className="bg-gray-200 border outline-slate-300 hover:outline w-4 rounded-full"></button>
            <button className="bg-gray-200 border outline-slate-300 hover:outline w-4 rounded-full"></button>
            <button className="bg-gray-200 border outline-slate-300 hover:outline w-4 rounded-full"></button>
          </div>
        </div>
      </div>
      {/* <div className="h-[800px] bg-gray-400"></div> */}
    </>
  );
}
