import { createContext } from "react";

export interface LanguageContextType {
  language: "es" | "en";
  setLanguage: (lang: "es" | "en") => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);
