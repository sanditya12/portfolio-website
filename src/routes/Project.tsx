import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getInitialProjectDetails } from "../constants/initial-project-details";
import { getProjectDetailsById } from "../services/get-project-details-by-id";
import { ProjectDetails } from "../interfaces/project-details.interface";
import Headline from "../components/section/project/Headline";
import Content from "../components/section/project/Content";
import gsap from "gsap";

function Project() {
  const { projectSlug } = useParams();
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>(
    getInitialProjectDetails()
  );
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(".animate-text-up", {
        opacity: 0,
        y: "+=30",
        stagger: 0.3,
        delay: 0.2,
        ease: "expoScale(0.5,7,none)",
      });

      gsap.from(".animate-content", {
        scrollTrigger: {
          trigger: "animate-content",
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: "+=30",
        stagger: 0.3,
        delay: 0.2,
        ease: "expoScale(0.5,7,none)",
      });
    }, comp);
    return () => ctx.revert();
  }, []);
  useEffect(() => {
    const fetchedProjectDetails = getProjectDetailsById(projectSlug as string);
    setProjectDetails(fetchedProjectDetails);
  }, []);
  return (
    <div ref={comp}>
      <Headline
        title={projectDetails.title}
        description={projectDetails.description}
        techs={projectDetails.techs}
        links={projectDetails.links}
        mainImg={projectDetails.mainImg}
      />
      {projectDetails.contents?.map((content) => (
        <Content
          heading={content.heading}
          body={content.body}
          img={content.img}
        />
      ))}
    </div>
  );
}

export default Project;
