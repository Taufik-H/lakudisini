import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, ShoppingBag } from "lucide-react";
import { BorderAnimate } from "../moving-border";

const Hero = () => {
  return (
    <div className="max-container ">
      <div className=" mt-20 flex h-screen w-full flex-col justify-between gap-20 lg:my-auto lg:mt-0 lg:flex-row  lg:gap-0">
        <div className="padding-container flex w-full flex-col items-center  justify-center gap-2 lg:items-start">
          <div className="mt-10 flex items-center justify-center gap-3 rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700 dark:border-l dark:border-t dark:border-slate-500 dark:bg-blue-100 dark:bg-opacity-20 dark:text-white lg:justify-start">
            <p>Lakudisini yang penting laku</p>
            <ShoppingBag size={20} />
          </div>
          <h1 className="text-center text-5xl font-black leading-snug text-slate-900 dark:text-white lg:text-left lg:text-6xl">
            Omset Terlebih Dahulu, Bayar{" "}
            <span className="bg-gradient-to-tr from-blue-700 to-cyan-200 bg-clip-text text-transparent">
              Kemudian!
            </span>
          </h1>
          {/* tombol */}
          <div className="mt-10 flex items-center gap-3">
            <Button
              size={"lg"}
              className=" bg-blue-700 text-white hover:bg-blue-900"
            >
              Layanan kami
            </Button>
            <Link href={"#"}>
              <Button
                className="border-2 border-slate-900 p-2 dark:border-slate-200 dark:hover:bg-slate-900"
                size={"lg"}
                variant={"outline"}
              >
                <ArrowUpRight />
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-center">
          <Image
            src={"/images/pattern.svg"}
            height={732}
            width={721}
            alt="pattern background"
            className="absolute right-0 top-0   -z-10 dark:opacity-10 "
          />
          <div className="relative">
            <Image
              src={"/images/heroimage.png"}
              height={477}
              width={358}
              alt="hero image"
              className=""
            />
            <Image
              src={"/images/logohero.png"}
              height={150}
              width={150}
              alt="hero image"
              className="animate-spin-slow absolute  left-[120px] top-[-50px] w-28 rounded-full border-8 border-white dark:border-background lg:left-[-70px] lg:top-[50px] lg:w-auto"
            />
            <div className="absolute bottom-[-30px] right-[70px]  lg:right-[-30px]">
              <BorderAnimate
                borderRadius="10px"
                className="border-neutral-200  bg-white text-black shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              >
                <div className="flex   items-center  justify-center gap-3 px-5 py-3  font-semibold capitalize  ">
                  <div className="flex flex-col items-start">
                    Agensi terverifikasi
                    <p className="text-[10px] uppercase tracking-[2px] text-slate-500 ">
                      No. 1 di Indonesia
                    </p>
                  </div>
                  <BadgeCheck className="text-green-600" />
                </div>
                {/* <Card className="flex w-56 justify-center gap-3 overflow-hidden rounded-2xl px-2 py-5 font-semibold capitalize shadow-lg">
                </Card> */}
              </BorderAnimate>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
