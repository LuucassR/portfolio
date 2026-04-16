import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";
import { portfolioData } from "../../data/data";
import type { ExperienceItem } from "../../types/types";

export default function Experience() {
  if (!portfolioData || !portfolioData.experience) {
    return <div className="py-24 text-center">Loading experience...</div>;
  }

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-slate-900 dark:text-white">Professional </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
              Experience
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My journey as a developer and the professional experiences that have shaped my skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-cyan-500"></div>

          {portfolioData.experience.map((exp, index) => (
            <ExperienceItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ experience, index }: { experience: ExperienceItem; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`relative flex items-center mb-12 ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-800 border-4 border-blue-600 rounded-full z-10"></div>

      {/* Content Card */}
      <div className={`ml-20 md:ml-0 md:w-5/12 ${isEven ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:-translate-y-1">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3 md:justify-end">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {experience.role}
            </h3>
          </div>

          {/* Company */}
          <div className={`text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 ${isEven ? "md:text-right" : ""}`}>
            {experience.company}
          </div>

          {/* Period */}
          <div className={`flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4 ${isEven ? "md:justify-end" : ""}`}>
            <Calendar className="w-4 h-4" />
            {experience.period}
          </div>

          {/* Type Badge */}
          <div className={`mb-4 ${isEven ? "md:justify-end" : ""}`}>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              {experience.type === "freelance" ? "Freelance" : "Full-time"}
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>

      {/* Empty Space for alternating layout */}
      <div className="hidden md:block md:w-5/12"></div>
    </motion.div>
  );
}
