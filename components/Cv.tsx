import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import Typewriter from "typewriter-effect";

// Componente auxiliar para manejar el delay aleatorio por cada texto
const Type = ({ text, delay = 100, speed = 2, className = "" }: any) => {
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
      email: "lucassrossi12@gmail.com",
      phone: "+54 342 559-4220",
      linkedin: "/lucas-rossi-052926389",
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
      "Mi objetivo es dar una vision general de mis habilidades como programador de páginas web, busco que se sietan seguros con que el trabajo va a ser hecho de manera excelente y demostrar que valgo la pena, busco ampliar siempre mis conocimientos y trabajar en todos los proyectos que pueda",
    technologies: [
      "React",
      "JavaScript(ES6+)",
      "TypeScript",
      "Tailwind",
      "HTML5",
      "CSS",
      "Git/Github",
      "SQLite",
      "Postgres",
      "Node.js",
      "Express.js",
    ],
    exprerince: {
      python: {
        text: "Mi formación en Python consistió en un programa intensivo de 9 secciones de actividades prácticas. Durante este proceso, logré consolidar el uso de estructuras de datos, lógica de programación y la aplicación de conceptos fundamentales para resolver problemas mediante código limpio y eficiente.",
      },

      dataCience: {
        text: "A través de 10 problemas y un proyecto final, me introduje en la programación de bajo nivel utilizando C. Este curso fue fundamental para establecer las bases de mi carrera, enseñándome sobre tecnologías actuales e Inteligencia Artificial, pero sobre todo, a desarrollar un pensamiento crítico para resolver problemas técnicos.",
      },
      dataBases: {
        text: "He desarrollado una sólida capacidad para gestionar información de manera efectiva. Gracias a mi formación y al trabajo en 'The Odin Project', domino el manejo de PostgreSQL, incluyendo la creación, administración, relación y consulta de datos para integrar esta información en aplicaciones funcionales.",
      },
    },
    projects: {
      python: {
        text: "Tras completar 9 secciones de actividades prácticas, culminé mi certificación con un RPG de terminal. Este proyecto integra diversos conceptos avanzados: gestión de personajes y enemigos, un sistema de experiencia y estadísticas, habilidades únicas y un enfrentamiento con un jefe final. Es una muestra integral de mi capacidad para estructurar código y manejar lógica de videojuegos en Python.",
        finalProjectUrl: "https://github.com/LuucassR/pyhton-final-project",
      },
      dataCience: {
        text: "Como cierre de mi etapa en programación de bajo nivel, diseñé una página web que representa mi punto de partida en el desarrollo. Aunque es un proyecto inicial, la mantengo como una métrica de mi evolución técnica y de mi capacidad para adoptar nuevas tecnologías desde cero.",
        finalProjectUrl: "https://github.com/LuucassR/data-cience-final-project",
      },
      dataBases: {
        text: "Este proyecto demuestra mi habilidad para estructurar bases de datos relacionales y realizar consultas complejas. Está enfocado en cómo administrar, modificar y buscar elementos de manera óptima para luego presentar esos datos de forma clara al usuario final.",
        finalProjectUrl: "https://github.com/LuucassR/sql-final-project",
      },
    },
  };

  return (
    <div className="max-w-212.5 mx-auto my-10 bg-white p-12 shadow-lg border border-gray-200 text-slate-800 font-sans leading-tight">
      {/* HEADER */}
      <div className="flex flex-col justify-between items-start border-b-2 border-gray-100 pb-10 mb-8">
        <div>
          <h1 className="text-5xl font-serif tracking-widest text-gray-900">
            <Type text={data.name} speed={80} />
          </h1>
          <p className="text-xl mb-3 tracking-[0.2em] text-gray-500 mt-2 lowercase">
            <Type text={data.title} delay={500} />
          </p>
        </div>
        <div className="flex flex-col space-y-1 text-sm w-full text-gray-600">
          <div className="flex items-center justify-end center gap-3">
            <a
              className="text-slate-900 text-lg font-medium transition-all duration-300 border-b border-transparent hover:border-slate-900 hover:text-black"
              href="mailto:lucassrossi12@gmail.com?"
            >
              {" "}
              <Type text={data.contact.email} speed={50} delay={800} />
            </a>
            <Mail size={14} />
          </div>
          <div className="flex items-center justify-end gap-3">
            <a
              className="text-slate-900 text-lg font-medium transition-all duration-300 border-b border-transparent hover:border-slate-900 hover:text-black"
              href="https://wa.me/3425594220"
            >
              <Type text={data.contact.phone} speed={50} delay={1200} />
            </a>{" "}
            <Phone size={14} />
          </div>
          <div className="flex items-center justify-end gap-3">
            <a
              className="text-slate-900 text-lg font-medium transition-all duration-300 border-b border-transparent hover:border-slate-900 hover:text-black"
              href="https://www.linkedin.com/in/lucas-rossi-052926389/"
            >
              <Type text={data.contact.linkedin} speed={50} delay={1500} />{" "}
            </a>
            <Linkedin size={14} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-5 space-y-12">
          <section>
            <h2 className="text-2xl font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-400">
              EDUCACION
            </h2>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-4">
                <Type
                  text={edu.asignation}
                  className="text-[20px] font-bold"
                  delay={200}
                />
                <div className="text-[18px] text-gray-600 italic">
                  <Type text={edu.school} delay={100} />
                </div>
                <div className="text-[16px] text-gray-600 italic">
                  <Type text={edu.year} delay={100} />
                </div>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-400">
              HABILIDADES
            </h2>
            <ul className="space-y-2">
              {data.skills.map((skill, i) => (
                <li key={i} className="text-[16px] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  <Type text={skill} delay={200 * i} speed={100} />
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-400">
              LENGUAJES
            </h2>
            <ul className="space-y-2">
              {data.languages.map((language, i) => (
                <li key={i} className="text-[16px] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  <Type text={language} delay={200 * i} speed={100} />
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-400">
              CERTIFICADOS (Links)
            </h2>
            <ul className="space-y-2">
              {data.certificates.map((certificate, i) => (
                <li key={i} className="text-[16px] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  <Type
                    className="text-slate-900 font-medium transition-all duration-300 border-b border-transparent hover:border-slate-900 hover:text-black"
                    text={certificate}
                    delay={200 * i}
                    speed={100}
                  />
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-400">
              Stack Tecnologico
            </h2>
            <div className="text-[20px] leading-relaxed text-gray-700 italic">
              <ul className="grid grid-cols-2 space-y-2">
                {data.technologies.map((technology, i) => (
                  <li key={i} className="text-[16px] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    <Type text={technology} delay={200 * i} speed={100} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-600">
              Perfil Profesional
            </h2>
            <div className="text-[16px] leading-5 text-gray-700 italic">
              <Type text={data.profile} delay={1500} speed={20} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-600">
              Experiencia
            </h2>
            <div className="text-[16px] leading-5 text-gray-700 italic">
              <Type
                text={data.exprerince.python.text}
                delay={1500}
                speed={20}
              />
              <br />
              <Type
                text={data.exprerince.dataBases.text}
                delay={1500}
                speed={20}
              />
              <br />
              <Type
                text={data.exprerince.dataCience.text}
                delay={1500}
                speed={20}
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-[0.15em] border-b border-gray-300 pb-1 mb-4 text-gray-600">
              Proyectos
            </h2>
            <div className="text-[16px] leading-5 text-gray-700 italic">
              <Type text={data.projects.python.text} delay={1500} speed={20} />
              <a className="text-slate-900 underline font-medium transition-all duration-300 border-b border-transparent hover:border-slate-900 hover:text-black" href={data.projects.python.finalProjectUrl}><Type text={"Python Final Project"} delay={1500} speed={20} /></a>
              <br />
              <Type text={data.projects.dataBases.text} delay={1500} speed={20} />
              <a className="text-slate-900 underline font-medium transition-all duration-300 border-b border-transparent hover:border-slate-900 hover:text-black" href={data.projects.dataBases.finalProjectUrl}><Type text={"Data Bases Final Project"} delay={1500} speed={20} /></a>
              <br />
              <Type text={data.projects.dataCience.text} delay={1500} speed={20} />
              <a className="text-slate-900 underline font-medium transition-all duration-300 border-b border-transparent hover:border-slate-900 hover:text-black" href={data.projects.dataCience.finalProjectUrl}><Type text={"Data Cience Final Project"} delay={1500} speed={20} /></a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
