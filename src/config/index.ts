import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ismail Usman — Cloud-Native ML Engineer | FastAPI • Kubernetes (AKS/GKE) • CI/CD",
  author: "Ismail Usman",
  description:
    "I design and deploy ML services with production ready APIs, containerization, and cloud-native workflows",
  lang: "en",
  siteLogo: "/ismail-big.png",
  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/NexGen_s" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/uthman-ismail-8040703a1/" },
    { text: "Github", href: "https://github.com/Ishmeeeel" },
    { text: "Youtube", href: "https://studio.youtube.com/channel/UCtOffx0qy8SjQR_tzEtrMLw/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D" },
    { text: "Email", href: "mailto:uthmanismail7@gmail.com" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ismail Usman",
    specialty: "Cloud-Native ML Engineer | FastAPI • Kubernetes (AKS/GKE) • CI/CD",
    summary:
      "I design and deploy ML services with production ready APIs, containerization, and cloud-native workflows.",
    email: "uthmanismail7@gmail.com",
  },
  
  // PROJECTS SECTION (Moved to Top)
  projects: [
    {
      name: "Blue Schools Water Quality Monitor",
      summary: "A Bayesian Decision Support System (DSS) designed to predict groundwater contamination risks in real-time. Built with Streamlit and pgmpy, it utilizes Probabilistic Graphical Models (Bayesian Networks) to infer safety levels from environmental variables like rainfall and latrine distance, providing an AI-driven alternative to expensive lab testing.",
      linkPreview: "https://blue-schools-water.streamlit.app/",
      linkSource: "https://github.com/Ishmeeeel/Blue-Schools-Water-Quality-Monitor",
      image: "/blue-schools.png",
    },
    {
      name: "Azure ML Pipeline Orchestration",
      summary: "End-to-end machine learning pipeline deployed on Azure Kubernetes Service (AKS) with automated model training, versioning, and inference API. Implements CI/CD workflows using Docker containers and Azure DevOps for seamless model deployment at scale.",
      linkPreview: "/",
      linkSource: "https://github.com/Ishmeeeel/SERIOUS-TASK-FAST-API-",
      image: "/azure.png",
    },
    {
      name: "FastAPI Event Ticketing System",
      summary: "Production-style backend application built with FastAPI to manage users, events, and ticket purchases. Implements REST APIs, structured data models, payment workflow logic, QR-code ticket generation, and robust error handling. Emphasizes clean code organization, modular services, and real-world backend design practices.",
      linkPreview: "/",
      linkSource: "https://github.com/Ishmeeeel/KODECAMP5.0_-FASTAPI-CAMPSTONE-PROJECT-",
      image: "/fastapi.png",
    },
  ],

  // EXPERIENCE SECTION (Moved Below Projects)
  experience: [
    {
      company: "MTN NIGERIA",
      position: "Team Lead Connect Store",
      startDate: "September 2024",
      endDate: "Present",
      summary: [
        "Lead customer service and first-level technical support operations.",
        "Oversee issue resolution, team performance, and secure handling of customer data.",
        "Mentor team members on structured problem-solving and service standards.",
      ],
    },
    {
      company: "Abu Hurayrah International College",
      position: "Educational Instructor (Part-Time)",
      startDate: "March 2020",
      endDate: "July 2024",
      summary: [
        "Taught mathematics and statistics, emphasizing analytical thinking and problem-solving.",
        "Designed lessons and assessments aligned with curriculum standards.",
      ],
    },
    {
      company: "Federal College of Education, Zaria",
      position: "Graduate Assistant (NYSC)",
      startDate: "March 2022",
      endDate: "March 2023",
      summary: [
        "Delivered undergraduate mathematics and introductory data science instruction.",
        "Supported curriculum development and academic activities",
      ],
    },
  ],

  about: {
    description: `
      I’m Ismail Usman, a cloud-native machine learning engineer focused on building production ready ML systems and API based services. I work with FastAPI, Docker, and cloud native workflows to design scalable and reliable machine learning solutions.
      My interests include MLOps, probabilistic modeling, and human centered decision-support systems. I’m adaptable and comfortable adopting emerging tools and frameworks where they improve system performance, reliability, or maintainability. I’m open to remote, full-time, or contract opportunities globally.
    `,
    image: "/ismail-big.png",
  },
};