import { Linkedin, Instagram, Globe } from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Lucas Rossi",
    role: "Junior Full-Stack Developer",
    location: "Santa Fe, Argentina",
    email: "lucassrossi12@gmail.com",
    phone: "3425594220",
    website: "https://luucassr.github.io/portfolio/",
    bio: "Me apasiona construir productos digitales que no solo funcionen a la perfección, sino que también se vean increíbles. Como desarrollador Full-Stack, mi fuerte es el ecosistema moderno de Next.js, React y TypeScript, combinando estética impecable con un backend sólido.",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lucas-rossi-052926389/",
        icon: Linkedin,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/lucassrossii_/",
        icon: Instagram,
      },
      {
        name: "Portfolio",
        url: "https://luucassr.github.io/portfolio/",
        icon: Globe,
      },
    ],
  },
  services: [
    {
      title: "Desarrollo Full-Stack",
      description:
        "Creación de aplicaciones web completas utilizando Next.js, React y TypeScript para el frontend, con backends robustos en Express o FastAPI.",
    },
    {
      title: "Diseño UI/UX",
      description:
        "Diseño de interfaces intuitivas y estéticas impecables logradas con Tailwind CSS y Figma, enfocadas en la experiencia del usuario final.",
    },
    {
      title: "Gestión de Bases de Datos",
      description:
        "Diseño y administración de bases de datos relacionales en PostgreSQL y SQLite, asegurando integridad y escalabilidad.",
    },
  ],
  skills: [
    {
      name: "React",
      level: "Avanzada",
      keywords: ["Hooks", "Context API", "Redux", "JSX"],
    },
    {
      name: "Next.js",
      level: "Intermedia",
      keywords: ["App Router", "SSR", "SSG", "API Routes"],
    },
    {
      name: "Tailwind CSS",
      level: "Avanzada",
      keywords: ["Responsive Design", "UX/UI", "Custom Themes"],
    },
    {
      name: "TypeScript",
      level: "Avanzada",
      keywords: ["Type Safety", "Interfaces", "ES6+"],
    },
    {
      name: "Express",
      level: "Intermedia",
      keywords: ["REST API", "Middleware", "JWT Auth"],
    },
    {
      name: "FastAPI",
      level: "Intermedia",
      keywords: ["Python", "Pydantic", "Asynchronous"],
    },
    {
      name: "PostgreSQL",
      level: "Intermedia",
      keywords: ["SQL", "Prisma", "Joins"],
    },
    {
      name: "Git / GitHub",
      level: "Avanzada",
      keywords: ["Version Control", "Git Flow", "PRs"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Gestión de Proyectos Kanban",
      description:
        "Gestor de proyectos que simplifica la organización de tareas con columnas personalizadas, autenticación segura y gestión de fechas límite.",
      tech: ["Next.js", "Tailwind CSS", "Auth"],
      demo: "https://project-manager-pi-three.vercel.app/",
      github: "#",
    },
    {
      id: 2,
      title: "Guía Comercial Integral",
      description:
        "Plataforma web diseñada para centralizar negocios locales mediante un sistema de gestión dinámica donde los usuarios administran su presencia.",
      tech: ["React", "PostgreSQL", "Node.js"],
      demo: "#",
      github: "#",
    },
  ],
  certifications: [
    {
      title: "CS50P: Programming with Python",
      issuer: "Harvard University",
      date: "Octubre 2025",
      description:
        "Dominio de Python, POO, pruebas unitarias y manejo de excepciones.",
    },
    {
      title: "CS50x: Computer Science",
      issuer: "Harvard University",
      date: "Noviembre 2025",
      description:
        "Base sólida en algoritmos, estructuras de datos y lenguaje C.",
    },
    {
      title: "CS50 SQL: Databases",
      issuer: "Harvard University",
      date: "Diciembre 2025",
      description:
        "Diseño de esquemas, consultas complejas y gestión de datos con SQLite y PostgreSQL.",
    },
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Avanzado" },
    { name: "Portugués", level: "Principiante" },
  ],
};

export const content = {
  es: {
    ...portfolioData,
  },
  en: {
    ...portfolioData,
    personal: {
      ...portfolioData.personal,
      role: "Junior Full-Stack Developer",
      bio: "I am Lucas Rossi, and I am passionate about building digital products that function perfectly and look incredible. My strength lies in Next.js, React, and TypeScript.",
    },
  },
};
