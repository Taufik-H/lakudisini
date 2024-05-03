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
      <div className={cn(unbounded.className, `my-20 bg-blue-700 py-10`)}>
        <Marquee autoFill={true}>
          <MarqueeItem />
        </Marquee>
      </div>
    </>
  );
};

export default Marque;
