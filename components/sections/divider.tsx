import { ChevronDown } from "lucide-react";

import React from "react";

const Divider = () => {
  return (
    <div className="max-container padding-container my-20  items-center justify-center gap-3">
      <div className="w-full bg-slate-300 p-[1px] dark:bg-blue-700"></div>
      <div className="flex items-center justify-center rounded-full border border-input bg-white  p-1 shadow-lg  dark:bg-blue-700 ">
        <ChevronDown className="text-blue-700 dark:text-white" />
      </div>
      <div className="w-full bg-slate-300 p-[1px] dark:bg-blue-700"></div>
    </div>
  );
};

export default Divider;
