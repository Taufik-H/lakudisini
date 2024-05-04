import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CardServicesProps = {
  title: string;
  description: string;
  icon: React.ReactElement;
  isCenter?: boolean | false;
};

const CardServices = ({
  title,
  description,
  icon,
  isCenter,
}: CardServicesProps) => {
  return (
    <Card
      className={`${isCenter ? "from-[#0F2972] to-[#1D4ED8] md:bg-gradient-to-tr" : " from-[#0F2972] to-[#1D4ED8] hover:bg-gradient-to-tr"} group flex min-h-[499px] min-w-[387px] cursor-pointer items-center rounded-3xl border border-slate-300 p-10 shadow transition-all  duration-300 ease-in-out dark:border-slate-800  `}
    >
      <div className="mt-20  flex flex-col items-center justify-start   ">
        <div
          className={`flex h-[138px] w-[138px] items-center justify-center rounded-full bg-blue-700 text-white transition-all duration-300 ease-in-out   ${isCenter ? "md:bg-blue-100 md:text-blue-700" : "group-hover:bg-blue-100 group-hover:text-blue-700"}`}
        >
          {icon}
        </div>
        <div
          className={`${isCenter ? "md:text-white" : "group-hover:text-white"} mt-32 transition-all duration-300 ease-in-out`}
        >
          <div className="flex justify-center gap-3">
            <h3 className="text-lg font-bold capitalize">{title}</h3>
            <Image
              src={"/images/verified.svg"}
              height={20}
              width={20}
              alt="lakudisini verified"
            />
          </div>
          <p className="text-center text-sm">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default CardServices;
