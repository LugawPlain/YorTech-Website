import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LogoNoBg from "@/components/svgs/Logo-no-bg";
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

        <footer className=" bg-black  min-h-64 text-gray-300 py-4 px-20 flex justify-between">
         
            <div className="flex flex-col"> 
            <LogoNoBg className="" />
   
              <p>
              Suggestion are appreciated <a href="#" className="text-blue-300">troysarinas22@gmail.com</a>
              </p>
              <p className="text-xs">Copyright ©  2024 Yortech</p>
              <p>

              </p>
            </div>
            <div className="flex flex-col items-center">
            <h1 className="text-lg font-medium">Contact</h1>
              <div className="flex justify-center items-center my-2">
             
              </div>
            </div>
            <div className="flex flex-col"></div>
            <div className="flex flex-col"></div>
      
        
      
   
        </footer>
      </body>
    </html>
  );
}
