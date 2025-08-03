import { ArrowRight, GithubIcon } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Library CRUD",
    description:
      "Book Management CRUD Project. It allows users to create, read, update, and delete books through a simple web interface.",
    image: "/projects/Screenshot_1.png",
    tags: ["React", "MongoDB", "Express", "Node.js"],
    githubUrl: "https://github.com/MateoMuscolino/library-mernstack",
  },

  {
    id: 2,
    title: "Notes Manager",
    description:
      "ThinkBoard is a fullstack app to manage notes efficiently, with rate limiting and a clean interface",
    image: "/projects/Screenshot_3.png",
    tags: ["React", "MongoDB", "Express", "Node.js", "TailwindCSS"],
    githubUrl: "https://github.com/MateoMuscolino/mernstack-notes",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I'm most proud of — each one taught me
          something new.
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
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary text-secondary-foreground bg-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
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
            <a href="https://github.com/MateoMuscolino" className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank">
                Check My GitHub <ArrowRight size={16}/>
            </a>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
