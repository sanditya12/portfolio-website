import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInitialProjectDetails } from "../constants/initial-project-details";
import { getProjectDetailsById } from "../services/get-project-details-by-id";
import { ProjectDetails } from "../interfaces/project-details.interface";

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
    <div>
      <h1>{projectDetails.title}</h1>
    </div>
  );
}

export default Project;
