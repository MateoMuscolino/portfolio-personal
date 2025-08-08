import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const ThemeToggleImproved = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="group relative flex items-center justify-center w-11 h-11 rounded-full 
                     bg-background/60 backdrop-blur-xl border border-border/30 
                     hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20
                     transition-all duration-500 ease-out
                     focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background
                     active:scale-95"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {/* Efecto de brillo de fondo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Ícono con animación */}
            <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                {isDarkMode ? (
                    <Sun className="h-5 w-5 text-yellow-400 drop-shadow-sm transition-colors duration-300 group-hover:text-yellow-300" />
                ) : (
                    <Moon className="h-5 w-5 text-slate-600 drop-shadow-sm transition-colors duration-300 group-hover:text-primary" />
                )}
            </div>

            {/* Efecto de partículas en hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1 left-2 w-0.5 h-0.5 bg-primary rounded-full animate-pulse" />
                <div className="absolute top-2 right-1 w-0.5 h-0.5 bg-primary rounded-full animate-pulse delay-100" />
                <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-primary rounded-full animate-pulse delay-200" />
            </div>
        </button>
    );
};

export default ThemeToggleImproved;
