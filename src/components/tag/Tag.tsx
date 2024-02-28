import React from "react";

type Props = {
  text: string;
  className?: string;
  children?: React.ReactNode;
};

const Tag: React.FC<Props> = ({ text, className }) => {
  const fontSizeClass =
    text.length < 9 ? "text-xs" : "text-[9px] leading-[9px]";
  // w-[4.5rem] h-7
  return (
    <div
      className={`rounded-md px-2 py-[0.15rem] flex justify-center items-center b-sm border-grey text-grey text-center ${className}`}
    >
      <h5 className={` ${fontSizeClass}`}>{text}</h5>
    </div>
  );
};
export default Tag;
