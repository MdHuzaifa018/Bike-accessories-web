import { motion } from 'framer-motion'
import {
  HardHat, Hand, Lightbulb, Smartphone, Shield, Umbrella, Droplets, Gauge
} from 'lucide-react'
import { SectionHeading } from '../ui'
import { staggerContainer, staggerItem } from '../../utils/animations'
import { categories } from '../../data/siteData'

const iconMap = {
  HardHat, Hand, Lightbulb, Smartphone, Shield, Umbrella, Droplets, Gauge
}

export default function Categories() {
  return (
    <section id="categories" className="py-20 md:py-28">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Browse"
          title="Shop by Category"
          description="Find exactly what you need. From protective gear to performance upgrades, we've got you covered."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
        >
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon]
            return (
              <motion.div
                key={cat.id}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="group relative bg-surface rounded-2xl border border-border hover:border-primary/30 p-5 sm:p-6 cursor-pointer transition-all duration-300 hover-glow overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    {Icon && <Icon size={24} className="text-primary" />}
                  </div>
                  <h3 className="font-bold text-text text-sm sm:text-base mb-1">{cat.name}</h3>
                  <p className="text-xs text-text-muted">{cat.count}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
