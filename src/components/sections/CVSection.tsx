import {
  Download,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Languages,
} from "lucide-react";
import { motion } from "framer-motion";
// Importamos el JSON que proporcionaste
import cvData from "../../data/mi_cv-en.json";

export default function CVSection() {
  return (
    <section id="cv" className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Curriculum Vitae
            </h2>
            <div className="w-20 h-1 bg-blue-600 rounded"></div>
          </div>

          <div className="flex gap-4">
            <a
              href="./mi_cv-es.pdf"
              download
              className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-5 py-2.5 rounded-xl font-semibold hover:border-blue-600 transition-all shadow-sm"
            >
              <Download size={18} />
              <span>Español (PDF)</span>
            </a>
            <a
              href="./mi_cv-en.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg"
            >
              <Download size={18} />
              <span>English (PDF)</span>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
        >
          {/* Encabezado Principal */}
          <div className="border-b border-slate-100 dark:border-slate-800 pb-8 mb-8">
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              {cvData.basics.name}
            </h3>
            <p className="text-xl text-blue-600 font-medium mb-4">
              {cvData.basics.headline}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              <span>📍 {cvData.basics.location}</span>
              <span>📞 {cvData.basics.phone}</span>
              <a
                href={`mailto:${cvData.basics.email}`}
                className="hover:text-blue-600 underline"
              >
                {cvData.basics.email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Columna Lateral (Habilidades e Idiomas) */}
            <div className="space-y-10">
              <section>
                <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white">
                  <Award size={18} className="text-blue-600" />
                  <h4 className="font-bold uppercase tracking-wider text-sm">
                    Habilidades Clave
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cvData.sections.skills.items.map((skill: any) => (
                    <div key={skill.id} className="w-full">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-blue-500">
                          {skill.proficiency}
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-blue-600 h-full"
                          style={{
                            width:
                              skill.proficiency === "Advanced" ? "90%" : "65%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white">
                  <Languages size={18} className="text-blue-600" />
                  <h4 className="font-bold uppercase tracking-wider text-sm">
                    Idiomas
                  </h4>
                </div>
                <div className="space-y-2">
                  {cvData.sections.languages.items.map((lang: any) => (
                    <div key={lang.id} className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">
                        {lang.language}
                      </span>
                      <span className="font-medium">{lang.fluency}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Columna Principal (Certificaciones y Proyectos) */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <div className="flex items-center gap-2 mb-6 text-blue-600">
                  <GraduationCap size={22} />
                  <h4 className="font-bold text-xl text-slate-900 dark:text-white">
                    Certificaciones Harvard
                  </h4>
                </div>
                <div className="space-y-8 border-l-2 border-slate-100 dark:border-slate-800 ml-3 pl-6">
                  {cvData.sections.certifications.items.map((cert: any) => (
                    <div key={cert.id} className="relative">
                      <div className="absolute -left-8.25 top-1.5 w-3 h-3 rounded-full bg-blue-600" />
                      <h5 className="font-bold text-slate-900 dark:text-white">
                        {cert.title}{" "}
                      </h5>
                      <p className="text-sm text-blue-600 mb-2">
                        {cert.issuer} • {cert.date}
                      </p>
                      <div
                        className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: cert.description }}
                      />
                      {cert.website.url && (
                        <a
                          href={cert.website.url}
                          target="_blank"
                          className="inline-flex items-center gap-1 text-xs text-blue-500 mt-2 hover:underline"
                        >
                          Ver Credencial <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 mb-6 text-blue-600">
                  <Briefcase size={22} />
                  <h4 className="font-bold text-xl text-slate-900 dark:text-white">
                    Proyectos Principales
                  </h4>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {cvData.sections.projects.items.map((proj: any) => (
                    <div
                      key={proj.id}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-bold">{proj.name}</h5>
                        <span className="text-[10px] font-mono bg-blue-100 dark:bg-blue-900 text-blue-600 px-2 py-0.5 rounded">
                          {proj.period}
                        </span>
                      </div>
                      <div
                        className="text-sm text-slate-600 dark:text-slate-400 mb-3"
                        dangerouslySetInnerHTML={{ __html: proj.description }}
                      />
                      {proj.website.url && (
                        <a
                          href={proj.website.url}
                          className="text-xs text-blue-500 font-semibold flex items-center gap-1"
                        >
                          Demo en vivo <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
