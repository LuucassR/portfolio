import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { portfolioData } from "../../data/data";

export default function Certifications() {
  if (!portfolioData || !portfolioData.certifications) {
    return <div className="py-24 text-center">Loading certifications...</div>;
  }

  return (
    <section id="certifications" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50/30 dark:from-slate-900 dark:to-blue-900/20">
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
            Harvard CS50 certifications that validate my expertise in computer science and programming.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              
              {/* Harvard Badge */}
              <div className="flex items-center justify-center w-16 h-16 bg-linear-to-r from-red-600 to-red-700 rounded-full mb-6 relative z-10">
                <Award className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">
                  {cert.issuer}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                  <span className="font-medium">{cert.date}</span>
                  <span>·</span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                    {cert.credential}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Link to Certificate */}
                <a
                  href={cert.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors group"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
