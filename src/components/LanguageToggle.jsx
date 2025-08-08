import React from "react";
import useLanguage from "../context/useLanguage";
import { Globe } from 'lucide-react';

const LanguageToggleImproved = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="group relative flex items-center gap-2 px-4 py-2.5 rounded-full 
               bg-background/60 backdrop-blur-xl border border-border/30
               hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20
               transition-all duration-500 ease-out
               focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background
               active:scale-95"
      aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
      title={language === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
    >
      {/* efecto de brillo de fondo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* contenido del botón */}
      <div className="relative z-10 flex items-center gap-2">
        <Globe className="h-4 w-4 text-foreground/70 group-hover:text-primary transition-all duration-300 group-hover:rotate-12" />
        <span className="font-medium text-sm text-foreground/80 group-hover:text-primary transition-colors duration-300">
          {language === "en" ? "ES" : "EN"}
        </span>
      </div>

      {/* indicador de idioma activo */}
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse" />
    </button>
  );
};

export default LanguageToggleImproved;
