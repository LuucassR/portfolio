import "./App.css"
import { useState, useEffect, useRef } from 'react';
import { Code, Terminal, ExternalLink, Github, Linkedin, Mail, Smartphone, ChevronDown, Layers, Zap, Layout, Monitor } from 'lucide-react';

// --- Hooks Personalizados ---

// Hook para detectar cuando un elemento entra en el viewport (Scroll Reveal)
const useOnScreen = (options: any) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Solo animar una vez
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
};

// --- Componentes UI ---

// Componente Wrapper para animaciones al hacer scroll
const RevealOnScroll = ({ children, delay = 0 }: any) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface projectCard {
  title: string;
  desc: string;
  tags: string[];
  color: string;
}

// Tarjeta de Proyecto
const ProjectCard = ({ title, desc, tags, color } :projectCard) => (
  <div className="group relative bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
    <div className={`h-2 w-full ${color}`}></div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
        <ExternalLink size={20} className="text-slate-400 group-hover:text-white" />
      </div>
      <p className="text-slate-400 mb-6 text-sm leading-relaxed">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-mono bg-slate-900 text-blue-300 px-2 py-1 rounded border border-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// --- Secciones Principales ---

// 1. Hero Section con efecto de escritura
const Hero = ({ onScrollToDemo }: any) => {
  const [text, setText] = useState('');
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
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-16">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      
      <div className="text-center max-w-4xl z-10">
        <div className="mb-6 inline-block">
          <span className="bg-blue-500/10 text-blue-400 px-4 py-1 rounded-full text-sm font-mono border border-blue-500/20 animate-pulse">
            Disponible para trabajar
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Hola, soy <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">Tu Nombre</span>.
        </h1>
        
        <div className="bg-slate-900 p-4 rounded-lg shadow-2xl inline-block border border-slate-800 mb-8 max-w-full overflow-hidden">
          <code className="text-emerald-400 font-mono text-sm md:text-lg">
            <span className="text-purple-400">const</span> developer = <span className="text-yellow-300">{"{"}</span>
            <br className="md:hidden"/> role: <span className="text-green-300">'Front-End'</span>,
            <br className="md:hidden"/> stack: <span className="text-green-300">['React', 'Tailwind']</span>
            <span className="text-yellow-300">{"}"}</span>;
          </code>
        </div>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformo ideas en experiencias web interactivas. Graduado de 
          <span className="text-white font-semibold mx-1">The Odin Project</span>, 
          especializado en crear interfaces limpias, rápidas y escalables.
        </p>

        <div className="flex gap-4 justify-center">
          <button 
            onClick={onScrollToDemo}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-blue-500/25"
          >
            <Code size={20} />
            Ver mis habilidades
          </button>
          <a href="#contact" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 border border-slate-700">
            <Mail size={20} />
            Contactar
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-slate-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

// 2. Zona Interactiva (El corazón del portafolio)
const InteractivePlayground = () => {
  const [btnColor, setBtnColor] = useState('blue');
  const [btnSize, setBtnSize] = useState('md');
  const [hasShadow, setHasShadow] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  // Mapeo de estilos para Tailwind
  // Usamos JSDoc para definir el tipo y evitar errores de indexación en TS/Linters
  /** @type {Record<string, string>} */
  const colors = {
    blue: 'bg-blue-500 hover:bg-blue-600',
    emerald: 'bg-emerald-500 hover:bg-emerald-600',
    purple: 'bg-purple-500 hover:bg-purple-600',
    rose: 'bg-rose-500 hover:bg-rose-600'
  };

  /** @type {Record<string, string>} */
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const codeString = `
<Button
  color="${btnColor}"
  size="${btnSize}"
  shadow={${hasShadow}}
  onClick={() => count + 1}
>
  Clicks: ${clickCount}
</Button>`;

  return (
    <section id="demo" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Zap className="text-yellow-400" />
              Demo Interactiva de React
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              No solo digo que sé React, aquí puedes verlo en acción. Interactúa con los controles para cambiar el estado del componente y observa cómo el código se actualiza en tiempo real.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Panel de Control */}
          <RevealOnScroll delay={200}>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <Layers size={18} className="text-blue-400" /> 
                Configuración (Props & State)
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Color (Prop)</label>
                  <div className="flex gap-2">
                    {Object.keys(colors).map(c => (
                      <button
                        key={c}
                        onClick={() => setBtnColor(c)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${btnColor === c ? 'border-white scale-110' : 'border-transparent opacity-50'}`}
                        style={{ backgroundColor: c === 'blue' ? '#3b82f6' : c === 'emerald' ? '#10b981' : c === 'purple' ? '#a855f7' : '#f43f5e' }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Tamaño (Prop)</label>
                  <div className="flex bg-slate-900 rounded-lg p-1 w-fit">
                    {Object.keys(sizes).map(s => (
                      <button
                        key={s}
                        onClick={() => setBtnSize(s)}
                        className={`px-4 py-1 rounded-md text-sm transition-all ${btnSize === s ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        {s.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div 
                    onClick={() => setHasShadow(!hasShadow)}
                    className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${hasShadow ? 'bg-blue-500' : 'bg-slate-700'}`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${hasShadow ? 'translate-x-6' : 'translate-x-0'}`} />
                  </div>
                  <label className="text-slate-300 text-sm">Sombra Activada (Boolean)</label>
                </div>
              </div>

              {/* Área de Renderizado */}
              <div className="mt-8 p-8 bg-slate-900/50 rounded-lg border border-dashed border-slate-700 flex flex-col items-center justify-center gap-4 min-h-40">
                <p className="text-slate-500 text-xs mb-2">Vista Previa del Componente:</p>
                <button
                  onClick={() => setClickCount(p => p + 1)}
                  className={`
                    text-white font-semibold rounded-lg transition-all duration-300
                    ${colors[btnColor]}
                    ${sizes[btnSize]}
                    ${hasShadow ? 'shadow-lg shadow-current' : ''}
                    active:scale-95
                  `}
                >
                  Clicks: {clickCount}
                </button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Panel de Código */}
          <RevealOnScroll delay={400}>
            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-slate-800 h-full flex flex-col">
              <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-black/20">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-2 text-xs text-slate-400 font-mono">ComponentPreview.jsx</span>
              </div>
              <div className="p-6 overflow-x-auto flex-1 font-mono text-sm relative group">
                <div className="absolute top-4 right-4 text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Solo lectura
                </div>
                <pre>
                  <code className="text-gray-300">
                    <span className="text-purple-400">const</span> <span className="text-yellow-300">DemoComponent</span> = () ={'>'} {'{'} {'\n'}
                    {'  '}const [count, setCount] = <span className="text-blue-300">useState</span>({clickCount});{'\n\n'}
                    {'  '}return ({'\n'}
                    <span className="text-blue-300">    {codeString}</span>
                    {'\n  '});{'\n'}
                    {'}'};
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

// 3. Grid de Proyectos
const Projects = () => (
  <section className="py-20 px-4 max-w-6xl mx-auto">
    <RevealOnScroll>
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
        <Layout className="text-blue-400" />
        Proyectos Destacados
      </h2>
    </RevealOnScroll>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <RevealOnScroll delay={100}>
        <ProjectCard 
          title="E-Commerce Dashboard" 
          desc="Panel de administración completo con gráficos, modo oscuro y gestión de usuarios usando React Router y Context API."
          tags={['React', 'Tailwind', 'Recharts']}
          color="bg-emerald-500"
        />
      </RevealOnScroll>
      <RevealOnScroll delay={200}>
        <ProjectCard 
          title="Weather App v2" 
          desc="Aplicación del clima que consume la API de OpenWeatherMap. Incluye geolocalización y caché local."
          tags={['API Fetch', 'Promises', 'CSS Grid']}
          color="bg-blue-500"
        />
      </RevealOnScroll>
      <RevealOnScroll delay={300}>
        <ProjectCard 
          title="Task Manager SPA" 
          desc="Gestor de tareas estilo Kanban con funcionalidad Drag & Drop y persistencia en LocalStorage."
          tags={['React DnD', 'Hooks', 'Vite']}
          color="bg-purple-500"
        />
      </RevealOnScroll>
    </div>
  </section>
);

// 4. Sección de Contacto
const Contact = () => (
  <section id="contact" className="py-20 px-4 bg-linear-to-t from-black to-slate-900 relative overflow-hidden">
    {/* Fondo decorativo */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-500/5 blur-3xl pointer-events-none rounded-full"></div>
    
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <RevealOnScroll>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Creamos algo increíble?</h2>
        <p className="text-slate-400 text-lg mb-10">
          Estoy buscando nuevas oportunidades como Desarrollador Front-End. 
          Si tienes un proyecto en mente o simplemente quieres charlar sobre tecnología, contáctame.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <a 
            href="mailto:tuemail@ejemplo.com"
            className="flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
          >
            <Mail className="text-slate-900" />
            Enviar Correo
          </a>
          <a 
            href="https://wa.me/1234567890"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-green-500/20"
          >
            <Smartphone />
            WhatsApp
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-8 border-t border-slate-800 pt-8">
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={24}/></a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={24}/></a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Monitor size={24}/></a>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

// --- Componente Principal ---

export default function App() {
  // Función para scroll suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen w-full overflow-y-auto overflow-x-hidden bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Navegación Flotante */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-white/5 z-50 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-white flex items-center gap-2">
            <Terminal size={24} className="text-blue-500" />
            <span>Dev<span className="text-blue-500">Portafolio</span></span>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors">Inicio</button>
            <button onClick={() => scrollToSection('demo')} className="hover:text-blue-400 transition-colors hidden md:block">Playground</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contacto</button>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main>
        <Hero onScrollToDemo={() => scrollToSection('demo')} />
        <InteractivePlayground />
        <Projects />
        <Contact />
      </main>

      {/* Footer simple */}
      <footer className="bg-black py-6 text-center text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Creado con React & Tailwind. Inspirado en The Odin Project.</p>
      </footer>
    </div>
  );
}