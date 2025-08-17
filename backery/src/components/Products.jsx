import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleNavClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const products = [
    {
      id: 1,
      name: 'Strawberry cake',
      price: 29.00,
      originalPrice: null,
      discount: null,
      image: '🍰',
      category: 'Cakes',
      inStock: true,
      
      description: 'Fresh strawberry cake with cream filling'
    },
    {
      id: 2,
      name: 'Pink mousse cake',
      price: 32.00,
      originalPrice: 39.00,
      discount: 18,
      image: '🎂',
      category: 'Cakes',
      inStock: true,
      
      description: 'Delicate pink mousse with raspberry layers'
    },
    {
      id: 3,
      name: 'Blueberry cheesecake',
      price: 19.00,
      originalPrice: null,
      discount: null,
      image: '🧀',
      category: 'Cheesecakes',
      inStock: true,
      
      description: 'Creamy cheesecake with fresh blueberries'
    },
    {
      id: 4,
      name: 'Blueberry mousse',
      price: 12.00,
      originalPrice: null,
      discount: null,
      image: '🍮',
      category: 'Mousse',
      inStock: true,
      
      description: 'Light and fluffy blueberry mousse'
    },
    {
      id: 5,
      name: 'Raspberry cheesecake',
      price: 39.00,
      originalPrice: null,
      discount: null,
      image: '🍰',
      category: 'Cheesecakes',
      inStock: false,
      
      description: 'Rich raspberry cheesecake with graham crust'
    },
    {
      id: 6,
      name: 'Chocolate truffle cake',
      price: 45.00,
      originalPrice: null,
      discount: null,
      image: '🍫',
      category: 'Cakes',
      inStock: true,
      
      description: 'Decadent chocolate truffle with ganache'
    }
  ]



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="products" className="py-20 bg-bonbon-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-bonbon-dark mb-6 text-shadow">Our Creations</h2>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-bonbon-dark mb-6">
            Enjoy the variety of handmade{' '}
            <span className="text-bonbon-pink">sweets and cakes</span>
          </h2>
          <p className="text-lg text-bonbon-brown max-w-2xl mx-auto">
            Discover our collection of handcrafted desserts made with love and the finest quality ingredients
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover gradient-border"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-bonbon-peach via-bonbon-cream to-bonbon-pink flex items-center justify-center">
                <div className="text-8xl animate-float sparkle">
                  {product.image}
                </div>
                


                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-bonbon-pink to-bonbon-gold text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    -{product.discount}%
                  </div>
                )}

                
                {/* {!product.inStock && (
                  <div className="absolute top-4 left-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Out of stock
                  </div>
                )} */}
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Product Name */}
                <h3 className="text-xl font-serif font-bold text-bonbon-dark mb-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-bonbon-brown text-sm mb-4">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {product.originalPrice ? (
                      <>
                        <span className="text-2xl font-bold text-bonbon-pink">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-lg text-gray-400 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-bonbon-pink">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="flex justify-center">
                  <span className="bg-bonbon-cream text-bonbon-brown px-4 py-2 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-bonbon-brown mb-4">
            Contact us for custom orders and special requests
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('#services')}
            className="btn-secondary"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
