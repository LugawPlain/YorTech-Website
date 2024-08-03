import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LogoNoBg from "@/components/svgs/Logo-no-bg";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ThemeProvider } from "@/components/theme-provider";
import { DarkToggle } from "@/components/DarkToggle";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "YorTech",
  description: "Your Ideas Our Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} min-h-[100vh] relative bg-primary text-secondary  flex flex-col justify-center  `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <footer className=" bg-black  min-h-64 text-gray-300 pb-4 relative px-48 flex flex-col justify-center mt-auto">
          <div className="flex flex-col justify-center items-center my-4">
            <LogoNoBg className="scale-150 mb-4" />

            <div className=" border-y-2 py-4 border-gray-800 text-center">
              <p>
                Suggestion are appreciated 😊. Email this{" "}
                <a href="#" className="text-blue-300">
                  yortech2024@gmail.com
                </a>
              </p>
              <p className="text-xs">
                Copyright <span className="text-cyan-500">© </span> 2024 Yortech
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-medium border-b border-cyan-500 px-8">
              Contact
            </h1>
            <div className="flex justify-center items-center my-2 text-2xl">
              <FaFacebook className="text-cyan-500" />
              &nbsp; | &nbsp;
              <FaInstagram />
              &nbsp; | &nbsp;
              <FaXTwitter className="text-cyan-500" />
              &nbsp; | &nbsp;
              <FaGithub />
              &nbsp; | &nbsp;
              <FaLinkedin className="text-cyan-500" />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
