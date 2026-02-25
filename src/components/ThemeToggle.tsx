import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 transition-all hover:scale-110"
      aria-label="Alternar modo oscuro"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
