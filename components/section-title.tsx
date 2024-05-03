import React from "react";

type SectionTitleProps = {
  title: string;

  gradientText?: string;
};
const SectionTitle = ({ title, gradientText }: SectionTitleProps) => {
  return (
    <h2 className=" text-center text-3xl font-black capitalize lg:text-left lg:text-[48px]">
      {title}
      <span className="bg-gradient-to-tr from-blue-700 to-cyan-300 bg-clip-text text-transparent">
        {gradientText}
      </span>
    </h2>
  );
};

export default SectionTitle;
