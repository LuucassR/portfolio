import { motion } from "framer-motion";
import { Code2, Rocket, Shield } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../data/translations";

const icons = [Code2, Rocket, Shield];

export default function ValueProposition() {
  const { language } = useLanguage();
  const t = translations[language].valueProp;

  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-900 relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cards.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
