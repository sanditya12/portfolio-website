import React, { useState } from "react";
import ProjectCard from "../card/ProjectCard";
import DUMMY_PROJECTS from "../../placeholders/project-data";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

interface Project {
  name: string;
  img: string;
  bgImg: string;
  tags: string[];
  techs?: string[];
  desc?: string;
}

const Projects: React.FC<Props> = ({ className }) => {
  const [projects, setProjects] = useState<Project[]>(DUMMY_PROJECTS);
  const nRows = Math.ceil((projects.length + 1) / 3);
  const nPadders = nRows * 3 - (projects.length + 1);
  console.log("nPadders: " + nPadders);
  console.log("nRows: " + nRows);

  return (
    <section className={`${className}`}>
      <div className={`grid grid-cols-3 w-4/5 `}>
        <div
          className={`b-project border-dark min-h-[25rem] p-4 ${
            nRows > 1 ? "border-b-0" : null
          }`}
        >
          <h2 className={`text-3xl font-normal`}>MY PROJECTS→</h2>
        </div>
        {projects &&
          projects.map((project, index) => {
            const realIndex = index + 1 + 1;
            const isThirdCol = realIndex % 3 === 0;
            // const isNotFirstRow = realIndex > 3;
            const isLastRow = Math.ceil(realIndex / 3) === nRows;
            return (
              <ProjectCard
                heading={project.name}
                img={project.img}
                tags={project.tags}
                bgImg={project.bgImg}
                className={`b-project ${isThirdCol ? "border-r-0" : null} ${
                  isLastRow ? "b-b-md" : null
                }
                  `}
                key={realIndex}
              />
            );
          })}
        {nPadders > 0 &&
          Array.from({ length: nPadders }).map((_, index) => (
            <div className={`min-h-[26.2rem] b-t-md`} key={index} />
          ))}
        {/* 
        <div className={`b-y-md border-dark min-h-[25rem]`}></div>
        <div className={`b-b-md border-dark min-h-[25rem]`}></div>
        <div className={`b-no-t-md border-dark min-h-[25rem]`}></div> */}
      </div>
    </section>
  );
};
export default Projects;
