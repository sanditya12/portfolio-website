export interface ProjectDetails {
  slug: string;
  title: string;
  description?: string;
  links?: string[];
  mainImg: string;
  content?: Content[];
  techs?: Tech[];
}

interface Content {
  heading: string;
  body: string;
  img?: string;
}

interface Tech {
  name: string;
  icon: string;
}
