import { NAVBAR } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";
import { Map } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="max-container flex-col bg-blue-700 py-10">
      <div className="padding-container flex w-full flex-col justify-center gap-7 lg:flex-row lg:justify-between ">
        <div className="mx-auto flex flex-col gap-3 lg:mx-0">
          <div className="flex flex-col items-center gap-5  lg:flex-row">
            <Image
              src={"/images/logomarque.png"}
              width={50}
              height={50}
              alt="lakudisini"
            />
            <div>
              <p className="text-3xl font-bold">lakudisini</p>
              <p className="text-xs tracking-[2px]">yang penting laku</p>
            </div>
          </div>
        </div>
        <div className="mx-auto px-5 lg:px-0">
          <div className="lg:text-md flex w-full flex-wrap justify-center gap-7  text-sm font-semibold lg:flex-nowrap">
            {NAVBAR.map((item, index) => (
              <Link href={item.href} key={index}>
                {item.name}
              </Link>
            ))}
          </div>
          <Card className=" mt-3  flex flex-col justify-center gap-3 border-t border-none bg-transparent lg:flex-row lg:justify-end">
            <Map />
            <p className="text-center text-sm lg:text-left">
              Perum permata karsen kaf 36 Karang sentul 5/1 Padamara 53372
              Purbalingga
            </p>
          </Card>
        </div>
      </div>
      <div className="padding-container   mt-3 w-full border-t border-blue-500 pt-3 text-center lg:text-right">
        <p>&#169; 2024 lakudisini all right reserve</p>
      </div>
    </footer>
  );
};

export default Footer;
