import { motion } from 'framer-motion'
import { ShieldCheck, Truck, RotateCcw, Headset } from 'lucide-react'
import { SectionHeading } from '../ui'
import { staggerContainer, staggerItem } from '../../utils/animations'
import { features } from '../../data/siteData'

const iconMap = { ShieldCheck, Truck, RotateCcw, Headset }

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Why Us"
          title="Why Choose MotoGear Pro"
          description="We're not just a store — we're a community of passionate riders dedicated to your safety and style."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="group relative bg-surface rounded-2xl border border-border hover:border-primary/30 p-6 sm:p-8 text-center transition-all duration-300 hover-glow overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    {Icon && <Icon size={26} className="text-primary" />}
                  </div>
                  <h3 className="font-bold text-text text-base sm:text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
