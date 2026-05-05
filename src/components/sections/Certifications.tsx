import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { portfolioData } from "../../data/data";

export default function Certifications() {
  if (!portfolioData || !portfolioData.certifications) {
    return <div className="py-24 text-center">Loading certifications...</div>;
  }

  return (
    <section id="certifications" className="py-24 px-6 bg-linear-to-b from-white to-blue-50/30 dark:from-slate-900 dark:to-blue-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-900 dark:text-white">Professional </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
              Certifications
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Additional learning certifications that complement my practical experience and project work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/30 dark:border-slate-700/30 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              
              {/* Badge */}
              <div className="flex items-center justify-center w-12 h-12 bg-linear-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-lg mb-4 relative z-10">
                <Award className="w-6 h-6 text-slate-600 dark:text-slate-300" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
                  {cert.issuer}
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <span>{cert.date}</span>
                  <span>·</span>
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs font-medium">
                    {cert.credential}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Link to Certificate */}
                <a
                  href={cert.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors group"
                >
                  View Certificate
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
