import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, Award } from "lucide-react";
import { portfolioData } from "../../data/data";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../data/translations";
import type { ExperienceItem } from "../../types/types";

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;
  const timelineRef = useRef<HTMLDivElement>(null);
  const [drawLine, setDrawLine] = useState(false);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawLine(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!portfolioData || !portfolioData.experience) {
    return <div className="py-24 text-center">Loading experience...</div>;
  }

  return (
    <section id="experience" className="py-24 px-6 bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono-custom text-slate-400 dark:text-slate-500 tracking-widest uppercase">
            {t.sectionNumber}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="text-slate-900 dark:text-white">{t.title} </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
              {t.titleAccent}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          <div
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-linear-to-b from-blue-600 to-cyan-500 transition-all duration-1500 ease-out"
            style={{ height: drawLine ? "100%" : "0%" }}
          />

          {portfolioData.experience.map((exp, index) => (
            <ExperienceItem
              key={exp.id}
              experience={exp}
              index={index}
              bullets={t.bullets[exp.id as keyof typeof t.bullets] || [exp.description]}
              uniqueBadge={t.uniqueBadge}
              freelanceLabel={t.freelance}
              fullTimeLabel={t.fullTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  experience,
  index,
  bullets,
  uniqueBadge,
  freelanceLabel,
  fullTimeLabel,
}: {
  experience: ExperienceItem;
  index: number;
  bullets: string[];
  uniqueBadge: string;
  freelanceLabel: string;
  fullTimeLabel: string;
}) {
  const isEven = index % 2 === 0;
  const isForensic = experience.company === "Digital Forensics";

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
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-800 border-4 border-blue-600 rounded-full z-10" />

      <div className={`ml-20 md:ml-0 md:w-5/12 ${isEven ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:-translate-y-1">
          <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:justify-end" : ""}`}>
            <Briefcase className="w-5 h-5 text-blue-600 shrink-0" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {experience.role}
            </h3>
          </div>

          <div className={`flex items-center gap-2 mb-2 flex-wrap ${isEven ? "md:justify-end" : ""}`}>
            <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
              {experience.company}
            </span>
            {isForensic && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 rounded-full border border-purple-300/50 dark:border-purple-700/50">
                <Award className="w-3 h-3" />
                {uniqueBadge}
              </span>
            )}
          </div>

          <div className={`flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4 ${isEven ? "md:justify-end" : ""}`}>
            <Calendar className="w-4 h-4" />
            {experience.period}
          </div>

          <div className={`mb-4 ${isEven ? "md:justify-end" : ""}`}>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              {experience.type === "freelance" ? freelanceLabel : fullTimeLabel}
            </span>
          </div>

          <ul className="space-y-2">
            {bullets.map((bullet, i) => (
              <li
                key={i}
                className="text-slate-600 dark:text-slate-400 leading-relaxed flex gap-2"
              >
                <span className="text-blue-500 mt-1 shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden md:block md:w-5/12" />
    </motion.div>
  );
}
