import { motion } from 'framer-motion'
import { ArrowRight, Compass, ShieldCheck, Truck, CreditCard, Award } from 'lucide-react'
import { PrimaryButton, SecondaryButton } from '../ui'
import { fadeUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from '../../utils/animations'

const trustBadges = [
  { icon: ShieldCheck, label: 'Genuine Products' },
  { icon: Truck, label: 'Fast Delivery' },
  { icon: CreditCard, label: 'Secure Payments' },
  { icon: Award, label: 'Top Brands' },
]

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container-max section-padding w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                Premium Motorcycle Gear
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text leading-[1.08] mb-6">
              Upgrade{' '}
              <span className="text-gradient">Every</span>
              <br />
              Ride
            </h1>

            <p className="text-base sm:text-lg text-text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
              Premium Bike Parts, Riding Gear & Accessories For Serious Riders.
              Everything you need to ride with confidence and style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <PrimaryButton onClick={() => scrollTo('products')} icon={ArrowRight}>
                Shop Now
              </PrimaryButton>
              <SecondaryButton onClick={() => scrollTo('categories')} icon={Compass}>
                Explore Collection
              </SecondaryButton>
            </div>

            {/* Trust Badges */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-surface/60 border border-border/50"
                >
                  <Icon size={16} className="text-primary shrink-0" />
                  <span className="text-xs font-medium text-text-muted whitespace-nowrap">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-3xl scale-110" />

              {/* Main motorcycle image */}
              <motion.img
                src="/images/hero-motorcycle.png"
                alt="Premium sport motorcycle with orange accent lighting"
                className="relative w-full h-auto object-contain drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Floating Card 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-4 sm:-left-8 top-1/4 glass rounded-2xl p-3 shadow-xl"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <img src="/images/product-helmet.png" alt="Helmet" className="w-10 h-10 object-contain rounded-lg" />
                    <div>
                      <p className="text-xs font-bold text-text">Helmets</p>
                      <p className="text-[10px] text-primary font-semibold">From ₹1,499</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -right-4 sm:-right-8 bottom-1/3 glass rounded-2xl p-3 shadow-xl"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <img src="/images/product-gloves.png" alt="Gloves" className="w-10 h-10 object-contain rounded-lg" />
                    <div>
                      <p className="text-xs font-bold text-text">Riding Gear</p>
                      <p className="text-[10px] text-primary font-semibold">50+ Options</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Card 3 - Rating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute left-1/2 -translate-x-1/2 -bottom-4 glass rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex -space-x-2">
                    {['AM', 'PS', 'RV'].map((initials, i) => (
                      <div
                        key={initials}
                        className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-[9px] font-bold border-2 border-bg"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text">10K+ Riders Trust Us</p>
                    <div className="flex items-center gap-1">
                      <span className="text-amber-400 text-xs">★★★★★</span>
                      <span className="text-[10px] text-text-muted">4.9/5</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
