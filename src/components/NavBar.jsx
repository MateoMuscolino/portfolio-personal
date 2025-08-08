import React, { useEffect, useState } from "react";
import { cn } from "./lib/utils";
import { Menu, X } from 'lucide-react';
import useLanguage from "../context/useLanguage";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const navItems = [
  { name: { en: "Home", es: "Inicio" }, href: "#hero" },
  { name: { en: "About", es: "Sobre mí" }, href: "#about" },
  { name: { en: "Skills", es: "Habilidades" }, href: "#skills" },
  { name: { en: "Projects", es: "Proyectos" }, href: "#projects" },
  { name: { en: "Contact", es: "Contacto" }, href: "#contact" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // revenir scroll cuando el menu está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={cn(
          "fixed w-full z-40 transition-all duration-500",
          "bg-background/70 backdrop-blur-xl shadow-lg border-b border-border/20",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            className="text-xl font-bold flex items-center group"
            href="#hero"
          >
            <span className="relative">
              <span className="text-glow text-foreground group-hover:text-primary transition-colors duration-300">
                Mateo Muscolino
              </span>
              <span className="text-primary/80 ml-2 text-base font-normal">
                Portfolio
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center space-x-1">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full",
                    "text-foreground/70 hover:text-primary transition-all duration-300",
                    "hover:bg-primary/5 hover:backdrop-blur-sm",
                    "group"
                  )}
                >
                  <span className="relative z-10">{item.name[language]}</span>
                  <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
                </a>
              ))}
            </nav>

            {/* Separador */}
            <div className="w-px h-6 bg-border/30 mx-6" />

            {/* Controles */}
            <div className="flex items-center gap-1">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* boton menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300 relative z-50"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* menu mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-xl z-40 flex flex-col items-center justify-center lg:hidden">
          <div className="flex flex-col space-y-8 text-xl items-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-105 transform"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name[language]}
              </a>
            ))}
            <div className="flex items-center gap-4 mt-8">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
