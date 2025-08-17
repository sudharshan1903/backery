import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChefHat, Users, Coffee, Award } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
         {
       icon: ChefHat,
       number: '15',
       label: 'Expert Bakers',
       description: 'Skilled pastry chefs and bakers.'
     },
     {
       icon: Coffee,
       number: '50+',
       label: 'Menu items',
       description: 'Unique cakes and pastries.'
     }
  ]

     const features = [
     {
       icon: '🍰',
       title: 'Freshly baked',
       description: 'Every item is baked fresh daily using premium ingredients and traditional recipes.'
     },
     {
       icon: '🌈',
       title: 'Various flavors',
       description: 'From classic vanilla to exotic fruit combinations, we offer a wide range of flavors.'
     },
     {
       icon: '🧁',
       title: 'Custom designs',
       description: 'Personalized cakes and pastries designed to match your special occasion perfectly.'
     },
     {
       icon: '🍯',
       title: 'Quality ingredients',
       description: 'We use only the finest ingredients, including organic options and natural sweeteners.'
     }
   ]

     const desserts = [
     { name: 'Seasonal macarons', emoji: '🍪', category: 'Desserts' },
     { name: 'Berry cupcakes', emoji: '🧁', category: 'Desserts' },
     { name: 'Raisin cake', emoji: '🍰', category: 'Desserts' },
     { name: 'White chocolate cake', emoji: '🍫', category: 'Desserts' },
     { name: 'Cherry cake', emoji: '🍒', category: 'Desserts' }
   ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-bonbon-cream to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
                             <h2 className="text-4xl lg:text-5xl font-serif font-bold text-bonbon-dark mb-6 text-shadow">Our Story</h2>
              <h3 className="text-bonbon-pink font-medium mb-2">Welcome to Arunasbakehouse!</h3>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-bonbon-dark mb-6">
                We bake and provide{' '}
                <span className="text-gradient">catering services</span> at events
              </h2>
            </motion.div>

                         <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={inView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.4, duration: 0.6 }}
               className="text-lg text-bonbon-brown mb-8"
             >
               We take pride in creating exceptional baked goods that bring joy to every celebration. Our team of skilled bakers uses traditional techniques combined with modern creativity to deliver unforgettable taste experiences.
             </motion.p>

             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={inView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.6, duration: 0.6 }}
               className="text-bonbon-brown mb-8"
             >
               From intimate gatherings to grand celebrations, we ensure every cake and pastry is crafted with attention to detail and the highest standards of quality.
             </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Read More
            </motion.button>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                                 className="bg-white rounded-2xl p-8 shadow-lg card-hover glow-effect"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-bonbon-pink to-bonbon-gold rounded-full flex items-center justify-center shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-bonbon-dark mb-1">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-bonbon-brown mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-bonbon-brown">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-bonbon-dark mb-6">
              Our sweets bring{' '}
              <span className="text-gradient">joy to your life</span>
            </h2>
                         <p className="text-lg text-bonbon-brown max-w-3xl mx-auto">
               Our passion for baking goes beyond just creating delicious treats. We believe every dessert tells a story and creates lasting memories for our customers and their loved ones.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                                 <div className="text-6xl mb-4 animate-bounce-gentle group-hover:scale-110 transition-transform duration-300 sparkle">
                   {feature.icon}
                 </div>
                <h3 className="text-xl font-serif font-bold text-bonbon-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-bonbon-brown">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Desserts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {desserts.map((dessert, index) => (
              <motion.div
                key={dessert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg card-hover"
              >
                <div className="text-4xl mb-3 animate-float">
                  {dessert.emoji}
                </div>
                <h4 className="font-serif font-bold text-bonbon-dark mb-1">
                  {dessert.name}
                </h4>
                <p className="text-sm text-bonbon-brown">
                  {dessert.category}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <Award className="w-5 h-5 text-bonbon-pink" />
            <span className="text-bonbon-dark font-medium">
              info@example.com
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
