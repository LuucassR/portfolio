import "./App.css";
import ResumeComponent from "../components/Cv";
import TypeStartInfo from "../components/typeStartInfo";
import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";
import {
  Code,
  Terminal,
  Github,
  Linkedin,
  Mail,
  Smartphone,
  ChevronDown,
  Layers,
  Zap,
  Newspaper,
  Send,
} from "lucide-react";

// Hook para detectar cuando un elemento entra en el viewport (Scroll Reveal)
export const useOnScreen = (
  options?: IntersectionObserverInit
): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
};

// --- Componentes UI ---

// Componente Wrapper para animaciones al hacer scroll
export const RevealOnScroll = ({ children, delay = 0 }: any) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Secciones Principales ---

// 1. Hero Section con efecto de escritura
const Hero = ({ onScrollToDemo, onScrollToCv }: any) => {
  const [text, setText] = useState("");
  const fullText = "import { Portfolio } from './DevCreativo';";

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-16"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="text-center max-w-4xl z-10">
        <div className="mb-6 inline-block">
          <span className="bg-blue-500/10 text-blue-400 px-4 py-1 rounded-full text-sm font-mono border border-blue-500/20 animate-pulse">
            Disponible para trabajar
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Hola, soy
          <div className="mt-5">
            <TypeStartInfo />
          </div>
        </h1>

        <div className="bg-slate-900 p-4 rounded-lg shadow-2xl inline-block border border-slate-800 mb-8 max-w-full overflow-hidden">
          <code className="text-emerald-400 font-mono text-sm md:text-lg">
            <span className="text-purple-400">const</span> developer ={" "}
            <span className="text-yellow-300">{"{"}</span>
            <br className="md:hidden" /> role:{" "}
            <span className="text-green-300">'Front-End'</span>,
            <br className="md:hidden" /> stack:{" "}
            <span className="text-green-300">['React', 'Tailwind', ...]</span>
            <span className="text-yellow-300">{"}"}</span>;
          </code>
        </div>

        <p className="text-slate-400 max-w-screen text-lg md:text-xl sm:text-lg mx-auto mb-10 leading-relaxed">
          Transformo ideas en experiencias web interactivas , especializado en
          crear interfaces limpias, rápidas y escalables.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 justify-self-center">
          <button
            onClick={onScrollToDemo}
            className="bg-blue-600 max-w-fit hover:bg-blue-700 justify-center cursor-pointer text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-blue-500/25"
          >
            <Code size={20} />
            <p>Demos</p>
          </button>
          <button
            onClick={onScrollToCv}
            className="bg-[#ff713e] max-w-fit sm:max-w-screen justify-center cursor-pointer hover:bg-[#ff581b] text-center text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-[#ff581b]/50"
          >
            <Newspaper size={18} />
            <p>Cv</p>
          </button>
          <a
            href="#contact"
            className="bg-slate-800 justify-center max-w-fit hover:bg-slate-700 text-white text-center px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 border border-slate-700"
          >
            <Mail size={20} />
            <p>Contactar</p>
          </a>
        </div>
      </div>

      <div className="absolute bottom-5 animate-bounce text-slate-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

// 2. Zona Interactiva (El corazón del portafolio)
const InteractivePlayground = () => {
  const [btnColor, setBtnColor] = useState("blue");
  const [btnSize, setBtnSize] = useState("small");
  const [hasShadow, setHasShadow] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  const colors: Record<string, string> = {
    blue: "bg-blue-500 hover:bg-blue-600",
    emerald: "bg-emerald-500 hover:bg-emerald-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    rose: "bg-rose-500 hover:bg-rose-600",
  };

  const sizes: Record<string, string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-6 py-2 text-base",
    large: "px-8 py-4 text-lg",
  };

  return (
    <section id="demo" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Zap className="text-yellow-400" />
              Playground React
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <RevealOnScroll delay={200}>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 h-full">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <Layers size={18} className="text-blue-400" /> Configuración
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="text-slate-400 text-sm mb-3 block">
                    Color
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {Object.keys(colors).map((c) => (
                      <button
                        key={c}
                        onClick={() => setBtnColor(c)}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          btnColor === c
                            ? "border-white scale-110"
                            : "border-transparent opacity-50"
                        }`}
                        style={{
                          backgroundColor:
                            c === "blue"
                              ? "#3b82f6"
                              : c === "emerald"
                              ? "#10b981"
                              : c === "purple"
                              ? "#a855f7"
                              : "#f43f5e",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 text-sm mb-3 block">
                    Tamaño
                  </label>
                  <div className="flex bg-slate-900 rounded-lg p-1 w-full sm:w-fit">
                    {Object.keys(sizes).map((s) => (
                      <button
                        key={s}
                        onClick={() => setBtnSize(s)}
                        className={`flex-1 sm:flex-none px-4 py-2 rounded-md text-xs font-bold transition-all ${
                          btnSize === s
                            ? "bg-slate-700 text-white"
                            : "text-slate-500"
                        }`}
                      >
                        {s.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div
                    onClick={() => setHasShadow(!hasShadow)}
                    className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${
                      hasShadow ? "bg-blue-500" : "bg-slate-700"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        hasShadow ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </div>
                  <label className="text-slate-300 text-sm">Sombra</label>
                </div>
              </div>

              <div className="mt-8 p-10 bg-slate-900/50 rounded-lg border border-dashed border-slate-700 flex flex-col items-center justify-center gap-4">
                <button
                  onClick={() => setClickCount((p) => p + 1)}
                  className={`text-white font-semibold rounded-lg transition-all duration-300 ${
                    colors[btnColor]
                  } ${sizes[btnSize]} ${
                    hasShadow ? "shadow-lg shadow-blue-500/20" : ""
                  }`}
                >
                  Clicks: {clickCount}
                </button>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-slate-800 h-full flex flex-col">
              <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-black/20">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-2 text-xs text-slate-400 font-mono">
                  ExmapleComponentPreview.jsx
                </span>
              </div>
              <div className="p-6 overflow-x-auto flex-1 font-mono text-sm relative group">
                <div className="absolute top-4 right-4 text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Solo lectura
                </div>
                <pre>
                  <code className="text-gray-300">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-yellow-300">DemoComponent</span> = ()
                    ={">"} {"{"} {"\n"}
                    {"  "}const [count, setCount] ={" "}
                    <span className="text-blue-300">useState</span>({clickCount}
                    );{"\n\n"}
                    {"  "}return ({"\n"}
                    <span className="text-blue-300"> {`   <Button`}</span>
                    {"\n"}
                    <span className="text-blue-300">
                      {`     color="${btnColor}"`}
                      {"\n"}
                      {`     size="${btnSize}`}
                      {"\n"}
                      {`     shadow="${hasShadow}"`}
                      {"\n"}
                      {`     "onClick={(prevCopunt) => prevCount + 1}`}
                      {"\n"}
                      {"    >"}
                      {"\n"}
                      {`     Clicks: ${clickCount}`}
                      {"\n"}
                      {"    </Button>"}
                      {"\n   "});
                      {"\n"}
                      {"};"}
                      
                    </span>
                  </code>
                </pre>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

const Cv = () => {
  return (
    <section
      id="cv"
      className="py-20 px-4 bg-linear-to-t from-slate-700/70 to-bg-slate-900/50 relative overflow-hidden"
    >
      <RevealOnScroll delay={200}>
        <ResumeComponent />
      </RevealOnScroll>
    </section>
  );
};

// 4. Sección de Contacto
const Contact = () => {
  const form = useRef<any>(null);
  const [status, setStatus] = useState(""); // para mostrar mensajes de éxito/error

  const sendEmail = (e: any) => {
    e.preventDefault();
    setStatus("enviando");

    emailjs
      .sendForm(
        "service_kyx6uok", // Reemplaza con el tuyo
        "template_y5ay96r", // Reemplaza con el tuyo
        form.current,
        "TsFTR12HDnn6acXuL" // Reemplaza con el tuyo
      )
      .then(
        () => {
          setStatus("exito");
          form.current.reset(); // Limpia el formulario
        },
        (error) => {
          setStatus("error");
          console.log("Fallo...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-linear-to-t from-black to-slate-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-500/5 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Creamos algo increíble?
        </h2>
        <p className="text-slate-400 text-lg mb-10">
          Tenes un proyecto en mente? Contáctame.
        </p>

        {/* Formulario mejorado */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-md mx-auto space-y-4 mb-12"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Tu Nombre"
            required
            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Tu Email"
            required
            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
          />
          <textarea
            name="message"
            placeholder="Tu Mensaje (Puedes dejar tu numero aqui o contactarme por whatsapp y te respondere lo antes posible)"
            required
            // @ts-ignore
            rows="4"
            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
          />

          <button
            type="submit"
            disabled={status === "enviando"}
            className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50"
          >
            {status === "enviando" ? (
              "Enviando..."
            ) : (
              <>
                <Send size={20} /> Enviar Mensaje
              </>
            )}
          </button>

          {status === "exito" && (
            <p className="text-green-400 mt-2">¡Mensaje enviado con éxito!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-2">
              Hubo un error, intenta de nuevo.
            </p>
          )}
        </form>

        {/* Tus enlaces originales como respaldo */}
        <div className="flex flex-wrap justify-center gap-4 max-w-lg mx-auto">
          <a
            href="https://wa.me/3425594220"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
          >
            <Smartphone size={20} /> WhatsApp
          </a>
        </div>

        {/* Redes Sociales */}
        <div className="mt-12 flex justify-center gap-8 border-t border-slate-800 pt-8">
          <a
            href="https://github.com/LuucassR"
            className="text-slate-500 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-rossi-052926389/"
            className="text-slate-500 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

// --- Componente Principal ---

export default function App() {
  // Función para scroll suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen w-full overflow-y-auto overflow-x-hidden bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Navegación Flotante */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-white/5 z-50 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-white flex items-center gap-2">
            <Terminal size={24} className="text-blue-500" />
            <span>
              Dev<span className="text-blue-500">Portafolio</span>
            </span>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-blue-400 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="hover:text-blue-400 transition-colors hidden md:block"
            >
              Playground
            </button>
            <button
              onClick={() => scrollToSection("cv")}
              className="hover:text-blue-400 transition-colors hidden md:block"
            >
              CV
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-400 transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main>
        <Hero
          onScrollToDemo={() => scrollToSection("demo")}
          onScrollToCv={() => scrollToSection("cv")}
        />
        <InteractivePlayground />
        <Cv />
        <Contact />
      </main>

      {/* Footer simple */}
      <footer className="bg-black py-6 text-center text-slate-600 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Creado con React & Tailwind.
          Inspirado en The Odin Project. <br />
          --- By Rossi Lucas ---
        </p>
      </footer>
    </div>
  );
}
