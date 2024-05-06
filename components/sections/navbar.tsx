"use client";
import Image from "next/image";
import { ButtonDarkMode } from "../button-darkmode";
import { NAVBAR } from "@/constant";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sling as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScroll, setIsScroll] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });
  return (
    <>
      <motion.nav
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`padding-container fixed top-0 z-20  w-full   pt-4 ${isScroll ? "border-b border-input   bg-gradient-to-t from-transparent to-background  pb-3 backdrop-blur-3xl  transition-all duration-500 ease-in-out" : ""} `}
      >
        <div className="max-container  flex w-full justify-between">
          <Image
            src={"/images/logo.png"}
            height={51.38}
            width={52}
            alt="logo lakudisini"
            className="object-contain "
          />
          <ul className="hidden gap-5 lg:flex ">
            {NAVBAR.map((item, index) => (
              <li
                key={index}
                className="text-sm text-slate-900 transition duration-200 ease-in-out hover:font-medium hover:text-blue-700 dark:text-white dark:hover:text-blue-700"
              >
                <Link href={item.href} className="capitalize">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="  flex items-center gap-5">
            {/* dark theme toggle */}
            <ButtonDarkMode />
            <div
              className={`z-20 rounded-full  text-blue-700 lg:hidden   ${isOpen ? "text-white transition-all duration-200 ease-in-out" : "text-blue-700 transition-all delay-300"}`}
            >
              <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
            </div>
            <Link href={"https://wa.me/6282327307005"} target="_blank">
              <Button variant={"roundy"} className=" hidden lg:block">
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-0 w-full">
          <AnimatePresence mode="wait">
            {isOpen && <MobileNav />}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
