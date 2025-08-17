import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, ArrowRight, Star } from 'lucide-react'

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: 'Brownie cheesecake is your new must-try dessert!',
      date: 'Aug 18, 2023',
      category: 'News',
      image: '🍫',
      excerpt: 'Discover the perfect combination of rich chocolate brownie and creamy cheesecake in this decadent dessert recipe.',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Silky and soft strawberry mousse cake for the best weekend',
      date: 'Aug 16, 2023',
      category: 'News',
      image: '🍰',
      excerpt: 'Learn how to create a light and airy strawberry mousse cake that will impress your guests and satisfy your sweet tooth.',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'The art of making perfect macarons at home',
      date: 'Aug 14, 2023',
      category: 'Recipes',
      image: '🍪',
      excerpt: 'Master the technique of creating delicate French macarons with our step-by-step guide and expert tips.',
      readTime: '10 min read', 
    },
    {
      id: 4,
      title: 'Seasonal fruit tarts: Summer edition',
      date: 'Aug 12, 2023',
      category: 'Seasonal',
      image: '🥧',
      excerpt: 'Explore the best summer fruits to use in your tarts and learn our secret recipe for the perfect pastry crust.',
      readTime: '8 min read',
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
    <section id="blog" className="py-20 bg-gradient-to-br from-bonbon-cream to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-bonbon-dark mb-6 text-shadow">
            Our Blog
          </h2>
          <p className="text-lg text-bonbon-brown max-w-3xl mx-auto">
            Read about our latest creations and baking tips. Discover new recipes, seasonal specialties, and behind-the-scenes stories from our bakery kitchen.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover gradient-border"
            >
              {/* Post Image */}
              <div className="relative h-64 bg-gradient-to-br from-bonbon-peach via-bonbon-cream to-bonbon-pink flex items-center justify-center">
                <div className="text-8xl animate-float sparkle">
                  {post.image}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-bonbon-pink to-bonbon-gold text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {post.category}
                </div>

                
                {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-bonbon-gold fill-current" />
                  <span className="text-sm font-bold text-bonbon-dark">
                    {post.rating}
                  </span>
                </div> */}
              </div>

              {/* Post Content */}
              <div className="p-8">
                {/* Meta Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-bonbon-brown text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span className="text-bonbon-brown text-sm">
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-bonbon-dark mb-4 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-bonbon-brown mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-bonbon-pink font-semibold hover:text-bonbon-dark transition-colors duration-300"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-bonbon-dark rounded-3xl p-12 text-white text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Stay updated with our latest recipes
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to our newsletter and get exclusive recipes, baking tips, and special offers delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-bonbon-dark font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-bonbon-pink px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-bonbon-dark mb-4">
              Hello we are Arunasbakehouse
            </h3>
            <p className="text-bonbon-brown mb-6">
              We are passionate about creating exceptional baked goods that bring joy to every celebration and create lasting memories for our customers.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('#about')}
              className="btn-primary"
            >
              Learn More About Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
