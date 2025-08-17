# Arunasbakehouse Artisanal Bakery Website

A complete, responsive website for Arunasbakehouse artisanal bakery built with React, featuring all UI elements and animation effects for a modern bakery experience.

## 🎯 Features

### ✨ Complete UI Design
- **Modern bakery design** perfect for Arunasbakehouse
- **Responsive layout** that works on all devices
- **Modern typography** with Playfair Display and Inter fonts
- **Custom color scheme** with beautiful bakery brand colors

### 🎨 Animation Effects
- **Smooth scroll animations** using Framer Motion
- **Floating elements** with gentle bounce effects
- **Staggered animations** for product cards and sections
- **Interactive hover effects** on all clickable elements
- **Cart slide-in animation** with spring physics
- **Progress bar animations** for service statistics

### 🛍️ E-commerce Features
- **Product showcase** with pricing
- **Shopping cart functionality** with quantity controls
- **Wishlist system** with heart icons
- **Discount badges** and out-of-stock indicators
- **Responsive product grid** with hover effects

### 📱 Interactive Components
- **Sticky navigation** with scroll effects
- **Mobile-responsive menu** with smooth transitions
- **Animated statistics** with progress bars
- **Newsletter subscription** forms
- **Social media integration**

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd arunasbakehouse-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Build for Production

```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation and cart icon
│   ├── Hero.jsx           # Main banner section
│   ├── Products.jsx       # Product showcase grid
│   ├── About.jsx          # About us and statistics
│   ├── Services.jsx       # Services and testimonials
│   ├── Blog.jsx           # Blog posts section
│   ├── Footer.jsx         # Footer with contact info
│   └── Cart.jsx           # Shopping cart panel
├── App.jsx                # Main application component
├── main.jsx              # React entry point
└── index.css             # Global styles and Tailwind config
```

## 🎨 Design System

### Colors
- **Primary Pink**: `#FF6B9D` (pink)
- **Primary Purple**: `#8B5CF6` (purple)
- **Cream**: `#FFF8F0` (cream)
- **Brown**: `#8B4513` (brown)
- **Gold**: `#FFD700` (gold)
- **Dark**: `#2D1B1B` (dark)

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

### Animations
- **Float**: Gentle up-down movement
- **Slide Up**: Elements slide up from bottom
- **Fade In**: Smooth opacity transitions
- **Scale In**: Elements scale from 0.9 to 1.0
- **Bounce Gentle**: Subtle bounce effect

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Intersection Observer** - Scroll animations

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🎯 Key Sections

### 1. Hero Section
- Animated cupcake display
- Call-to-action buttons
- Floating dessert elements
- Statistics showcase

### 2. Products Section
- Product cards with hover effects
- Wishlist functionality
- Price display with discounts

### 3. About Section
- Company information
- Animated statistics
- Feature highlights
- Dessert showcase grid

### 4. Services Section
- Event services with progress bars
- Testimonials
- Call-to-action section

### 5. Blog Section
- Blog post cards
- Newsletter subscription
- Company introduction

### 6. Footer
- Contact information
- Social media links
- Newsletter signup
- Copyright information

## 🛒 Shopping Cart Features

- **Slide-in cart panel** from the right
- **Add/remove items** with quantity controls
- **Real-time total calculation** with tax
- **Empty cart state** with call-to-action
- **Smooth animations** for all interactions

## 🎨 Customization

### Adding New Products
Edit the `products` array in `src/components/Products.jsx`:

```javascript
const products = [
  {
    id: 7,
    name: 'New Product',
    price: 25.00,
    image: '🍰',
    category: 'Cakes',
    inStock: true,
    description: 'Product description'
  }
]
```

### Modifying Colors
Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  '-pink': '#FF6B9D',
  '-purple': '#8B5CF6',
  // Add your custom colors
}
```

### Adding Animations
Create new animations in `tailwind.config.js`:

```javascript
animation: {
  'custom-animation': 'customKeyframes 2s ease-in-out infinite',
}
```

## 🚀 Performance Optimizations

- **Lazy loading** for images and components
- **Optimized animations** with hardware acceleration
- **Minimal bundle size** with tree shaking
- **Fast refresh** during development
- **Production builds** with code splitting

## 📄 License

This project is created for Arunasbakehouse artisanal bakery. All design elements and content are custom-made for the bakery business.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

If you have any questions or need help with the project, please contact Arunasbakehouse team.

---

**Note**: This website is created specifically for Arunasbakehouse artisanal bakery business.
