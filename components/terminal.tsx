import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
const globalWindow = window as unknown as Record<string, any>;

const TRANSLATIONS = {
  en: {
    greet:
      "> Initializing system... <br> > Select your preferred language: [es] Español / [en] English",
    yes: "> Great choice! <br> > I'm Rossi Lucas, a Junior Front-End Developer. <br> Type 'help' to see available commands.",
    help: "> Available commands: [about] [contact] [social] [certificates] [language] [clear] [restart]",
    about:
      "> <strong>Executive Profile:</strong> <br> > Hi! I`m Lucas Rossi, a 19-year-old front-end developer passionate about programming. I currently work with technologies like HTML, CSS, JavaScript, TypeScript, and React, using Tailwind CSS  to build modern responsive interfaces, and Git to manage my projects. I also have experience with Node.js and am learning Express.js with PostgresSQL to move into full-stack developmer. My goal is to continue learning and apply my knowledge of databases and FastAPI to expand my skillset. I’m always looking to improve and take on new challenges to keep growing as a developer, and with my knowledges in python i want to learn automatisations with AI ",
    contact:
      "> Contact: <br> > Email: <button onclick=\"window.handleSecureLink('email', 'mailto:lucassrossi12@gmail.com')\" class=\"underline text-yellow-400 cursor-pointer\">lucassrossi12@gmail.com</button> <br> > Phone: <button onclick=\"window.handleSecureLink('phone', 'tel:+543425594220')\" class=\"underline text-yellow-400 cursor-pointer\">+54 342 559-4220</button>",
    certificates:
      '<span class="text-blue-400"># Connecting to postgres_db...</span><br> > 1. CS50P (Python) <br> > 2. CS50 SQL <br> > 3. CS50X (Computer Science)',
    language:
      '<span class="text-blue-400"># Querying languages...</span><br> > <span class="text-yellow-400">Spanish:</span> Native / Bilingual <br> > <span class="text-yellow-400">English:</span> Advanced Professional Command',
    social:
      "> GitHub: https://github.com/LuucassR <br> > LinkedIn: https://www.linkedin.com/in/lucas-rossi-052926389/",
    error: "> Command not found. Type 'help'.",
    no: "> Feel free to explore. Type 'help'.",
  },
  es: {
    greet:
      "> Iniciando sistema... <br> > Selecciona tu idioma: [es] Español / [en] English",
    yes: "> ¡Excelente elección! <br> > Soy Rossi Lucas, Desarrollador Front-End Junior. <br> Escribe 'help' para ver los comandos disponibles.",
    help: "> Comandos disponibles: [about] [contact] [social] [certificates] [language] [clear] [restart]",
    about:
      "¡Hola! Soy Lucas Rossi, un desarrollador front-end de 19 años apasionado por la programación. Actualmente, trabajo con tecnologías como HTML, CSS, JavaScript, TypeScript y React, utilizando Tailwind CSS para crear interfaces modernas y responsivas ademas de que tambien se Git para manejar mis projectos. También tengo experiencia con Node.js y estoy aprendiendo Express.js para integrarme al desarrollo full-stack. Mi objetivo es seguir aprendiendo y aplicar mis conocimientos en bases de datos y FastAPI para mejorar mis habilidades. Siempre busco mejorar y enfrentar nuevos desafíos para seguir creciendo como desarrollador, y con mi conocimiento en python me encantaria aprender sobre automatizaciones con IA's",
    contact:
      "> Contacto: <br> > Email: <button onclick=\"window.handleSecureLink('email', 'mailto:lucassrossi12@gmail.com')\" class=\"underline text-yellow-400 cursor-pointer\">lucassrossi12@gmail.com</button> <br> > Tel: <button onclick=\"window.handleSecureLink('phone', 'tel:+543425594220')\" class=\"underline text-yellow-400 cursor-pointer\">+54 342 559-4220</button>",
    certificates:
      '<span class="text-blue-400"># Conectando a postgres_db...</span><br> > 1. CS50P (Python) <br> > 2. CS50 SQL <br> > 3. CS50X (Ciencias de la Computación)',
    language:
      '<span class="text-blue-400"># Consultando idiomas...</span><br> > <span class="text-yellow-400">Español:</span> Nativo / Bilingüe <br> > <span class="text-yellow-400">Inglés:</span> Dominio Profesional Avanzado (Advanced Professional Command)',
    social:
      "> GitHub: https://github.com/LuucassR <br> > LinkedIn: https://www.linkedin.com/in/lucas-rossi-052926389/",
    error: "> Comando no encontrado. Escribe 'help'.",
    no: "> Explora con libertad. Escribe 'help'.",
  },
};

export default function TerminalInteracting() {
  const [lang, setLang] = useState(null); // null indica que estamos preguntando el idioma
  const [history, setHistory] = useState(["greet"]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) {
      cleanAllCursors();
    }
  }, [isTyping]);

  const cleanAllCursors = () => {
    const cursors = document.querySelectorAll(".Typewriter__cursor");
    cursors.forEach((c: any) => {
      if (c) {
        c.style.display = "none";
        c.style.opacity = "0";
      }
      c.classList.remove("Typewriter__cursor"); // Evita que se vuelvan a encontrar
    });
    setIsTyping(false);
  };

  globalWindow.handleSecureLink = (target: any) => {
    const msg =
      lang === "es"
        ? "¿Abrir aplicación externa?"
        : "Open external application?";
    if (window.confirm(msg)) window.location.href = target;
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      const val: any = inputValue.toLowerCase().trim();

      if (lang === null) {
        if (val === "es" || val === "en") {
          setLang(val);
          setHistory(["yes"]);
        } else {
          setHistory(["greet"]);
        }
      }
      else {
        if (val === "clear") setHistory(["yes"]);
        else if (val === "restart") {
          setLang(null);
          setHistory(["greet"]);
        } else if (
          [
            "about",
            "contact",
            "certificates",
            "social",
            "help",
            "language",
            "yes",
            "no",
          ].includes(val)
        ) {
          setHistory((prev) => [...prev, val]);
        } else {
          setHistory((prev) => [...prev, "error"]);
        }
      }

      setInputValue("");
      setIsTyping(true);
    }
  };

  const renderStep = (step: string, index: number) => {
    const isLast = index === history.length - 1;
    const currentTranslations: any = TRANSLATIONS[lang || "en"];
    const text = currentTranslations[step] || `> ${step}`;

    return (
      <div key={`${step}-${index}`} className="mb-4">
        {index > 0 && <p className="text-white opacity-50">{`> ${step}`}</p>}
        {isLast ? (
          <Typewriter
            onInit={(t) => {
              t.typeString(text)
                .start()
                .callFunction(() => cleanAllCursors());
            }}
            options={{ delay: 20, cursor: "|" }}
          />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: text }} />
        )}
      </div>
    );
  };

  return (
    <div className="text-[#71e200] font-semibold text-xl font-mono p-10 bg-black min-h-screen">
      {history.map((step, index) => renderStep(step, index))}
      {!isTyping && (
        <div className="flex mt-2">
          <span>{">"} </span>
          <input
            autoFocus
            className="bg-transparent border-none outline-none text-[#71e200] ml-2 w-full caret-[#71e200]"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />
        </div>
      )}
    </div>
  );
}
