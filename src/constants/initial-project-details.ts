import { ProjectDetails } from "../interfaces/project-details.interface";

export const getInitialProjectDetails = (): ProjectDetails => ({
  slug: "",
  title: "",
  description: "",
  mainImg: "",
  links: [],
  content: [],
  techs: [],
});
