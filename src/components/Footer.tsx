import { Github, Linkedin } from "lucide-react";
import { portfolioData } from "../data/data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} {portfolioData.personal.name}. Todos los
          derechos reservados.
        </p>
        <div className="flex gap-6">
          <a
            target="_blank"
            href="https://github.com/LuucassR"
            className="text-slate-400 hover:text-primary-500 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lucas-rossi-052926389/"
            className="text-slate-400 hover:text-primary-500 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
