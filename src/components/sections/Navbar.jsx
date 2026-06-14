import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, ShoppingCart, Sun, Moon, Menu, X, ChevronRight
} from 'lucide-react'
import { navLinks } from '../../data/siteData'

export default function Navbar({ isDark, toggleTheme, activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const offset = 80
      const y = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled
            ? 'glass shadow-lg shadow-black/5'
            : 'bg-transparent'
          }
        `}
      >
        <nav className="container-max section-padding">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-black text-base">M</span>
              </div>
              <span className="text-lg font-extrabold text-text hidden sm:block">
                Moto<span className="text-gradient">Gear</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`
                      relative px-4 py-2 text-sm font-medium rounded-lg
                      transition-colors duration-200
                      ${isActive
                        ? 'text-primary'
                        : 'text-text-muted hover:text-text'
                      }
                    `}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                )
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button
                aria-label="Search"
                className="p-2 rounded-lg text-text-muted hover:text-text hover:bg-surface transition-colors cursor-pointer"
              >
                <Search size={20} />
              </button>

              <button
                aria-label="Cart"
                className="relative p-2 rounded-lg text-text-muted hover:text-text hover:bg-surface transition-colors cursor-pointer"
              >
                <ShoppingCart size={20} />
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg text-text-muted hover:text-text hover:bg-surface transition-colors cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'dark' : 'light'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  </motion.div>
                </AnimatePresence>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-lg text-text-muted hover:text-text lg:hidden transition-colors cursor-pointer"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-bg border-l border-border p-6 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-white font-black text-sm">M</span>
                  </div>
                  <span className="text-base font-extrabold text-text">
                    Moto<span className="text-gradient">Gear</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-text-muted hover:text-text hover:bg-surface transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-1">
                {navLinks.map((link, i) => {
                  const sectionId = link.href.replace('#', '')
                  const isActive = activeSection === sectionId
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`
                        flex items-center justify-between p-3 rounded-xl
                        text-sm font-medium transition-colors
                        ${isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-text-muted hover:bg-surface hover:text-text'
                        }
                      `}
                    >
                      {link.label}
                      <ChevronRight size={16} className="opacity-40" />
                    </motion.a>
                  )
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 cursor-pointer"
                >
                  Shop Now
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
