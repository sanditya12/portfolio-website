import React from "react";

type Props = {
  text: string;
  diameter: number;
  color: string;
  className?: string;
  children?: React.ReactNode;
};

const colorMap: { [key: string]: string } = {
  orange:
    // "bg-orange text-light hover:border-orange hover:bg-light hover:text-orange",
    "bg-light border-orange text-orange hover:bg-orange hover:text-light",
  dark: "border-dark text-dark hover:bg-orange hover:text-light",
};

const CircleButton: React.FC<Props> = ({
  text,
  diameter,
  color,
  className,
}) => {
  return (
    <button
      className={`rounded-full b-md ${colorMap[color]} p-4\ ${className}`}
      style={{ width: diameter, height: diameter }}
    >
      <h4 className={`leading-5`}>{text}</h4>
    </button>
  );
};
export default CircleButton;
