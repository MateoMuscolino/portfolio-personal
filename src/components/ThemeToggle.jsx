import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'


const ThemeToggle = () => {
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
    }, [])

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
    }

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background/80 hover:bg-primary/10 transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
            {isDarkMode ? <Sun className='h-6 w-6 text-yellow-300' /> : <Moon className='h-6 w-6 text-blue-900' />}
        </button>
    )
}

export default ThemeToggle
