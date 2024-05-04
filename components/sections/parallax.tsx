"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import useDimention from "@/lib/useDimention";
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];
const Parallax = () => {
  const container = useRef(null);
  const { height } = useDimention();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.8]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 2.4]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.1]);

  return (
    <section className="">
      <div ref={container} className="gallery">
        <Column images={[[images[0]], images[1], images[2]]} y={y} />
        <Column images={[[images[3]], images[4], images[5]]} y={y2} />
        <Column images={[[images[6]], images[7], images[8]]} y={y3} />
        <Column images={[[images[6]], images[7], images[8]]} y={y4} />
      </div>
    </section>
  );
};

export default Parallax;

const Column = ({ images, y = 0 }: { images: any; y?: any }) => {
  return (
    <motion.div style={{ y }} className="column">
      {images.map((src: string, index: number) => {
        return (
          <div key={index} className="imageContainer">
            <Image
              key={index}
              src={`/images/${src}`}
              fill
              alt="image"
              className="object-cover"
            />
          </div>
        );
      })}
    </motion.div>
  );
};
