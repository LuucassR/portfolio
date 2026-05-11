import { motion } from "framer-motion";
import { portfolioData } from "../../data/data";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../data/translations";
import { Code2, MonitorPlay, Zap, Mail, Phone, MapPin, Linkedin, Github, ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
}

export function SkillsAndServices() {
  const icons = [Code2, MonitorPlay, Zap];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Stack Tecnológico</h2>
          <div className="flex flex-wrap gap-4">
            {portfolioData.skills.map((skill) => (
              <div
                key={skill.category}
                className="px-6 py-3 glass-card rounded-xl font-medium"
              >
                {skill.category}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Servicios</h2>
          <div className="space-y-6">
            {portfolioData.services.map((service: Service, i: number) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={service.title} className="flex gap-4">
                  <div className="mt-1 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-600 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const linkedinUrl = portfolioData.personal.social.find((s) => s.name === "LinkedIn")?.url || "";
  const githubUrl = "https://github.com/luucassr";

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-linear-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 dark:from-slate-900 dark:via-blue-900/20 dark:to-cyan-900/10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono-custom text-slate-400 dark:text-slate-500 tracking-widest uppercase">
            {t.sectionNumber}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            <span className="text-slate-900 dark:text-white">{t.title} </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
              {t.titleAccent}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {t.getInTouch}
            </h3>

            <div className="space-y-4">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md transition-all hover:border-blue-300 dark:hover:border-blue-700 group"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t.email}</p>
                  <p className="text-slate-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {portfolioData.personal.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md transition-all hover:border-green-300 dark:hover:border-green-700 group"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t.phone}</p>
                  <p className="text-slate-900 dark:text-white font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {portfolioData.personal.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-700/50">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t.location}</p>
                  <p className="text-slate-900 dark:text-white font-medium">
                    {portfolioData.personal.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {t.profile}
            </h3>

            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-700/50">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {portfolioData.personal.name}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {portfolioData.personal.role}
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {portfolioData.personal.bio}
                </p>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                  {t.connect}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 rounded-lg transition-all hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg transition-all hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
              <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                {t.readyCta}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t.availability}
              </p>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all text-sm font-medium hover:scale-105"
              >
                {t.sendEmail}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
