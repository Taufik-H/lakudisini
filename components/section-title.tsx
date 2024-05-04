import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};
const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2
      className={`text-center text-3xl font-black capitalize lg:text-left lg:text-[48px] ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
