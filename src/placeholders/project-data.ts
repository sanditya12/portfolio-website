interface Project {
  name: string;
  img: string;
  tags: string[];
  bgImg: string;
  techs?: string[];
  desc?: string;
}

const DUMMY_PROJECTS: Project[] = [
  {
    name: "Notariat Management System Webapp",
    img: "/images/placeholders/nms-mockup.png",
    bgImg: "/images/placeholders/bg-mockup.png",
    tags: ["Frontend", "Machine Learning", "Cloud"],
  },
  {
    name: "Notariat Management System Webapp",
    img: "/images/placeholders/nms-mockup.png",
    bgImg: "/images/placeholders/bg-mockup.png",
    tags: ["Frontend"],
  },
  {
    name: "Notariat Management System Webapp",
    img: "/images/placeholders/nms-mockup.png",
    bgImg: "/images/placeholders/bg-mockup.png",
    tags: ["Frontend", "Machine Learning", "Cloud", "Backend"],
  },
  {
    name: "Notariat Management System Webapp",
    img: "/images/placeholders/nms-mockup.png",
    bgImg: "/images/placeholders/bg-mockup.png",
    tags: ["Frontend", "Machine Learning", "Cloud", "Backend"],
  },
  {
    name: "Notariat Management System Webapp",
    img: "/images/placeholders/nms-mockup.png",
    bgImg: "/images/placeholders/bg-mockup.png",
    tags: ["Frontend", "Machine Learning", "Cloud"],
  },
  {
    name: "Notariat Management System Webapp",
    img: "/images/placeholders/nms-mockup.png",
    bgImg: "/images/placeholders/bg-mockup.png",
    tags: ["Frontend"],
  },
  // {
  //   name: "Notariat Management System Webapp",
  //   img: "/images/placeholders/nms-mockup.png",
  //   bgImg: "/images/placeholders/bg-mockup.png",
  //   tags: ["Frontend"],
  // },
  // {
  //   name: "Notariat Management System Webapp",
  //   img: "/images/placeholders/nms-mockup.png",
  //   bgImg: "/images/placeholders/bg-mockup.png",
  //   tags: ["Frontend"],
  // },
];

export default DUMMY_PROJECTS;
