import Image from "next/image";
import Link from "next/link";
import HeaderNav from "@/components/HeaderNav";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
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

      <div
        className="h-[700px] w-full isolate relative pt-4
      before:inset-0  before:absolute before:opacity-90 before:white "
      >
        {/* microcontroller card */}
        <ImageCarousel />
      </div>
    </>
  );
}
