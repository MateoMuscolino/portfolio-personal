import React from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import StarBackground from '@/components/StarBackground'
import NavBar from '@/components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* Modo oscuro */}
      <ThemeToggle/>
      {/* Efectos del Background */}
      <StarBackground/>
      {/* Navbar */}
      <NavBar/>
      {/* Contenido Principal */}
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
      </main>
      {/* Footer */}
    </div>
  )
}

export default Home
