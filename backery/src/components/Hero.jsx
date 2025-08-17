import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

const Hero = () => {
  const floatingElements = [
    { icon: '🍰', delay: 0, position: 'top-20 left-10' },
    { icon: '🧁', delay: 0.5, position: 'top-40 right-20' },
    { icon: '🍪', delay: 1, position: 'bottom-40 left-20' },
    { icon: '🍩', delay: 1.5, position: 'bottom-20 right-10' },
  ]

  const handleNavClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bonbon-cream via-pink-50 to-purple-50">
      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: element.delay, duration: 1 }}
          className={`absolute text-4xl animate-bounce-gentle ${element.position} hidden lg:block`}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-bonbon-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-bonbon-purple rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-serif font-bold text-bonbon-dark mb-6 leading-tight"
            >
              Handmade{' '}
              <span className="text-gradient">mini cupcakes</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-bonbon-brown mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Our passion for baking goes beyond just creating delicious treats. We believe every dessert tells a story and creates lasting memories for our customers and their loved ones.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('#services')}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('#products')}
                className="btn-secondary"
              >
                View Our Creations
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex justify-center lg:justify-start space-x-8 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-bonbon-pink">500+</div>
                <div className="text-sm text-bonbon-brown">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bonbon-purple">50+</div>
                <div className="text-sm text-bonbon-brown">Unique Flavors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bonbon-gold">5★</div>
                <div className="text-sm text-bonbon-brown">Customer Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Cupcake Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Cupcake */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-2xl opacity-30"></div>
                <div className="relative bg-white rounded-full w-full h-full flex items-center justify-center shadow-2xl">
                  <div className="text-8xl lg:text-9xl animate-float">
                    🧁
                  </div>
                </div>
              </motion.div>

              {/* Floating Cupcakes */}
              {[
                { emoji: '🍰', position: 'absolute -top-4 -left-4', delay: 0.8 },
                { emoji: '🍪', position: 'absolute -top-4 -right-4', delay: 1.0 },
                { emoji: '🍩', position: 'absolute -bottom-4 -left-4', delay: 1.2 },
                { emoji: '🎂', position: 'absolute -bottom-4 -right-4', delay: 1.4 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: item.delay, duration: 0.5 }}
                  className={`${item.position} text-4xl animate-bounce-gentle`}
                >
                  {item.emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-bonbon-pink rounded-full flex justify-center cursor-pointer"
          onClick={() => handleNavClick('#products')}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-bonbon-pink rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
