import React, { useState } from "react";
import ProjectCard from "../../card/ProjectCard";
import DUMMY_PROJECTS from "../../../placeholders/project-data";
import { Project } from "../../../interfaces/project.interface";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Projects: React.FC<Props> = ({ className }) => {
  // const comp = useRef(null);
  const [projects] = useState<Project[]>(DUMMY_PROJECTS);

  const nRows = Math.ceil((projects.length + 1) / 3);
  const nPadders = nRows * 3 - (projects.length + 1);
  console.log("nPadders: " + nPadders);
  console.log("nRows: " + nRows);

  return (
    <section className={`${className}`}>
      <div className={`relative`}>
        <div id="grid" className={`grid grid-cols-3`}>
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
                <Link to={`projects/${project.slug}`}>
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
                </Link>
              );
            })}
          {nPadders > 0 &&
            Array.from({ length: nPadders }).map((_, index) => (
              <div className={`min-h-[26.2rem] b-t-md`} key={index} />
            ))}
        </div>
        <div id="line1" className={`absolute top-0  w-full h-0 b-t-md  line`} />
        <div
          id="line2"
          className={`absolute top-0 right-2/3 h-full w-0 b-r-md line`}
        />
        <div
          id="line3"
          className={`absolute top-0 right-1/3 h-full w-0 b-r-md line`}
        />
        <div id="line4" className={`absolute top-1/2 w-2/3 h-0 b-t-md line`} />
        <div
          id="line5"
          className={`absolute top-1/2 right-0 w-2/3 h-0 b-t-md  line`}
        />
      </div>
    </section>
  );
};
export default Projects;
