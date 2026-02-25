import { motion } from "framer-motion";
import { portfolioData } from "../../data/data";
import { Code2, MonitorPlay, Zap, Send } from "lucide-react";

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
                key={skill.name}
                className="px-6 py-3 glass-card rounded-xl font-medium"
              >
                {skill.name}
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
      className="py-24 px-6 bg-primary-600 dark:bg-primary-900 text-white text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">
          ¿Listo para empezar tu próximo proyecto?
        </h2>
        <p className="text-primary-100 text-lg mb-10">
          Estoy disponible para oportunidades freelance y contratos a largo
          plazo.
        </p>
        <form
          className="max-w-md mx-auto space-y-4 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Nombre"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <textarea
            rows={4}
            placeholder="Mensaje"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
          ></textarea>
          <button className="w-full bg-white text-primary-600 font-bold py-3 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
            Enviar Mensaje <Send className="w-4 h-4" />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
