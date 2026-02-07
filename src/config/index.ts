import type { SiteConfig, SiteContent } from "../types";
export const SITE_CONFIG: SiteConfig = {
  title: "Ismail Usman — Cloud-Native ML Engineer |FastAPI • Kubernetes (AKS/GKE) • CI/CD",
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
    specialty: "Cloud-Native ML Engineer",
    summary:
      "I am a young Cloud-Native ML Engineer based in Nigeria with a foundational expertise in Mathematics, I specialize in mathematical modeling, cloud infrastructure orchestration, and the end-to-end deployment of intelligent systems using Python, Kubernetes, and Docker. I am a passionate and hardworking professional dedicated to transforming complex algorithms into reliable, automated software services.",
    email: "uthmanismail7@gmail.com",
  },
  experience: [
    {
      company: "MTN NIGERIA",
      position: "Team Lead Connect Store",
      startDate: "September 2024",
      endDate: "Present",
      summary: [
        "Lead and manage a high performing customer service team at MTN Connect Store, driving operational excellence and customer satisfaction across technical support operations. Oversee first-level technical troubleshooting, team performance optimization, and critical customer data management with strict adherence to confidentiality protocols. Successfully completed MTN's prestigious 'How Can I Serve You' customer service excellence training (2025), implementing best practices that enhance service delivery standards.",
        "Leverage technical expertise and analytical thinking to resolve complex customer issues while mentoring team members in effective problem solving methodologies.",
      ],
    },
    {
      company: "Abu Hurayrah International College",
      position: "Educational Instructor (Part-Time)",
      startDate: "March 2020",
      endDate: "July 2024",
      summary: [
        "Designed and delivered comprehensive mathematics and statistics curriculum for secondary school students, employing innovative teaching methodologies to simplify complex quantitative concepts. Developed customized lesson plans and assessment frameworks that improved student engagement and academic performance. ",
        "Cultivated analytical thinking skills among students through practical problem solving exercises and real world applications of mathematical principles. Collaborated with academic staff to align curriculum standards with national educational requirements while maintaining consistently high student achievement rates.",
      ],
    },
    {
      company: "Federal College of Education, Zaria",
      position: "Graduate Assistant (NYSC)",
      startDate: "March 2022",
      endDate: "March 2023",
      summary: "Delivered engaging lectures in advanced mathematics and foundational data science concepts to undergraduate students as part of the National Youth Service Corps program. Supported faculty members in curriculum development, examination preparation, and student academic counseling. Facilitated practical sessions that bridged theoretical mathematical concepts with data analysis applications, preparing students for careers in STEM fields. Maintained excellent student evaluation ratings while contributing to departmental research initiatives and academic development programs.",
    },
  ],
  projects: [
    {
  name: "Blue Schools Water Quality Monitor",
  summary: "A Bayesian Decision Support System (DSS) designed to predict groundwater contamination risks in real-time. Built with Streamlit and pgmpy, it utilizes Probabilistic Graphical Models (Bayesian Networks) to infer safety levels from environmental variables like rainfall and latrine distance, providing an AI-driven alternative to expensive lab testing.",
  linkPreview: "https://blue-schools-water.streamlit.app/",
  linkSource: "https://github.com/Ishmeeeel/Blue-Schools-Water-Quality-Monitor",
  image: "/predictions.png" 
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
    {
      name: "Student Performance Prediction (ML Pipeline)",
      summary: "ML project focused on end-to-end data preparation and modeling. Implemented structured data cleaning, handling of missing values, feature encoding, and feature scaling prior to model training. Built and evaluated predictive models using scikit-learn, with emphasis on interpretability, validation, and reproducible preprocessing workflows.",
      linkPreview: "/",
      linkSource: "https://github.com/Ishmeeeel/REALWORD_TASKS",
      image: "/predictions.png",
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

// #5755ff
