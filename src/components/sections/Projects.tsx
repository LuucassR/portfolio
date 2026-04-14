import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ExternalLink, Github, Star } from "lucide-react";
import { portfolioData } from "../../data/data";

export default function Projects() {
  if (!portfolioData || !portfolioData.projects) {
    return <div className="py-24 text-center">Loading projects...</div>;
  }

  const featuredProjects = portfolioData.projects.filter(p => p.featured);
  const regularProjects = portfolioData.projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50/30 dark:from-slate-900 dark:to-blue-900/20">
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
            Here are some of my recent work that showcase my skills in full-stack development
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Regular Projects Grid */}
        {regularProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Other Projects</h3>
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

function FeaturedProjectCard({ project, index }: { project: any; index: number }) {
  const images = project.images || [];
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextImage = () => setCurrentIdx((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);

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
        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold rounded-full">
          <Star className="w-3 h-3" />
          Featured
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative aspect-video overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIdx}
            src={images[currentIdx]}
            alt={project.title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error(`Failed to load image: ${images[currentIdx]}`);
              e.currentTarget.src = "https://via.placeholder.com/600x400/3b82f6/ffffff?text=Image+Not+Found";
            }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prevImage}
              className="p-2 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white shadow-lg hover:scale-110 transition"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={nextImage}
              className="p-2 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white shadow-lg hover:scale-110 transition"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_: any, i: number) => (
              <button
                key={i}
                onClick={() => setCurrentIdx(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIdx
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        )}
      </div>

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
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const images = project.images || [];
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextImage = () => setCurrentIdx((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200/50 dark:border-slate-700/50 hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIdx}
            src={images[currentIdx] || "https://via.placeholder.com/400x250"}
            alt={project.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prevImage}
              className="p-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white shadow-lg hover:scale-110 transition"
            >
              <ArrowLeft size={14} />
            </button>
            <button
              onClick={nextImage}
              className="p-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white shadow-lg hover:scale-110 transition"
            >
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>

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
              <Github className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
