import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { portfolioData } from "../../data/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Animated Gradients */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="max-w-4xl text-center z-10 relative">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-blue-600 dark:text-blue-400 font-semibold mb-4 tracking-wide text-lg"
        >
          Hello, I'm
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          <span className="text-slate-900 dark:text-white">{portfolioData.personal.name}</span>
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
            {portfolioData.personal.role}
          </span>
          <br />
          <span className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mt-2 inline-block">
            Systems Engineering Student • 2nd Year
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white rounded-full bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
          >
            View My Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="./cv-en-final.pdf"
            download="Lucas_Rossi_CV_EN.pdf"
            className="group inline-flex items-center justify-center px-8 py-4 font-medium rounded-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            {portfolioData.personal.location}
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            {portfolioData.personal.email}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 dark:bg-slate-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
