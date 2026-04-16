import { motion } from "framer-motion";
import React, { useState } from "react";
import { portfolioData } from "../../data/data";
import ArchitectureServiceAmazonEC2 from "aws-react-icons/icons/ArchitectureServiceAmazonEC2";
import type { Item, Skills } from "../../types/types"

// Technology icons mapping
const techIcons: Record<string, string | React.ReactElement> = {
  // Frontend
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "HTML 5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Vitest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg",
  // Backend
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "TypeScript / JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "Pytest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  // Tools & DB
  "SQLAlchemy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Git / GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "SQLite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "NoSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  // DevOps & Cloud
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Docker Compose": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "GitHub Actions (CI/CD)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
  "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  "AWS": <ArchitectureServiceAmazonEC2 />,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  if (!portfolioData || !portfolioData.skills) {
    return <div className="py-24 text-center">Loading skills...</div>;
  }

  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-900 dark:text-white">Technical </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
              Skills
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies I work with organized by category. Click on any category to explore more.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {portfolioData.skills.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.category
                  ? "bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {portfolioData.skills
            .find((cat) => cat.category === activeCategory)
            ?.items.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: Item; index: number }) {
  const icon = techIcons[skill.name] || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="group relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center"
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon Container */}
      <div className="relative z-10 mb-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
          {typeof icon === 'string' ? (
            <img 
              loading="lazy"
              src={icon} 
              alt={skill.name}
              className="w-10 h-10 object-contain"
              onError={(e) => {
                e.currentTarget.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg";
              }}
            />
          ) : (
            <div className="w-10 h-10 flex items-center justify-center">
              {icon}
            </div>
          )}
        </div>
      </div>

      {/* Technology Name */}
      <div className="relative z-10">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {skill.name}
        </h3>
        
        {/* Optional: Show a few keywords as small tags */}
        {skill.keywords && skill.keywords.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1 justify-center">
            {skill.keywords.slice(0, 2).map((keyword: string) => (
              <span
                key={keyword}
                className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full"
              >
                {keyword}
              </span>
            ))}
            {skill.keywords.length > 2 && (
              <span className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full">
                +{skill.keywords.length - 2}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
