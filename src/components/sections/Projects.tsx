import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ExternalLink, Star, Clock } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Maximize2 } from "lucide-react";
import { portfolioData } from "../../data/data";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../data/translations";
import { SimpleLightbox } from "../ui/SimpleLightbox";
import type { Project } from "../../types/types";

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const [globalLightbox, setGlobalLightbox] = useState({
    isOpen: false,
    images: [] as string[],
    currentIndex: 0,
  });

  const openGlobalLightbox = (images: string[], index: number) => {
    setGlobalLightbox({ isOpen: true, images, currentIndex: index });
  };
  const closeGlobalLightbox = () => {
    setGlobalLightbox({ isOpen: false, images: [], currentIndex: 0 });
  };

  if (!portfolioData || !portfolioData.projects) {
    return <div className="py-24 text-center">Loading projects...</div>;
  }

  const featured = portfolioData.projects.filter((p) => p.featured);
  const regular = portfolioData.projects.filter((p) => !p.featured);

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
          className="text-center mb-12"
        >
          <span className="text-sm font-mono-custom text-slate-400 dark:text-slate-500 tracking-widest uppercase">
            {t.sectionNumber}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="text-slate-900 dark:text-white">{t.title} </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
              {t.titleAccent}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {featured.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featured.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenLightbox={openGlobalLightbox}
                featured
                t={t}
              />
            ))}
          </div>
        )}

        {regular.length > 0 && (
          <div>
            <h3 className="text-xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block" />
              {t.otherTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regular.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpenLightbox={openGlobalLightbox}
                  featured={false}
                  t={t}
                />
              ))}
            </div>
          </div>
        )}

        <SimpleLightbox
          images={globalLightbox.images}
          isOpen={globalLightbox.isOpen}
          onClose={closeGlobalLightbox}
          initialIndex={globalLightbox.currentIndex}
        />
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpenLightbox,
  featured,
  t,
}: {
  project: Project;
  index: number;
  onOpenLightbox: (images: string[], index: number) => void;
  featured: boolean;
  t: typeof translations.es.projects;
}) {
  const images = project.images || [];
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextImage = () => setCurrentIdx((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/50 dark:border-slate-700/50 ${
        featured ? "" : "hover:-translate-y-1"
      }`}
    >
      <div className="relative aspect-video overflow-hidden">
        <button
          onClick={() => onOpenLightbox(images, currentIdx)}
          className="absolute top-2 right-2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        >
          <Maximize2 size={featured ? 16 : 14} />
        </button>

        {featured && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1 px-3 py-1 bg-linear-to-r from-blue-600/90 to-cyan-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
            <Star className="w-3.5 h-3.5" fill="currentColor" />
            <span>{t.featured}</span>
          </div>
        )}

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
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/600x400/3b82f6/ffffff?text=Image+Not+Found";
            }}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prevImage}
              className="p-2 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white shadow-lg hover:scale-110 transition"
            >
              <ArrowLeft size={featured ? 18 : 14} />
            </button>
            <button
              onClick={nextImage}
              className="p-2 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white shadow-lg hover:scale-110 transition"
            >
              <ArrowRight size={featured ? 18 : 14} />
            </button>
          </div>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
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

      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className={`font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
              featured ? "text-2xl" : "text-lg"
            }`}
          >
            {project.title}
          </h3>
          {project.buildTime && (
            <div className="shrink-0 flex items-center gap-1 px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-md text-[10px] font-mono-custom text-slate-500 dark:text-slate-400 whitespace-nowrap">
              <Clock className="w-3 h-3" />
              {t.buildTime} {project.buildTime.replace("Built in ", "").replace("Construido en ", "")}
            </div>
          )}
        </div>

        {project.metric && (
          <p className="text-xs font-mono-custom text-blue-600 dark:text-blue-400 mb-2">
            {project.metric}
          </p>
        )}

        <p
          className={`text-slate-600 dark:text-slate-400 mb-4 leading-relaxed ${
            featured ? "" : "text-sm line-clamp-2"
          }`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105 text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-semibold">{t.liveDemo}</span>
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
          {(!project.github || project.github === "#") &&
            (!project.demo || project.demo === "#") && (
              <span className="flex-1 text-center text-xs text-slate-400 dark:text-slate-500 py-2">
                {t.caseStudy}
              </span>
            )}
        </div>
      </div>
    </motion.div>
  );
}
