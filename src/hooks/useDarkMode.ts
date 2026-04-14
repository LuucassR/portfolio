// src/hooks/useDarkMode.ts
import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    // 1. Revisa si hay una preferencia guardada
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    // 2. Si no, usa tema claro por defecto (independiente de preferencia del sistema)
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return [isDark, setIsDark] as const;
};
