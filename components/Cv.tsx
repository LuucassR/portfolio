import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import Typewriter from "typewriter-effect";

// Componente auxiliar para manejar el delay aleatorio por cada texto
const Type = ({ text, delay = 200, speed = 40, className = "" }: any) => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    // Generamos un delay base + un extra random para que no sea uniforme
    const timer = setTimeout(
      () => setStart(true),
      delay + Math.random() * 1000
    );
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={className}>
      {start ? (
        <Typewriter
          options={{
            delay: speed,
            cursor: "", // Quitamos el cursor para que no ensucie el diseño
            autoStart: true,
            loop: false,
          }}
          onInit={(typewriter) => {
            typewriter.typeString(text).start();
          }}
        />
      ) : (
        <span className="opacity-0">{text}</span> // Mantiene el espacio mientras espera
      )}
    </span>
  );
};

const ResumeComponent = () => {
  const data = {
    name: "Rossi Lucas",
    title: "Front-End developer",
    contact: {
      email: "lucassrossi12@mail.com",
      phone: "+54 342 559-4220",
      linkedin: "linkedin.com/in/lucas-rossi-052926389/",
    },
    education: [
      {
        asignation: "Naturales",
        school: "Centro Educativo Jerarquicos",
        year: "2018-2023",
      },
    ],
    skills: [
      "Resolucion de problemas",
      "Pensamiento Critico",
      "Trabajo en equipo",
      "Responsabilidad",
    ],
    languages: ["Español ( Nativo )", "Ingles (Avanzado)"],
    certificates: [
      "<a href='https://cs50.harvard.edu/certificates/73b360d7-e6bc-480d-987c-181d4f085e4e.png?size=letter'>CS50'X</a>: Computer Science",
      "<a href='https://cs50.harvard.edu/certificates/73b360d7-e6bc-480d-987c-181d4f085e4e.png?size=letter'>CS50'X</a>: Data Bases",
      "<a href='https://cs50.harvard.edu/certificates/73b360d7-e6bc-480d-987c-181d4f085e4e.png?size=letter'>CS50'X</a>: Programming With Python",
    ],
    profile:
      "Mi objetivo es dar una vision general de mis habilidades como programador de paguinas web, busco que se sietan seguros con que el trabajo va a ser echo de manera exelente y demostrar que valgo la pena, busco ampliar siempre mis conocimientos y trabajar en todos los poryectos que pueda",
  };

  return (
    <div className="max-w-212.5 min-h-275 mx-auto my-10 bg-white p-12 shadow-lg border border-gray-200 text-slate-800 font-sans leading-tight">
      {/* HEADER */}
      <div className="flex justify-between items-start border-b-2 border-gray-100 pb-10 mb-8">
        <div>
          <h1 className="text-4xl font-serif tracking-widest text-gray-900">
            <Type text={data.name} speed={80} />
          </h1>
          <p className="text-lg tracking-[0.2em] text-gray-500 mt-2 lowercase">
            <Type text={data.title} delay={500} />
          </p>
        </div>
        <div className="text-right space-y-1 text-sm text-gray-600">
          <div className="flex items-center justify-end gap-3">
            <Type text={data.contact.email} delay={800} /> <Mail size={14} />
          </div>
          <div className="flex items-center justify-end gap-3">
            <Type text={data.contact.phone} delay={1200} /> <Phone size={14} />
          </div>
          <div className="flex items-center justify-end gap-3">
            <Type text={data.contact.linkedin} delay={1500} />{" "}
            <Linkedin size={14} />
          </div>
        </div>
      </div>

      <div className="flex gap-10">
        {/* COLUMNA IZQUIERDA */}
        <div className="w-1/3 space-y-12">
          <section>
            <h2 className="text-sm font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-400">
              EDUCACION
            </h2>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-4">
                <Type
                  text={edu.asignation}
                  className="text-[13px] font-bold"
                  delay={200 * i}
                />
                <div className="text-[12px] text-gray-600 italic">
                  <Type text={edu.school} delay={400 * i} />
                </div>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-sm font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-400">
              HABILIDADES
            </h2>
            <ul className="space-y-2">
              {data.skills.map((skill, i) => (
                <li key={i} className="text-[12px] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  <Type text={skill} delay={100 * i} speed={20} />
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-400">
              LENGUAJES
            </h2>
            <ul className="space-y-2">
              {data.languages.map((language, i) => (
                <li key={i} className="text-[12px] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  <Type text={language} delay={100 * i} speed={20} />
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-400">
              CERTIFICADOS (Links)
            </h2>
            <ul className="space-y-2">
              {data.certificates.map((certificate, i) => (
                <li key={i} className="text-[12px] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  <Type className="text-slate-900 font-medium transition-all duration-300 border-b border-transparent hover:border-slate-900 hover:text-black" text={certificate} delay={100 * i} speed={20} />
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="w-2/3 space-y-10">
          <section>
            <h2 className="text-sm font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-400">
              PERFIL PROFECIONAL
            </h2>
            <div className="text-[12px] leading-relaxed text-gray-700 italic">
              <Type text={data.profile} delay={1000} speed={10} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
