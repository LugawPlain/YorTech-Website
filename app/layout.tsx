import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LogoNoBg from "@/components/svgs/Logo-no-bg";
import { FaFacebook,FaGithub,FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "YorTech",
  description: "Your Ideas Our Technology",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  
  return (
    <html lang="en" className="">
      <body
        className={`${inter.className}items-start h-[200vh] bg-white text-black `}
      >
        {children}

        <footer className=" bg-black  min-h-64 text-gray-300 py-4 px-20 flex flex-col justify-center">
         
            <div className="flex flex-col justify-center items-center mb-4"> 
            <LogoNoBg className="scale-150 mb-4" />
              <p>
              Suggestion are appreciated 😊. Email this <a href="#" className="text-blue-300">yortech2024@gmail.com</a>
              </p>
              <p className="text-xs">Copyright <span className="text-cyan-500">© </span> 2024 Yortech</p>
              <p>
              </p>
            </div>
            <div className="flex flex-col items-center">
            <h1 className="text-lg font-medium border-b border-cyan-500 px-8">Contact</h1>
              <div className="flex justify-center items-center my-2 text-2xl gap-4">
              <FaFacebook className="text-cyan-500"/> 
              <FaInstagram/>
              <FaXTwitter className="text-cyan-500"/>
              <FaGithub/>
              <FaLinkedin className="text-cyan-500"/>
              </div>
              <div className="flex items-center">
            <a>Courses</a>&nbsp; | &nbsp;<a>Labs</a>&nbsp; | &nbsp; <a>Snippets</a>&nbsp; | &nbsp; <a>Tags</a>&nbsp; | &nbsp;<a>Contrib</a>&nbsp; | &nbsp;<a>Privacy</a>&nbsp; | &nbsp;<a>Terms</a>   
            </div>
            </div>
        </footer>
      </body>
    </html>
  );
}
