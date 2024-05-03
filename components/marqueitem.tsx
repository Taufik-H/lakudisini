import Image from "next/image";
import React from "react";

const MarqueeItem = () => {
  return (
    <div>
      <div className="flex w-full items-center justify-between gap-5 px-10 text-3xl font-black uppercase ">
        <Image
          src={"/images/logomarque.png"}
          width={40}
          height={40}
          alt="logo"
          objectFit="contain"
          className=" object-contain "
        />
        <p>lakudisini</p>
      </div>
    </div>
  );
};

export default MarqueeItem;
