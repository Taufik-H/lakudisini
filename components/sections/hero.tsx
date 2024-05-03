import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, ShoppingBag } from "lucide-react";
import { BorderAnimate } from "../moving-border";

const Hero = () => {
  return (
    <div className="max-container ">
      <div className="my-auto flex h-screen w-full  justify-between">
        <div className="padding-container flex w-full flex-col items-start justify-center gap-2">
          <div className="mt-10 flex items-center gap-3 rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700 dark:border-l dark:border-t dark:border-slate-500 dark:bg-blue-100 dark:bg-opacity-20 dark:text-white">
            <p>Lakudisini yang penting laku</p>
            {/* <Image src={"/images/Bag.svg"} height={25} width={25} alt="bag" /> */}
            <ShoppingBag size={20} />
          </div>
          <h1 className="text-6xl font-black leading-normal text-slate-900 dark:text-white">
            Omset Terlebih Dahulu, Bayar{" "}
            <span className="bg-gradient-to-tr from-blue-700 to-cyan-200 bg-clip-text text-transparent">
              Kemudian!
            </span>
          </h1>
          {/* tombol */}
          <div className="mt-10 flex items-center gap-3">
            <Button size={"lg"} className="bg-blue-700 text-white">
              Layanan kami
            </Button>
            <Link href={"#"}>
              <Button
                className="border-2 border-slate-900 p-2 dark:border-slate-200"
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
              className="animate-spin-slow absolute left-[-70px] top-[50px] rounded-full border-8 border-white dark:border-background"
            />
            <div className="absolute bottom-[-30px] right-[-30px]">
              <BorderAnimate
                borderRadius="10px"
                className="border-neutral-200 bg-white text-black shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:text-white"
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
