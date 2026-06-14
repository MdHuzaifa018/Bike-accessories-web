import { motion } from 'framer-motion'
import { Quote, BadgeCheck } from 'lucide-react'
import { SectionHeading, StarRating } from '../ui'
import { staggerContainer, staggerItem } from '../../utils/animations'
import { reviews } from '../../data/siteData'

function ReviewCard({ review }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300 hover-glow"
    >
      <Quote size={24} className="text-primary/20 mb-4" />

      <p className="text-sm text-text-muted leading-relaxed mb-5 line-clamp-4">
        "{review.review}"
      </p>

      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold shrink-0">
          {review.avatar}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="font-semibold text-text text-sm truncate">{review.name}</h4>
            {review.verified && (
              <BadgeCheck size={14} className="text-primary shrink-0" />
            )}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <StarRating rating={review.rating} size={12} />
            <span className="text-xs text-text-muted">{review.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Riders Say"
          description="Join thousands of satisfied riders who trust MotoGear Pro for their motorcycle accessory needs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
