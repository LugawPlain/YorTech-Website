"use client";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Home: FC = () => {
  const pathname = usePathname();

  return (
    <>
      <main>
        <br />
        <br />
        URL: <b></b>
        <br />
        pathname: <b>{pathname}</b>
      </main>
    </>
  );
};

export default Home;
