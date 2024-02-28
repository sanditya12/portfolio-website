import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <section className={`py-16 text-center ${className}`}>
      <h3>
        Sanditya Sutanto
        <br />
        2023
      </h3>
    </section>
  );
};
export default Footer;
