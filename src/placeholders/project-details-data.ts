import { ProjectDetails } from "../interfaces/project-details.interface";

const getProjectDetails = (): ProjectDetails[] => [
  {
    slug: "notary-management-system",
    title: "Notary Management System Webapp",
    description:
      "Developed a web app to digitize the entire notary office’s workflow. Allowing notaries to monitor employees progress, generate automatic monthly reports, perform instant tax calculations, and securely archive all essential documents in the cloud.",
    mainImg: "/images/content-img/notive_data-order.jpg",
    links: [],
    contents: [
      {
        heading: "Features",
        body: "The features are derived based on the actual notary’s workflow, as shown on the illustration below.",
        img: "/images/content-img/NotiveCoreFeatures.png",
      },
      {
        heading: "Progress Tracking Showcase",
        body: "Progress Tracking allows a notary to monitor an order’s progress and see its detailed view and saved documents through the app.",
        img: "/images/content-img/notive_order-track.jpg",
      },
      {
        heading: "Cloud Archives Showcase",
        body: "Utilizing Google Cloud Platform to securely archive all essential documents in the cloud.",
        img: "/images/content-img/showcase_cloud.png",
      },
      {
        heading: "Transaction Calculations and PDF Generation Showcase",
        body: "Creating the details for transactions cannot be easier with the automatic tax calculation and users can directly get a generated PDF file for it.",
        img: "/images/content-img/showcase_data-transaksi.png",
      },
      {
        heading: "Technology",
        body: "The website is developed using React with the use of Redux for global state management.\nFor the API, the Go programming language is used. The database uses PostgreSQL and the app is deployed using GCP.",
        // img: "/images/content-img/notive_data-order.jpg",
      },
      {
        heading: "My Role",
        body: "The project was a collaboration with other developers. I am responsible mainly in the frontend development as well as converting business requirements into technical requirements for the other developers.\nAdditionally, I also helped in the backend development to enhance development speed.",
        // img: "/images/placeholders/page-image.png",
      },
    ],
    techs: ["typescript", "react", "redux", "go", "postgresql", "gcp"],
  },
  {
    slug: "adventure-care",
    title: "Adventure Care Mobile App",
    description:
      "An application intended for helping children with type 1 diabetes to build healthy habits with daily reminders and gamified rewards systems.",
    mainImg: "/images/content-img/thumbnail_advcare.png",
    links: [
      "instagram.com/adventurecare.id/",
      "https://landing-page-adventurecare.vercel.app/",
    ],
    contents: [
      {
        heading: "Background",
        body: "The idea of Adventure Care started as a way to help young type 1 diabetes patients. The application aims to help young type 1 diabetes patients by promoting healthy habits as well as providing education in a fun way through gamification.",
        img: "/images/content-img/advcare_background.png",
      },
      {
        heading: "Design Prototype",
        body: "One of my responsibilities is to transform the rough initial idea into concrete features. I designed the application interface using figma based on these features. These features include: Gamification incentive using in-game cosmetics and gacha system, healthy habits program subscription, reminders and task completion, as well as education slides related to type 1 diabetes and healthy lifestyle.",
        img: "/images/placeholders/advcare_protoshot.png",
      },
      {
        heading: "Showcase",
        body: "The mobile application is developed using Flutter and is tested using an android phone.",
        img: "/images/content-img/android_showcase.png",
      },
      {
        heading: "API Development",
        body: "My main responsibility in this project is to develop the API or the backend for the application. I used nest.js, a typescript based framework, to develop the API and created the documentation for it.",
        img: "/images/content-img/swagger.jpg",
      },
      {
        heading: "Landing Page",
        body: "To act as the main profile for the project, I developed a landing page as the profile of the organization.\nThe landing page is developed using typescript and tailwind css library.",
        img: "/images/content-img/landingpage_shot.jpg",
      },
    ],
    techs: [
      "nest",
      "flutter",
      "node",
      "html",
      "tailwind",
      "postgresql",
      "figma",
    ],
  },
  {
    slug: "safe-learing-in-autonomous-driving",
    title: "Safe Learning in Autonomous Driving",
    description:
      "Applying safe reinforcement learning which enables autonomous vehicles to learn without crashing during training. The project was part of my bachelor thesis in Universität Duisburg-Essen, Germany.",
    mainImg: "/images/content-img/thumbnail_saferl.png",
    links: [""],
    contents: [
      {
        heading: "Background",
        body: "Conventional reinforcement learning trains robots by learning through both positive and negative experiences. For autonomous vehicles this can lead to crashing during training. Thus, limiting reinforcement learning in simulation environments only.\nThis project allows reinforcement learning to be conducted in real environments. A safety filter is developed using Model Predictive Control principles to ensure the safety of the vehicle during training.",
        img: "/images/content-img/saferl_formula.jpg",
      },
      {
        heading: "Showcase",
        body: "The mathematical optimization for the model predictive controller is done with the help of the CasADi library using Python. The reinforcement learning is done using Stable Baselines 3 library using Python. The whole project is simulated using the NVIDIA Isaac Sim program via the Python interface. The picture below depicts when the filter detects that the car is gonna crash (indicated in red dots), which then diverts the car back to safety. When the dots are green, it indicates that the car’s actions are safe.",
        img: "/images/content-img/saferl_comparison.jpg",
      },
      // {
      //   heading: "Full Literature",
      //   body: "The full script for my thesis can be found here: \n The presentation slides can be found here: \n",
      // },
    ],
    techs: ["python", "numpy"],
  },
  {
    slug: "smart-ambulance",
    title: "Smart Ambulance (Internet of Things)",
    description:
      "Smart Ambulance enables real-time data transfer for patient’s data measured inside of an ambulance to a medical professional anywhere.",
    mainImg: "/images/content-img/smart_ambulance_ppt.jpg",
    links: [],
    contents: [
      {
        heading: "Web Dashboard",
        body: "The web dashboard shows the patient’s data such as his/her body temperature, heartbeat, oxygen level, and location.\nThe web dashboard retrieved the patient's data in real time using MQTT via websocket. The web is developed using react to better accommodate the changing state of the patient’s data.",
        img: "/images/placeholders/smartambulancedashboard.png",
      },
      {
        heading: "On Board Device",
        body: "The on board device measures the patient’s data by using medical sensors connected to an ESP32 microcontroller.\nThe data is then transferred via MQTT to an MQTT broker.",
        img: "/images/placeholders/ambulancedevice_nobg.png",
      },
    ],
    techs: ["react", "redux", "nest", "mongodb", "cpp"],
  },
];

export default getProjectDetails;
