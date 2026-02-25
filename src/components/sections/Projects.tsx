import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ArrowLeft } from "lucide-react";
// 1. Asegúrate de que este import sea correcto
import { portfolioData } from "../../data/data";

// 2. Mantenemos la lógica de imágenes fuera o dentro,
// pero asegúrate de que los IDs coincidan con los de tu data.ts
const projectImages: Record<number, string[]> = {
  1: ["./prello1.png", "./prello2.png", "./prello3.png"],
  // Si tu primer proyecto tiene id: 10, aquí debe decir 10
};

export default function Projects() {
  // 3. Verificación de seguridad: si no hay datos, mostramos un aviso
  if (!portfolioData || !portfolioData.projects) {
    return <div className="py-24 text-center">Cargando proyectos...</div>;
  }

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-100/50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Proyectos Destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: any) {
  const images = projectImages[project.id] || [
    "https://via.placeholder.com/600x400",
  ];
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextImage = () => setCurrentIdx((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col"
    >
      {/* Cabecera del proyecto */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold dark:text-white">{project.title}</h3>
        <div className="flex gap-3 text-slate-500">
          <a
            href={project.github}
            className="hover:text-primary-600 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={project.demo}
            className="hover:text-primary-600 transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Contenedor de Imagen y Galería */}
      <div className="relative group">
        <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-900">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentIdx}
              src={images[currentIdx]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Flechas de navegación (visibles al hacer hover) */}
          {images.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={prevImage}
                className="p-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white shadow-lg hover:scale-110 transition"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={nextImage}
                className="p-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white shadow-lg hover:scale-110 transition"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* --- INDICADORES DE PUNTOS (DOTS) --- */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4 mb-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIdx(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIdx
                    ? "w-6 h-2 bg-blue-600" // Punto activo (alargado)
                    : "w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400" // Punto inactivo
                }`}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-3">
        {project.description}
      </p>

      {/* Tags de Tecnología */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech: string) => (
          <span
            key={tech}
            className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
