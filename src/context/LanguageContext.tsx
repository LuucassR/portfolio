import React, { createContext, useContext, useState } from "react";

// Definimos la interfaz que el Switcher espera encontrar
interface LanguageContextType {
  language: "es" | "en";
  setLanguage: (lang: "es" | "en") => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"es" | "en">("es");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return context;
};
