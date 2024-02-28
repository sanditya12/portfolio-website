import { ProjectDetails } from "../interfaces/project-details.interface";
import getProjectDetails from "../placeholders/project-details-data";

export const getProjectDetailsById = (orderId: string): ProjectDetails => {
  const data = getProjectDetails();
  const [projectDetails] = data.filter(
    (projectDetails) => projectDetails.slug === orderId
  );
  return projectDetails;
};
