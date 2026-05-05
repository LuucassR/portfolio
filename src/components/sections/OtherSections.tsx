import { motion } from "framer-motion";
import { portfolioData } from "../../data/data";
import { Code2, MonitorPlay, Zap, Mail, Phone, MapPin, Linkedin } from "lucide-react";

interface Service {
  title: string;
  description: string;
}

export function SkillsAndServices() {
  const icons = [Code2, MonitorPlay, Zap];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Skills */}
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

        {/* Services */}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-900 dark:text-white">Let's </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
              Connect
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects.
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Get in Touch
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Email</p>
                  <a 
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Phone</p>
                  <a 
                    href={`tel:${portfolioData.personal.phone}`}
                    className="text-slate-900 dark:text-white font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Location</p>
                  <p className="text-slate-900 dark:text-white font-medium">
                    {portfolioData.personal.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Profile & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Professional Profile
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
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Connect with me professionally:
                </p>
                <div className="flex flex-wrap gap-3">
                      <a
                        key={portfolioData.personal.social[0].name}
                        href={portfolioData.personal.social[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 rounded-lg transition-colors"
                      >
                        <Linkedin className="w-6 h-6" />
                        <span className="text-sm font-medium">{portfolioData.personal.social[0].name}</span>
                      </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
              <p className="text-sm text-slate-700 dark:text-slate-300 text-center">
                <span className="font-semibold">Currently available</span> for freelance projects and full-time opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
