import { Project } from "../interfaces/project.interface";

const DUMMY_PROJECTS: Project[] = [
  {
    slug: "notary-management-system",
    name: "Notary Management System Webapp",
    img: "/images/placeholders/nms-mockup.png",
    bgImg: "/images/placeholders/bg-mockup.png",
    tags: ["React", "Go", "Cloud", "Project Management"],
  },
  {
    slug: "safe-learing-in-autonomous-driving",
    name: "Safe Learning for Autonomous Driving ",
    img: "/images/placeholders/jetbot.png",
    bgImg: "/images/placeholders/track_sample.jpg",
    tags: ["Python", "Machine Learning", "Robotics"],
  },
  {
    slug: "adventure-care",
    name: "Adventure Care Mobile App",
    img: "/images/placeholders/advcare_thumbnail.png",
    bgImg: "/images/placeholders/advcare_protoshot.png",
    tags: ["NestJs", "Project Management", "Mobile App"],
  },
  // {
  //   slug: "pomo-adventure",
  //   name: "Pomo Adventure",
  //   img: "/images/placeholders/nms-mockup.png",
  //   bgImg: "/images/placeholders/bg-mockup.png",
  //   tags: ["Frontend", "Machine Learning", "Cloud", "Backend"],
  // },

  {
    slug: "smart-ambulance",
    name: "Smart Ambulance (Internet of Things)",
    img: "/images/placeholders/ambulancedevice_nobg.png",
    bgImg: "/images/placeholders/smartambulancedashboard.png",
    tags: ["IoT", "React", "NodeJs"],
  },
];

export default DUMMY_PROJECTS;
