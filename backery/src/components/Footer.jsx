import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Heart } from 'lucide-react'

const Footer = () => {
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Shop', href: '#shop' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-bonbon-pink' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-bonbon-pink' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-bonbon-pink' }
  ]

  return (
         <footer className="bg-bonbon-dark text-white particles">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-bonbon-pink to-bonbon-gold rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="/assets/arunas_cake_house_logo.jpg"
                  alt="Arunas Cake House Logo"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <span className="text-3xl font-serif font-bold">
                Arunasbakehouse
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Welcome to Arunasbakehouse, where passion meets perfection in every bite. We specialize in creating artisanal baked goods that bring joy to your special moments. From custom birthday cakes to elegant wedding desserts, our master bakers craft each creation with love and attention to detail.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Using only the finest ingredients and traditional baking techniques, we ensure every cake, pastry, and sweet treat is a masterpiece of flavor and artistry. Whether you're celebrating a milestone or simply craving something delicious, Arunasbakehouse is here to make your day sweeter.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                                 <motion.a
                   key={social.name}
                   href={social.href}
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
                   className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-colors duration-300 ${social.color} hover-glow`}
                 >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-serif font-bold mb-6">Contact & Services</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-bonbon-pink font-semibold mb-3 text-lg">Our Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Custom Birthday Cakes</li>
                  <li>• Wedding & Anniversary Cakes</li>
                  <li>• Corporate Event Catering</li>
                  <li>• Fresh Pastries Daily</li>
                  <li>• Special Dietary Options</li>
                </ul>
              </div>
              <div>
                <h4 className="text-bonbon-pink font-semibold mb-3 text-lg">Contact Info</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-bonbon-pink flex-shrink-0" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-bonbon-pink flex-shrink-0" />
                    <span>hello@arunasbakehouse.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-bonbon-pink mt-1 flex-shrink-0" />
                    <div>
                      <p>123 Sweet Street</p>
                      <p>Porur Toll Gate Chennai </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© 2025. All rights reserved. Arunasbakehouse</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-bonbon-pink fill-current" />
              <span>by Arunasbakehouse Team</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-10 text-4xl animate-float opacity-20">
          🍰
        </div>
        <div className="absolute top-10 right-20 text-3xl animate-float opacity-20" style={{ animationDelay: '1s' }}>
          🧁
        </div>
        <div className="absolute bottom-10 left-20 text-3xl animate-float opacity-20" style={{ animationDelay: '2s' }}>
          🍪
        </div>
        <div className="absolute bottom-0 right-10 text-4xl animate-float opacity-20" style={{ animationDelay: '0.5s' }}>
          🎂
        </div>
      </div>
    </footer>
  )
}

export default Footer
