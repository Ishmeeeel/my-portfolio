import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ismail Usman — Cloud-Native ML Engineer",
  author: "Ismail Usman",
  description:
    "I'm a Young Cloud-Native ML Engineer. I specialize in mathematical modeling, cloud infrastructure orchestration, and the end-to-end deployment of intelligent systems",
    lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
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
      summary: [
        "Lead and manage a high-performing customer service team at MTN Connect Store, driving operational excellence and customer satisfaction across technical support operations. Oversee first-level technical troubleshooting, team performance optimization, and critical customer data management with strict adherence to confidentiality protocols. Successfully completed MTN's prestigious 'How Can I Serve You' customer service excellence training (2025), implementing best practices that enhance service delivery standards. Leverage technical expertise and analytical thinking to resolve complex customer issues while mentoring team members in effective problem-solving methodologies.",
        "Ensure seamless coordination between technical support functions and business objectives, maintaining MTN's reputation for quality service delivery in Nigeria's competitive telecommunications landscape.",
      ],
    },
    {
      company: "Abu Hurayrah International College",
      position: "Educational Instructor (Part-Time)",
      startDate: "March 2020",
      endDate: "July 2024",
      summary: [
        "Designed and delivered comprehensive mathematics and statistics curriculum for secondary school students, employing innovative teaching methodologies to simplify complex quantitative concepts. Developed customized lesson plans and assessment frameworks that improved student engagement and academic performance. ",
        "Cultivated analytical thinking skills among students through practical problem-solving exercises and real-world applications of mathematical principles. Collaborated with academic staff to align curriculum standards with national educational requirements while maintaining consistently high student achievement rates.",
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
      name: "Azure ML Pipeline Orchestration",
      summary: "End-to-end machine learning pipeline deployed on Azure Kubernetes Service (AKS) with automated model training, versioning, and inference API. Implements CI/CD workflows using Docker containers and Azure DevOps for seamless model deployment at scale.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "FastAPI Event Ticketing System",
      summary: "Production-style backend application built with FastAPI to manage users, events, and ticket purchases. Implements REST APIs, structured data models, payment workflow logic, QR-code ticket generation, and robust error handling. Emphasizes clean code organization, modular services, and real-world backend design practices.",
      linkPreview: "/",
      linkSource: "https://github.com/yourusername/event-ticketing-fastapi",
      image: "/shopify-clon.png",
    },
    {
      name: "Student Performance Prediction (ML Pipeline)",
      summary: "Machine learning project focused on end-to-end data preparation and modeling. Implemented structured data cleaning, handling of missing values, outlier inspection, feature encoding, and feature scaling prior to model training. Built and evaluated predictive models using scikit-learn, with emphasis on interpretability, validation, and reproducible preprocessing workflows.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Ismail Usman, a cloud-native machine learning engineer with experience building and deploying ML services using Docker, Kubernetes (AKS & GKE), and FastAPI. I work across the full ML lifecycle from data preprocessing and feature engineering to model deployment—focusing on scalable, maintainable, and human-centered solutions.
      Beyond technical execution, I am motivated by human centered applications of data science, especially in areas such as mental health, education, and decision-support systems. I believe effective machine learning systems should be ethical, transparent, and designed to serve real societal needs, and I am continuously developing my skills.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
