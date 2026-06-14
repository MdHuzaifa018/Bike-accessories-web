import { useMemo } from 'react'
import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useScroll'

// Section components
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Categories from './components/sections/Categories'
import Products from './components/sections/Products'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Brands from './components/sections/Brands'
import SpecialOffer from './components/sections/SpecialOffer'
import BestSellers from './components/sections/BestSellers'
import Reviews from './components/sections/Reviews'
import FAQ from './components/sections/FAQ'
import Newsletter from './components/sections/Newsletter'
import Footer from './components/sections/Footer'
import ScrollUI from './components/sections/ScrollUI'

const sectionIds = ['home', 'categories', 'products', 'brands', 'reviews', 'contact']

export default function App() {
  const { isDark, toggle } = useTheme()
  const activeSection = useActiveSection(useMemo(() => sectionIds, []))

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300">
      <ScrollUI />
      <Navbar isDark={isDark} toggleTheme={toggle} activeSection={activeSection} />

      <main>
        <Hero />
        <Stats />
        <Categories />
        <Products />
        <WhyChooseUs />
        <Brands />
        <SpecialOffer />
        <BestSellers />
        <Reviews />
        <FAQ />
        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}
