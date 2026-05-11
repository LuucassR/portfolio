import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data/data";
import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../data/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-500">
              LR.
            </a>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xs">
              {t.description}
            </p>
          </div>

          <div className="flex gap-8 text-sm">
            <a href="#skills" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#experience" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              target="_blank"
              href="https://github.com/LuucassR"
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/lucas-rossi-052926389/"
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700/50 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 dark:text-slate-500 text-xs">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-xs flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            {t.available}
          </p>
        </div>
      </div>
    </footer>
  );
}
