"use client";
import React from "react";
import { motion } from "framer-motion";
import { menuSlide, slide } from "@/constant/anim";
import { NAVBAR_MOBIE } from "@/constant";
import Link from "next/link";
import Curve from "../curve";
const MobileNav = () => {
  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className=" float-end  flex h-screen w-1/2 flex-col items-start gap-5 bg-blue-700 p-5 pt-20"
    >
      <Curve />
      <p className="w-full border-b-2 border-blue-100 text-[10px] font-bold uppercase leading-[20px] text-white ">
        navigasi
      </p>
      {NAVBAR_MOBIE.map((item, index) => (
        <motion.div
          custom={index}
          variants={slide}
          animate="enter"
          exit={"exit"}
          initial="initial"
          key={index}
          className="text-xl font-bold text-white transition duration-200 ease-in-out hover:font-medium  dark:text-white dark:hover:text-blue-700"
        >
          <Link href={item.href} className="flex items-center gap-3 capitalize">
            {item.name}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MobileNav;
