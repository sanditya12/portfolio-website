import React from "react";
import Tag from "../tag/Tag";

type Props = {
  heading: string;
  img: string;
  bgImg: string;
  tags: string[];
  className?: string;
  children?: React.ReactNode;
};

const ProjectCard: React.FC<Props> = ({
  heading,
  img,
  bgImg,
  tags,
  className,
}) => {
  return (
    <div
      className={`relative group border-dark h-[26.2rem] p-4 overflow-hidden duration-75 hover:border-t-orange hover:border-t-4  ${className}`}
    >
      <img
        className={`bg-img opacity-0 group-hover:opacity-100 project-transition`}
        src={bgImg}
      />

      <div
        className={`absolute inset-0 group-hover:opacity-90 bg-gradient-to-b from-dark to-transparent opacity-0 project-transition z-10`}
      ></div>
      <div className={`relative h-full z-20`}>
        <div className={`space-y-2`}>
          <h2 className={`group-hover:text-light transition-colors duration-0`}>
            {heading}
          </h2>
          <div className={`flex space-x-1 transition-colors duration-0`}>
            {tags &&
              tags.map((tag, index) => (
                <Tag
                  text={tag}
                  key={index}
                  className={`group-hover:text-light group-hover:border-light`}
                />
              ))}
          </div>
        </div>
        <img
          className={`absolute -bottom-0 -right-0 w-5/6 h-1/2 object-contain grayscale group-hover:grayscale-0 duration-500 z-0`}
          src={img}
        />
      </div>
    </div>
  );
};
export default ProjectCard;
