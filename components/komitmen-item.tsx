import React from "react";
import { Button } from "./ui/button";

const KomitmenItem = ({
  number,
  komitmen,
  description,
}: {
  number: number;
  komitmen: string;
  description: string;
}) => {
  return (
    <div className="my-5 flex w-full flex-col justify-between border-b border-input pb-4 lg:flex-row  lg:items-center">
      <div className="flex items-center gap-4">
        <Button variant={"gradient"} className="rounded-xl">
          {number}
        </Button>
        <p className="font-bold">{komitmen}</p>
      </div>
      <div className="ml-[53px] text-sm lg:ml-0 lg:w-5/12">{description}</div>
    </div>
  );
};

export default KomitmenItem;
