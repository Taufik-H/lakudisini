import React from "react";
import Marquee from "react-fast-marquee";
import { Unbounded } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import MarqueeItem from "../marqueitem";

const unbounded = Unbounded({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const Marque = () => {
  return (
    <>
      <div
        className={cn(
          unbounded.className,
          `max-container my-20 mt-32 bg-blue-700 py-10 lg:mt-0`,
        )}
      >
        <Marquee autoFill={true}>
          <MarqueeItem />
        </Marquee>
      </div>
    </>
  );
};

export default Marque;
