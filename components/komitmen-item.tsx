import React from "react";
import { Button } from "./ui/button";

const KomitmenItem = () => {
  return (
    <div className="flex items-start justify-between border-b pb-5">
      <div className="flex items-center gap-4">
        <Button variant={"gradient"} className="rounded-xl">
          1
        </Button>
        <p className="font-bold">Set affiliate di awal 15%</p>
      </div>
      <div className="w-5/12 text-sm">
        Kami menawarkan set affiliate sebesar 15% di awal sebagai insentif bagi
        mitra kami untuk memperluas jaringan dan meningkatkan penjualan.
      </div>
    </div>
  );
};

export default KomitmenItem;
