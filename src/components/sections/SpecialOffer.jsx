import { motion } from 'framer-motion'
import { ArrowRight, Percent } from 'lucide-react'
import { PrimaryButton } from '../ui'
import { fadeUp } from '../../utils/animations'

export default function SpecialOffer() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-max section-padding">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-[#1a2744] to-secondary dark:from-[#0c1526] dark:via-[#131f36] dark:to-[#0c1526]" />

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />

          <div className="relative z-10 py-16 sm:py-20 md:py-24 px-6 sm:px-12 lg:px-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6"
            >
              <Percent size={16} className="text-primary" />
              <span className="text-sm font-semibold text-primary">Limited Time Offer</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              UP TO{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                40% OFF
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
              Motorcycle Accessories & Riding Gear. Don't miss out on the biggest sale of the season.
            </p>

            <PrimaryButton icon={ArrowRight} className="!shadow-2xl !shadow-primary/30">
              Shop the Sale
            </PrimaryButton>

            <p className="text-xs text-white/40 mt-6">* Offer valid while stocks last. T&C apply.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
