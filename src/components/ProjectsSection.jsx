import { ArrowRight, GithubIcon } from "lucide-react";
import React from "react";
import useLanguage from "../context/useLanguage";

const projects = [
  {
    id: 1,
    title: { en: "Library CRUD", es: "CRUD de Biblioteca" },
    description: {
      en: "Book Management CRUD Project. It allows users to create, read, update, and delete books through a simple web interface.",
      es: "Proyecto CRUD para gestión de libros. Permite crear, leer, actualizar y eliminar libros mediante una interfaz web sencilla.",
    },
    image: "/projects/Screenshot_1.png",
    tags: ["React", "MongoDB", "Express", "Node.js"],
    githubUrl: "https://github.com/MateoMuscolino/library-mernstack",
  },

  {
    id: 2,
    title: { en: "Notes Manager", es: "Gestor de Notas" },
    description: {
      en: "ThinkBoard is a fullstack app to manage notes efficiently, with rate limiting and a clean interface",
      es: "ThinkBoard es una app fullstack para gestionar notas eficientemente, con limitación de peticiones y una interfaz limpia.",
    },
    image: "/projects/Screenshot_3.png",
    tags: ["React", "MongoDB", "Express", "Node.js", "TailwindCSS"],
    githubUrl: "https://github.com/MateoMuscolino/mernstack-notes",
  },
];

const sectionTitles = {
  en: "Featured Projects",
  es: "Proyectos Destacados",
};
const sectionDescription = {
  en: "Here are some of the projects I'm most proud of — each one taught me something new.",
  es: "Aquí hay algunos de los proyectos de los que más orgulloso estoy, cada uno me enseñó algo nuevo.",
};
const githubButton = {
  en: "Check My GitHub",
  es: "Ver mi GitHub",
};

const ProjectsSection = () => {
  const { language } = useLanguage();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {sectionTitles[language].split(" ")[0]}{" "}
          <span className="text-primary">
            {sectionTitles[language].split(" ")[1]}
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {sectionDescription[language]}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary text-secondary-foreground bg-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title[language]}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description[language]}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/MateoMuscolino"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {githubButton[language]} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;