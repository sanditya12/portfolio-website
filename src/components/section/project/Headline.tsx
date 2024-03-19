import React from "react";
import { getTechIcon } from "../../../constants/tech-icons";

type Props = {
  title: string;
  description?: string;
  techs?: string[];
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
        <div className={`grid md:grid-cols-3 px-12 grid-cols-1 space-y-2`}>
          <h3
            className={`col-span-2 text-center md:text-left px-5 animate-text-up`}
          >
            {description}
          </h3>
          <div
            className={`col-span-1 px-5 space-y-4 md:border-l-2 animate-text-up`}
          >
            <div
              className={`flex md:space-x-2 space-y-1 flex-wrap justify-center md:justify-start`}
            >
              {techs?.map((tech) => (
                <img src={getTechIcon(tech)} className={`w-4 md:w-8`} />
              ))}
            </div>
            <div className={`flex flex-col space-y-1 items-start `}>
              {links?.map((link) => (
                <>
                  <a
                    href={`/${link}`}
                    className={`underline text-orange text-xs `}
                  >
                    <h4 className={`text-center md:text-left`}>{link}</h4>
                  </a>
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
