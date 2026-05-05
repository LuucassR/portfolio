import { Github, Linkedin, Download } from "lucide-react";
import { portfolioData } from "../data/data";

export default function SocialSidebar() {
  const githubUrl = "https://github.com/luucassr";
  const linkedinUrl = portfolioData.personal.social.find(s => s.name === "LinkedIn")?.url || "";
  const cvUrl = "./cv-en-final.pdf";

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
        </a>
        
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
        </a>
        
        <a
          href={cvUrl}
          download="Lucas_Rossi_CV_EN.pdf"
          className="group flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          aria-label="Download CV"
        >
          <Download className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
        </a>
      </div>

      {/* Mobile - Hidden (links moved to footer) */}
      <div className="lg:hidden">
        {/* Empty - mobile users will see social links in footer */}
      </div>
    </>
  );
}
