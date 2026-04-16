import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { portfolioData } from "../../data/data";
import { SiGithub } from "react-icons/si";
import type { Project } from "../../types/types";
import { OptimizedCarousel } from "../ui/OptimizedCarousel";
import { useStrategicPreload } from "../../hooks/useStrategicPreload";

export default function Projects() {
  // Get all project images for strategic preloading
  const allProjectImages = portfolioData?.projects?.flatMap(p => p.images || []) || [];
  
  // Preload first few images when section is near viewport
  useStrategicPreload(allProjectImages, { priority: 2, threshold: 0.3 });

  if (!portfolioData || !portfolioData.projects) {
    return <div className="py-24 text-center">Loading projects...</div>;
  }

  const featuredProjects = portfolioData.projects.filter((p) => p.featured);
  const regularProjects = portfolioData.projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-linear-to-b from-white to-blue-50/30 dark:from-slate-900 dark:to-blue-900/20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-900 dark:text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
              Projects
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent work that showcase my skills in
            full-stack development
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Regular Projects Grid */}
        {regularProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const images = project.images || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/50 dark:border-slate-700/50"
    >
      {/* Featured Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-1 px-3 py-1 bg-lienar-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold rounded-full">
          <Star className="w-3 h-3" />
          Featured
        </div>
      </div>

      {/* Image Gallery */}
      <OptimizedCarousel
        images={images}
        alt={project.title}
        priority={index === 0}
        className="w-full h-full"
        showNavigation={images.length > 1}
        showIndicators={images.length > 1}
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300"
            >
              <SiGithub className="text-white hover:text-gray-400" size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const images = project.images || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200/50 dark:border-slate-700/50 hover:-translate-y-1"
    >
      <OptimizedCarousel
        images={images}
        alt={project.title}
        className="w-full h-full"
        showNavigation={images.length > 1}
        showIndicators={false}
      />

      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.slice(0, 3).map((tech: string) => (
            <span
              key={tech}
              className="text-[10px] font-medium px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[10px] font-medium px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-xs flex items-center justify-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Demo
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 border border-slate-300 dark:border-slate-600 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <SiGithub className="text-white hover:text-gray-400" size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
