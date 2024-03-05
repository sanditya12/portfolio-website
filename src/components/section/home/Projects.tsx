import React, { useLayoutEffect, useRef, useState } from "react";
import ProjectCard from "../../card/ProjectCard";
import DUMMY_PROJECTS from "../../../placeholders/project-data";
import { Project } from "../../../interfaces/project.interface";
import { Link } from "react-router-dom";
import gsap from "gsap";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Projects: React.FC<Props> = ({ className }) => {
  const comp = useRef(null);
  const [projects, setProjects] = useState<Project[]>(DUMMY_PROJECTS);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#line1", {
        scaleX: 0,
        duration: 1.2,
        transformOrigin: "50% 50%",
        ease: "power4.inOut",
      })
        .from(
          ["#line2", "#line3"],
          {
            scaleY: 0,
            duration: 1.2,
            transformOrigin: "50% 0%",
            ease: "power4.inOut",
            // delay: -0.8,
          },
          "<0.3"
        )
        .from(
          "#grid",
          {
            opacity: 0,
            duration: 0.5,
            delay: 0,
          },
          "<0.8"
        );
    }, comp);

    return () => ctx.revert();
  });

  const nRows = Math.ceil((projects.length + 1) / 3);
  const nPadders = nRows * 3 - (projects.length + 1);
  console.log("nPadders: " + nPadders);
  console.log("nRows: " + nRows);

  return (
    <section className={`${className}`} ref={comp}>
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
        <div id="line1" className={`absolute top-0  w-full h-12 b-t-md `}></div>
        <div
          id="line2"
          className={`absolute top-0 right-2/3 h-2/3 w-0 b-r-md`}
        ></div>
        <div
          id="line3"
          className={`absolute top-0 right-1/3 h-2/3 w-0 b-r-md`}
        ></div>
      </div>
    </section>
  );
};
export default Projects;
