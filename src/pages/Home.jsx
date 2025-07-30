import React from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import StarBackground from '@/components/StarBackground'
import NavBar from '@/components/NavBar'
import HeroSection from '../components/HeroSection'

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
      </main>
      {/* Footer */}
    </div>
  )
}

export default Home
