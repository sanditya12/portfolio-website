import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Comp: React.FC<Props> = ({ className }) => {
  return <div className={`${className}`}></div>;
};
export default Comp;
