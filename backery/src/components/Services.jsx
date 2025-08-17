import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Users, Building, Star } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      name: 'Weddings',
      percentage: 80,
      icon: Calendar,
      description: 'Beautiful wedding cakes and catering services'
    },
    {
      name: 'Birthday parties',
      percentage: 90,
      icon: Users,
      description: 'Custom birthday cakes and party desserts'
    },
    {
      name: 'Corporate events',
      percentage: 88,
      icon: Building,
      description: 'Professional catering for business events'
    }
  ]

  const testimonials = [
    {
      name: 'Peter Bowman',
      role: 'Creative Director',
      content: 'Freshly baked',
      description: 'The cakes were absolutely perfect for our wedding. Every guest raved about the taste and presentation.',
      
    },
    {
      name: 'Sarah Johnson',
      role: 'Event Planner',
      content: 'Various flavors',
      description: 'Arunasbakehouse delivered exceptional quality for our corporate event. The variety of flavors was impressive.',
      
    },
    {
      name: 'Michael Chen',
      role: 'Wedding Coordinator',
      content: 'Custom designs',
      description: 'They created exactly what we envisioned for our special day. The attention to detail was outstanding.',
      
    },
    {
      name: 'Emma Davis',
      role: 'Corporate Manager',
      content: 'Quality ingredients',
      description: 'Our team loved the pastries. You can taste the difference that quality ingredients make.',
      
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
                     <h2 className="text-4xl lg:text-5xl font-serif font-bold text-bonbon-dark mb-6 text-shadow">Our Services</h2>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-bonbon-dark mb-6">
            What we do
          </h2>
          <p className="text-lg text-bonbon-brown max-w-3xl mx-auto">
            We specialize in creating memorable experiences through our exceptional baking services. From intimate gatherings to grand celebrations, we bring your vision to life with delicious, beautifully crafted desserts.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Services List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                                 className="bg-gradient-to-br from-bonbon-cream to-white rounded-2xl p-8 card-hover glow-effect"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-bonbon-pink to-bonbon-gold rounded-full flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-bonbon-dark">
                        {service.name}
                      </h3>
                      <p className="text-bonbon-brown text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-bonbon-pink">
                    {service.percentage}%
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${service.percentage}%` } : {}}
                    transition={{ delay: 0.4 + index * 0.2, duration: 1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-bonbon-pink to-bonbon-gold h-3 rounded-full shadow-sm"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Image/Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-bonbon-peach to-bonbon-pink rounded-3xl blur-2xl opacity-30"></div>
                             <div className="relative bg-gradient-to-br from-bonbon-cream to-bonbon-peach rounded-3xl p-12 text-center glow-effect">
                <div className="text-8xl mb-6 animate-float">
                  🎂
                </div>
                <h3 className="text-2xl font-serif font-bold text-bonbon-dark mb-4">
                  Delicious treats
                </h3>
                <p className="text-bonbon-brown mb-6">
                  Try handmade masterpieces in the world of handmade confectionery art
                </p>
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-bonbon-gold fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-bonbon-dark mb-6">
            <span className="text-gradient">Freshly baked</span>
          </h2>
                     <p className="text-lg text-bonbon-brown max-w-2xl mx-auto">
             Our customers love our freshly baked treats and exceptional service. We take pride in delivering quality that exceeds expectations.
           </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover text-center"
            >
                             <div className="text-4xl mb-4 animate-bounce-gentle sparkle">
                {index === 0 && '🍰'}
                {index === 1 && '🌈'}
                {index === 2 && '🧁'}
                {index === 3 && '🍯'}
              </div>
              <h3 className="text-lg font-serif font-bold text-bonbon-dark mb-2">
                {testimonial.content}
              </h3>
              <p className="text-bonbon-brown text-sm mb-4">
                {testimonial.description}
              </p>
              {/* <div className="flex justify-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-bonbon-gold fill-current" />
                ))}
              </div> */}
              <div>
                <div className="font-semibold text-bonbon-dark">
                  {testimonial.name}
                </div>
                <div className="text-sm text-bonbon-brown">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default Services
