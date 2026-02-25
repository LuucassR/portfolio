import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { portfolioData } from "../../data/data";

export default function Certifications() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Award className="text-primary-600" /> Certificaciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 glass-card rounded-xl border-l-4 border-primary-600"
            >
              <span className="text-sm text-primary-600 font-bold">
                {cert.issuer}
              </span>
              <h3 className="text-xl font-bold mt-1 mb-2">{cert.title}</h3>
              <p className="text-slate-500 text-sm mb-4">{cert.date}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm italic">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
