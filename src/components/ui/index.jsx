import { motion } from 'framer-motion'
import { fadeUp, fadeDown, slideInLeft, slideInRight, staggerContainer, staggerItem, scaleUp } from '../../utils/animations'

/**
 * SectionHeading - Reusable animated section title
 */
export function SectionHeading({ eyebrow, title, description, center = true }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}

/**
 * AnimatedSection - Wrapper for scroll-triggered animations
 */
export function AnimatedSection({ children, className = '', variant = 'fadeUp', delay = 0 }) {
  const variants = {
    fadeUp, fadeDown, slideInLeft, slideInRight, scaleUp,
    staggerContainer, staggerItem
  }

  return (
    <motion.div
      variants={variants[variant] || fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * GlowCard - Reusable card with glow effect
 */
export function GlowCard({ children, className = '', onClick }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className={`
        bg-surface rounded-2xl border border-border
        hover:border-primary/30 hover-glow
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}

/**
 * PrimaryButton - Main CTA button
 */
export function PrimaryButton({ children, onClick, className = '', icon: Icon }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        px-7 py-3.5 rounded-xl font-semibold text-sm
        bg-gradient-to-r from-primary to-accent
        text-white shadow-lg shadow-primary/25
        hover:shadow-xl hover:shadow-primary/30
        transition-shadow duration-300 cursor-pointer
        ${className}
      `}
    >
      {children}
      {Icon && <Icon size={18} />}
    </motion.button>
  )
}

/**
 * SecondaryButton - Outlined CTA button
 */
export function SecondaryButton({ children, onClick, className = '', icon: Icon }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        px-7 py-3.5 rounded-xl font-semibold text-sm
        border-2 border-primary/40 text-primary
        hover:bg-primary/10 hover:border-primary
        transition-all duration-300 cursor-pointer
        ${className}
      `}
    >
      {children}
      {Icon && <Icon size={18} />}
    </motion.button>
  )
}

/**
 * Badge - Small status badge
 */
export function Badge({ children, variant = 'primary' }) {
  const styles = {
    primary: 'bg-primary/10 text-primary',
    accent: 'bg-accent/10 text-accent',
    success: 'bg-emerald-500/10 text-emerald-500',
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${styles[variant] || styles.primary}`}>
      {children}
    </span>
  )
}

/**
 * StarRating - Star display component
 */
export function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={star <= Math.round(rating) ? 'currentColor' : 'none'}
          stroke="currentColor"
          className={star <= Math.round(rating) ? 'text-amber-400' : 'text-border'}
        >
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
        </svg>
      ))}
    </div>
  )
}
