import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../utils/animations'
import { stats } from '../../data/siteData'
import { useCountUp } from '../../hooks/useScroll'

function StatItem({ value, suffix, label, isDecimal }) {
  const { count, ref } = useCountUp(isDecimal ? Math.floor(value) : value, 2000)

  return (
    <motion.div variants={staggerItem} ref={ref} className="text-center px-4">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient mb-1">
        {isDecimal ? `${count}.9` : count}{suffix}
      </div>
      <p className="text-sm text-text-muted font-medium">{label}</p>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="container-max section-padding"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
