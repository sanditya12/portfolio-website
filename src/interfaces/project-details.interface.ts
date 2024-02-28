export interface ProjectDetails {
  slug: string;
  title: string;
  description?: string;
  links?: string[];
  mainImg: string;
  contents?: Content[];
  techs?: Tech[];
}

export interface Content {
  heading: string;
  body: string;
  img?: string;
}

export interface Tech {
  name: string;
  icon: string;
}
