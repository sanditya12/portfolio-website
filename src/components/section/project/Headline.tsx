import React from "react";
import { Tech } from "../../../interfaces/project-details.interface";

type Props = {
  title: string;
  description?: string;
  techs?: Tech[];
  links?: string[];
  mainImg: string;
  className?: string;
  children?: React.ReactNode;
};

const Headline: React.FC<Props> = ({
  title,
  description,
  techs,
  links,
  mainImg,
  className,
}) => {
  return (
    <section className={`${className} `}>
      <div className={`pt-24 pb-14 space-y-16`}>
        <h1 className={`text-center animate-text-up`}>{title}</h1>
        <div className={`grid grid-cols-3 px-12`}>
          <h3 className={`col-span-2 px-5 animate-text-up`}>{description}</h3>
          <div
            className={`col-span-1 px-5 space-y-4 border-l-2 animate-text-up`}
          >
            <div className={`flex`}>
              {techs?.map((tech) => (
                <img src={tech.icon} className={`w-6`} />
              ))}
            </div>
            <div className={``}>
              {links?.map((link) => (
                <>
                  <a href={`/${link}`} className={`underline`}>
                    {link}
                  </a>
                  <br />
                </>
              ))}
            </div>
          </div>
        </div>
        <img src={mainImg} className={`animate-text-up w-full`} />
      </div>
    </section>
  );
};
export default Headline;
