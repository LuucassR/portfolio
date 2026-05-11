import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { portfolioData } from "../../data/data";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../data/translations";

function TypewriterText({ text, speed = 40 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      {!done && (
        <span className="inline-block w-[3px] h-[1em] bg-cyan-400 ml-1 align-middle animate-pulse" />
      )}
    </span>
  );
}

function AvatarLR() {
  return (
    <div className="relative w-28 h-28 mx-auto mb-8">
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-600 via-cyan-400 to-purple-500 animate-spin-slow opacity-80"
        style={{ animation: "spin-slow 4s linear infinite", padding: "3px" }}
      >
        <div className="w-full h-full rounded-full bg-slate-900 dark:bg-slate-950" />
      </div>
      <div className="absolute inset-[3px] rounded-full bg-slate-900 dark:bg-slate-950 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
        <span className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 select-none">
          LR
        </span>
      </div>
    </div>
  );
}

function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const spacing = 35;
    const radius = 1.5;
    const maxDist = 80;

    ctx.clearRect(0, 0, w, h);

    for (let x = spacing; x < w; x += spacing) {
      for (let y = spacing; y < h; y += spacing) {
        const dx = mouseRef.current.x - x;
        const dy = mouseRef.current.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let offsetX = 0;
        let offsetY = 0;
        let opacity = 0.15;

        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 8;
          offsetX = (dx / dist) * force || 0;
          offsetY = (dy / dist) * force || 0;
          opacity = 0.3;
        }

        ctx.beginPath();
        ctx.arc(x + offsetX, y + offsetY, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${opacity})`;
        ctx.fill();
      }
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      draw();
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
      <DotGrid />

      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />

      <div className="max-w-4xl text-center z-10 relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-blue-600 dark:text-blue-400 font-semibold mb-4 tracking-wide text-lg"
        >
          {t.hero.greeting}
        </motion.p>

        <AvatarLR />

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight">
          <span className="text-slate-900 dark:text-white">
            <TypewriterText text={portfolioData.personal.name} speed={50} />
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 inline-block mt-2">
            {t.hero.roleText}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium mt-2 mb-8 max-w-2xl mx-auto"
        >
          {t.hero.valueProp}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white rounded-full bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
          >
            {t.hero.ctaProjects}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="./cv-en-final.pdf"
            download="Lucas_Rossi_CV_EN.pdf"
            className="group inline-flex items-center justify-center px-8 py-4 font-medium rounded-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
          >
            <Download className="w-4 h-4 mr-2" />
            {t.hero.ctaCv}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center justify-center gap-6 md:gap-10 mb-8"
        >
          {t.hero.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 md:gap-10">
              <div className="text-center">
                <div className="text-2xl font-bold font-mono-custom text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-mono-custom">
                  {stat.label}
                </div>
              </div>
              {i < t.hero.stats.length - 1 && <div className="w-px h-10 bg-slate-300 dark:bg-slate-600" />}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {portfolioData.personal.location}
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            {portfolioData.personal.email}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 dark:bg-slate-300 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
