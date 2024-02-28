import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInitialProjectDetails } from "../constants/initial-project-details";
import { getProjectDetailsById } from "../services/get-project-details-by-id";
import { ProjectDetails } from "../interfaces/project-details.interface";
import Headline from "../components/section/project/Headline";
import Content from "../components/section/project/Content";

function Project() {
  const { projectSlug } = useParams();
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>(
    getInitialProjectDetails()
  );
  useEffect(() => {
    const fetchedProjectDetails = getProjectDetailsById(projectSlug as string);
    setProjectDetails(fetchedProjectDetails);
  }, []);
  return (
    <>
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
    </>
  );
}

export default Project;
