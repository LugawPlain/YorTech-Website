import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
    <html lang="en" className="">
      <body
        className={`${inter.className}items-start h-[200vh] bg-white text-black `}
      >
        {children}

        <footer className=" bg-black  min-h-64"></footer>
      </body>
    </html>
  );
}
