import { Briefcase, Code, FolderKanban, GraduationCap, Rocket, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      {""}
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-size-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'> Me </span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Passionate Web Developer</h3>
            <p className='text-muted-foreground'>
              I'm Mateo Muscolino, a web developer from Argentina, passionate about building interactive and user-friendly web applications.
            </p>
            <p className='text-muted-foreground'>
              I'm currently studying programming at UTN and working on personal projects to strengthen my skills in JavaScript, React, Node.js, and MongoDB. I enjoy learning by doing, and I'm always looking for new challenges that push me to grow as a developer.
              My goal is to become a full-stack developer and contribute to real-world projects that make a positive impact.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'> Get In Touch</a>
              <a href="poner link cv" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 '> Download CV</a>

            </div>


          </div>


          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <GraduationCap className='h-6  w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'> Education</h4>
                  <p className='text-muted-foreground'>
                    Currently studying Programming at UTN, where I’m building strong foundations in algorithms, databases, and web development.
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
                  <h4 className='font-semibold text-lg'> Projects</h4>
                  <p className='text-muted-foreground'>
                    I create personal projects to apply what I learn and explore new tools. They help me practice real-world scenarios and grow as a developer.
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
                  <h4 className='font-semibold text-lg'> Goals</h4>
                  <p className='text-muted-foreground'>
                    My goal is to become a full-stack developer, collaborate on real projects, and keep learning every day to deliver high-quality web applications.
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
