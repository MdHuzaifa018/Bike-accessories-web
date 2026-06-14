import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading, Badge, StarRating } from '../ui'
import { fadeUp, staggerItem } from '../../utils/animations'
import { bestSellers } from '../../data/siteData'

function BestSellerCard({ product }) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className="group bg-surface rounded-2xl border border-border hover:border-primary/30 overflow-hidden transition-all duration-300 hover-glow min-w-[260px] sm:min-w-[280px] snap-start"
    >
      <div className="relative aspect-square p-4 bg-gradient-to-br from-surface to-bg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge>{product.badge}</Badge>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs font-medium text-primary mb-1">{product.category}</p>
        <h3 className="font-bold text-text text-sm mb-2 line-clamp-1">{product.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-text-muted">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-extrabold text-text">₹{product.price.toLocaleString()}</span>
            <span className="text-xs text-text-muted line-through">₹{product.originalPrice.toLocaleString()}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Add ${product.name} to cart`}
            className="w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
          >
            <ShoppingCart size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function BestSellers() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = 300
      scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 md:py-28">
      <div className="container-max section-padding">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              Top Picks
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text leading-tight">
              Best Sellers
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-xl border border-border hover:border-primary/30 flex items-center justify-center text-text-muted hover:text-primary transition-colors cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-xl border border-border hover:border-primary/30 flex items-center justify-center text-text-muted hover:text-primary transition-colors cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-4 sm:px-6 lg:px-8 xl:px-12 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {bestSellers.map((product) => (
            <BestSellerCard key={product.id} product={product} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
