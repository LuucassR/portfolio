import { Linkedin, Globe } from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Lucas Rossi",
      role: "Full-Stack Developer",
    location: "Santa Fe, Argentina",
    email: "lucassrossi12@gmail.com",
    phone: "(342) 559-4220",
    website: "https://luucassr.github.io/portfolio/",
    bio: "Full-Stack Developer who ships production-ready web applications from concept to deployment. I specialize in React, Next.js, and TypeScript for the frontend, with Express and FastAPI powering the backend. I bring a security-first mindset from my digital forensics background and a relentless drive to ship fast, clean code.",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lucas-rossi-052926389/",
        icon: Linkedin,
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
      category: "Frontend",
      items: [
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
          name: "HTML 5",
          level: "Avanzada",
          keywords: ["Semantic HTML", "Accessibility", "Forms"],
        },
        {
          name: "CSS",
          level: "Avanzada",
          keywords: ["Flexbox", "Grid", "Animations", "Responsive"],
        },
        {
          name: "Vitest",
          level: "Intermedia",
          keywords: ["Unit Testing", "Integration Testing", "Mocking"],
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Python",
          level: "Intermedia",
          keywords: ["OOP", "Async Programming", "Testing"],
        },
        {
          name: "TypeScript / JavaScript",
          level: "Avanzada",
          keywords: ["ES6+", "Node.js", "Async/Await"],
        },
        {
          name: "Express.js",
          level: "Intermedia",
          keywords: ["REST API", "Middleware", "JWT Auth"],
        },
        {
          name: "FastAPI",
          level: "Intermedia",
          keywords: ["Python", "Pydantic", "Asynchronous"],
        },
        {
          name: "Pytest",
          level: "Intermedia",
          keywords: ["Unit Testing", "Fixtures", "Assertions"],
        },
      ],
    },
    {
      category: "Tools & Databases",
      items: [
        {
          name: "SQLAlchemy",
          level: "Intermedia",
          keywords: ["ORM", "DeclarativeBase", "typing Library"],
        },
        {
          name: "Git / GitHub",
          level: "Avanzada",
          keywords: ["Version Control", "Git Flow", "PRs"],
        },
        {
          name: "PostgreSQL",
          level: "Intermedia",
          keywords: ["SQL", "Prisma", "Joins"],
        },
        {
          name: "SQLite",
          level: "Intermedia",
          keywords: ["Embedded DB", "SQL", "Transactions"],
        },
        {
          name: "MySQL",
          level: "Básica",
          keywords: ["SQL", "Database Design", "Queries"],
        },
        {
          name: "NoSQL",
          level: "Básica",
          keywords: ["MongoDB", "Document DB", "Schema Design"],
        },
        {
          name: "Figma",
          level: "Intermedia",
          keywords: ["UI Design", "Prototyping", "Collaboration"],
        },
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        {
          name: "Docker",
          level: "Intermedia",
          keywords: ["Containers", "Dockerfile", "Docker Compose"],
        },
        {
          name: "Docker Compose",
          level: "Intermedia",
          keywords: ["Multi-container", "Services", "Networking"],
        },
        {
          name: "GitHub Actions (CI/CD)",
          level: "Intermedia",
          keywords: ["Workflows", "Pipelines", "Automation"],
        },
        {
          name: "Vercel",
          level: "Avanzada",
          keywords: ["Deployment", "Serverless", "Edge Functions"],
        },
        {
          name: "AWS",
          level: "Básica",
          keywords: ["EC2", "S3", "Cloud Services"],
        },
      ],
    },
  ],
  experience: [
    {
      id: 1,
      company: "Stealth Mode Startup",
      role: "Full-Stack Developer",
      period: "March 2026 - March 2026",
      description:
        "Currently developing innovative solutions in a stealth mode startup environment. Building cutting-edge web applications with modern technologies while maintaining confidentiality. Contributing to product architecture, implementing scalable backend systems, and creating responsive user interfaces.",
      type: "full-time",
    },
    {
      id: 2,
      company: "Digital Forensics",
      role: "Forensic Analyst",
      period: "February 2026 - Present",
      description:
        "Conducted digital forensic analysis to identify and preserve critical electronic evidence for legal proceedings. Performed file integrity verification using cryptographic hashes and algorithms to ensure data authenticity. Demonstrated high-level accountability while managing urgent and high-stakes cases.",
      type: "freelance",
    },
    {
      id: 3,
      company: "Freelance Development",
      role: "Full-Stack Developer",
      period: "2024 - Present",
      description:
        "Developed custom web applications for clients using modern technologies including React, Next.js, Node.js, and Python. Implemented responsive designs, RESTful APIs, and database solutions. Managed project timelines and client communications while delivering high-quality, scalable solutions.",
      type: "freelance",
    },
    {
      id: 4,
      company: "Personal Projects",
      role: "Full-Stack Developer & UI/UX Designer",
      period: "2023 - Present",
      description:
        "Designed and developed full-stack applications including project management tools, cryptocurrency tracking APIs, and commercial directories. Created intuitive user interfaces with Tailwind CSS and Figma, implemented secure authentication systems, and deployed applications on Vercel with PostgreSQL and Express.js backends.",
      type: "freelance",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Prello - Kanban Project Manager",
      description:
        "Developed a full-stack project management application featuring a Kanban-style interface. Implemented secure user authentication and interactive features such as drag-and-drop functionality. Enabled task organization through custom columns, labels, and deadlines.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Vercel"],
      demo: "https://project-manager-pi-three.vercel.app/",
      github: "https://github.com/luucassr/prello",
      featured: false,
      metric: "Drag-and-drop project management with 4 board views",
      buildTime: "Built in 3 weeks",
      images: ["prello1.png", "prello2.png", "prello3.png"],
    },
    {
      id: 2,
      title: "Guía Zona - Commercial Directory",
      description:
        "Created a dynamic web platform designed to centralize and increase visibility for local businesses. Designed a management system allowing business owners to register and verify their accounts. Developed an autonomous administration dashboard for managing commercial profiles within the directory.",
      tech: ["React", "Node.js", "PostgreSQL", "Express.js"],
      demo: "#",
      github: "#",
      featured: false,
      metric: "Directory serving 200+ local business listings",
      buildTime: "Built in 6 weeks",
      images: [
        "guia_comercial1.png",
        "guia_comercial2.png",
        "guia_comercial3.png",
        "guia_comercial4.png",
        "guia_comercial5.png",
      ],
    },
    {
      id: 3,
      title: "CryptoPulse",
      description:
        "Developed a high-performance API for real-time cryptocurrency tracking. Designed RESTful endpoints focused on asynchronous operations to optimize response times. Integrated external financial data for seamless visualization in user dashboards.",
      tech: ["FastAPI", "Python", "REST APIs", "JWT", "SQLAlchemy"],
      demo: "https://fastapi-cryptopulse.vercel.app/",
      github: "#",
      featured: false,
      metric: "Real-time API tracking 10,000+ cryptocurrency data points",
      buildTime: "Built in 2 weeks",
      images: [
        "cryptoPulse1.png",
        "cryptoPulse2.png",
        "cryptoPulse3.png",
        "cryptoPulse4.png",
        "cryptoPulse5.png",
        "cryptoPulse6.png",
      ],
    },
    {
      id: 4,
      title: "JcRossi Automotores WebPage",
      description:
        "Created a personal website for JcRossi, featuring a modern design and responsive layout. Implemented interactive elements and optimized for performance with a dashboard to have control over the content.",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "React",
        "Vercel",
        "AWS RDS",
      ],
      demo: "https://dad-webpage-weld.vercel.app/",
      github: "#",
      featured: true,
      metric: "CMS-powered dashboard with real-time content management",
      buildTime: "Built in 3 weeks",
      images: [
        "dadWebpage5.png",
        "dadWebpage7.png",
        "dadWebpage1.png",
        "dadWebpage2.png",
        "dadWebpage3.png",
        "dadWebpage4.png",
        "dadWebpage6.png",
      ],
    },
    {
      id: 5,
      title: "YaMayorista E-Commerse",
      description:
        "I architected and developed Ya Mayorista, a production-ready wholesale e-commerce platform designed to digitalize bulk purchasing for the Santa Fe region. Built with a modern full-stack approach using React and Node.js, the application manages a dynamic catalog of thousands of products across multiple categories like cleaning, food, and personal care. I implemented a robust backend with PostgreSQL to handle complex wholesale logic, including bulk pricing structures and merchant-specific account validation. The platform is optimized for performance and high-speed data retrieval, ensuring a seamless experience for commercial clients managing large orders on both mobile and desktop.",
      tech: ["React", "Node.js", "PostgreSQL", "Supabase", "Typescript"],
      demo: "https://yamayorista.online/",
      github: "https://github.com/luucassr/ya-mayorista",
      featured: true,
      metric: "E-commerce handling 500+ SKUs with bulk pricing",
      buildTime: "Built in 2 months",
      images: [
        "yaMayorista1.png",
        "yaMayorista2.png",
        "yaMayorista6.png",
        "yaMayorista3.png",
        "yaMayorista4.png",
        "yaMayorista5.png",
      ],
    },
  ],
  certifications: [
    {
      title: "CS50 Python",
      issuer: "Harvard University",
      date: "2025",
      description: "Advanced Python Programming Certification",
      url: "https://certificates.cs50.io/589dffe6-75c2-4378-a2d1-28221840db3c.png?size=letter",
      credential: "Certification",
    },
    {
      title: "CS50 X",
      issuer: "Harvard University",
      date: "2025",
      description: "Computer Science Certification",
      url: "https://certificates.cs50.io/73b360d7-e6bc-480d-987c-181d4f085e4e.png?size=letter",
      credential: "Certification",
    },
    {
      title: "CS50 SQL",
      issuer: "Harvard University",
      date: "2025",
      description: "Database Management & SQL Certification",
      url: "https://certificates.cs50.io/903c093e-8608-4cf1-a4d6-494c6e12f11e.png?size=letter",
      credential: "Certification",
    },
  ],
  languages: [
    { name: "Español", level: "Native" },
    { name: "Inglés", level: "Advanced" },
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
    role: "Full-Stack Developer",
      bio: "I am Lucas Rossi, and I am passionate about building digital products that function perfectly and look incredible. My strength lies in Next.js, React, and TypeScript. Currently pursuing my second year of Systems Engineering studies.",
    },
  },
};
