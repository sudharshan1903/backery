import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Services from './components/Services'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-bonbon-cream">
      <Header 
        isScrolled={isScrolled}
      />
      
      <main>
        <Hero />
        <Products />
        <About />
        <Services />
        <Blog />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
