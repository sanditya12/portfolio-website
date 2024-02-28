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
      className={`relative group border-dark min-h-[26.2rem] p-4 overflow-hidden duration-75 hover:border-t-orange hover:border-t-4  ${className}`}
    >
      <img
        className={`bg-img opacity-0 group-hover:opacity-100 project-transition`}
        src={bgImg}
      />

      <div className="absolute inset-0 group-hover:opacity-90 bg-dark opacity-0 project-transition"></div>
      <div className={`relative h-full`}>
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
          className={`absolute -bottom-0 -right-0 w-5/6 grayscale group-hover:grayscale-0`}
          src={img}
        />
      </div>
    </div>
  );
};
export default ProjectCard;
