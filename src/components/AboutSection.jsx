import { Briefcase, Code, FolderKanban, GraduationCap, Rocket, User } from 'lucide-react'
import React from 'react';
import useLanguage from "../context/useLanguage";

const AboutSection = () => {
  const { language } = useLanguage();
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-size-3xl md:text-4xl font-bold mb-12 text-center'>
          {language === "en" ? "About" : "Sobre"} <span className='text-primary'>{language === "en" ? "Me" : "mí"}</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>
              {language === "en" ? "Passionate Web Developer" : "Desarrollador Web Apasionado"}
            </h3>
            <p className='text-muted-foreground'>
              {language === "en"
                ? "I'm Mateo Muscolino, a web developer from Argentina, passionate about building interactive and user-friendly web applications."
                : "Soy Mateo Muscolino, desarrollador web de Argentina, apasionado por crear aplicaciones web interactivas y fáciles de usar."}
            </p>
            <p className='text-muted-foreground'>
              {language === "en"
                ? "I'm currently studying programming at UTN and working on personal projects to strengthen my skills in JavaScript, React, Node.js, and MongoDB. I enjoy learning by doing, and I'm always looking for new challenges that push me to grow as a developer. My goal is to become a full-stack developer and contribute to real-world projects that make a positive impact."
                : "Actualmente estudio programación en la UTN y trabajo en proyectos personales para fortalecer mis habilidades en JavaScript, React, Node.js y MongoDB. Me gusta aprender haciendo y siempre busco nuevos desafíos que me impulsen a crecer como desarrollador. Mi objetivo es convertirme en desarrollador full-stack y contribuir en proyectos reales que generen un impacto positivo."}
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>
                {language === "en" ? "Get In Touch" : "Contáctame"}
              </a>
              <a href="poner link cv" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 '>
                {language === "en" ? "Download CV" : "Descargar CV"}
              </a>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <GraduationCap className='h-6  w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>
                    {language === "en" ? "Education" : "Educación"}
                  </h4>
                  <p className='text-muted-foreground'>
                    {language === "en"
                      ? "Currently studying Programming at UTN, where I’m building strong foundations in algorithms, databases, and web development."
                      : "Actualmente estudio la Tecnicatura Universitaria en Programación de la UTN, donde estoy construyendo bases sólidas en algoritmos, bases de datos y desarrollo web."}
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <FolderKanban className='h-6  w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>
                    {language === "en" ? "Projects" : "Proyectos"}
                  </h4>
                  <p className='text-muted-foreground'>
                    {language === "en"
                      ? "I create personal projects to apply what I learn and explore new tools. They help me practice real-world scenarios and grow as a developer."
                      : "Realizo proyectos personales para aplicar lo que aprendo y explorar nuevas herramientas. Me ayudan a practicar escenarios reales y crecer como desarrollador."}
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Rocket className='h-6  w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>
                    {language === "en" ? "Goals" : "Metas"}
                  </h4>
                  <p className='text-muted-foreground'>
                    {language === "en"
                      ? "My goal is to become a full-stack developer, collaborate on real projects, and keep learning every day to deliver high-quality web applications."
                      : "Mi meta es convertirme en desarrollador full-stack, colaborar en proyectos reales y seguir aprendiendo cada día para entregar aplicaciones web de alta calidad."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection