import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-slate-500" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as "es" | "en")}
        className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer border border-slate-200 dark:border-slate-800 rounded px-1"
      >
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
