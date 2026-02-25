import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "../../data/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000" />

      <div className="max-w-3xl text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary-600 dark:text-primary-400 font-semibold mb-4 tracking-wide"
        >
          HOLA, SOY {portfolioData.personal.name.toUpperCase()}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          Construyo experiencias web{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-700 to-purple-500">
            modernas
          </span>
          .
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          {portfolioData.personal.bio}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-primary-600 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
          >
            Ver Proyectos <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Contactar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
