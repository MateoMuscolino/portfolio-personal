import React from "react";
import useLanguage from "../context/useLanguage";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-background/80 hover:bg-primary/10 transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
      title={language === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
    >
      <Globe className="h-5 w-5" />
      <span className="font-semibold">{language === "en" ? "ES" : "EN"}</span>
    </button>
  );
};

export default LanguageToggle;