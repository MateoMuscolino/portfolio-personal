import { useState } from "react";
import React from 'react'
import { cn } from "./lib/utils";
import useLanguage from "../context/useLanguage";
import { Code2, Palette, Database, Server, FileText, GitBranch, Terminal, Package, Globe, Users, Layers, Zap } from 'lucide-react';

const skills = [
    { name: 'HTML/CSS', level: 85, category: 'frontend', icon: Code2 },
    { name: 'JavaScript', level: 70, category: 'frontend', icon: FileText },
    { name: 'React', level: 75, category: 'frontend', icon: Layers },
    { name: 'Tailwind CSS', level: 70, category: 'frontend', icon: Palette },
    { name: 'TypeScript (learning)', level: 40, category: 'frontend', icon: Code2 },
    { name: 'Node.js', level: 70, category: 'backend', icon: Server },
    { name: 'Express', level: 70, category: 'backend', icon: Zap },
    { name: 'MongoDB', level: 70, category: 'backend', icon: Database },
    { name: 'Mongoose', level: 65, category: 'backend', icon: Database },
    { name: 'Git & GitHub', level: 75, category: 'tools', icon: GitBranch },
    { name: 'Visual Studio Code', level: 85, category: 'tools', icon: Terminal },
    { name: 'Postman', level: 70, category: 'tools', icon: Package },
    { name: 'Docker (basics)', level: 60, category: 'tools', icon: Package },
    { name: 'English (reading/writing)', level: 85, category: 'other', icon: Globe },
    { name: 'Teamwork & Communication', level: 80, category: 'other', icon: Users }
];

// traduccion de las categorias
const categoriesLabels = {
    en: { all: "all", frontend: "frontend", backend: "backend", tools: "tools", other: "other" },
    es: { all: "todas", frontend: "frontend", backend: "backend", tools: "herramientas", other: "otras" }
};

const sectionTitles = {
    en: "My Skills",
    es: "Mis Habilidades"
};

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const { language } = useLanguage();

    const filteredSkills = skills.filter(
        (skill => activeCategory === 'all' || skill.category === activeCategory)
    );

    // para mostrar las categorías traducidas
    const categories = ['all', 'frontend', 'backend', 'tools', 'other'];

    return (
        <section
            id='skills'
            className='py-24 px-4 relative bg-secondary/30'
        >
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    {sectionTitles[language].split(" ")[0]} <span className='text-primary'>{sectionTitles[language].split(" ")[1]}</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-secondary/70 text-foreground hover:bg-secondary'
                            )}
                        >
                            {categoriesLabels[language][category]}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredSkills.map((skill, key) => {
                        const IconComponent = skill.icon;
                        return (
                            <div
                                key={key}
                                className='bg-card p-6 rounded-lg shadow-xs card-hover transition-transform duration-300 hover:scale-105'
                            >
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='p-2 bg-primary/10 rounded-lg'>
                                        <IconComponent className='w-6 h-6 text-primary' />
                                    </div>
                                    <h3 className='font-semibold text-lg'>{skill.name}</h3>
                                </div>

                                <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                                    <div
                                        className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
                                        style={{ width: skill.level + '%' }}
                                    />
                                </div>

                                <div className='text-right mt-1'>
                                    <span className='text-sm text-muted-foreground'>{skill.level}%</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
