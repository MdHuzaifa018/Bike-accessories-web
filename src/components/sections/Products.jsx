import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import { SectionHeading, Badge, StarRating } from '../ui'
import { staggerContainer, staggerItem } from '../../utils/animations'
import { products } from '../../data/siteData'

function ProductCard({ product }) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      className="group bg-surface rounded-2xl border border-border hover:border-primary/30 overflow-hidden transition-all duration-300 hover-glow"
    >
      {/* Image Container */}
      <div className="relative aspect-square p-4 bg-gradient-to-br from-surface to-bg overflow-hidden">
        <motion.img
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
        {discount > 0 && (
          <div className="absolute top-3 right-3">
            <span className="bg-red-500/90 text-white text-xs font-bold px-2 py-1 rounded-lg">
              -{discount}%
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <p className="text-xs font-medium text-primary mb-1.5">{product.category}</p>
        <h3 className="font-bold text-text text-sm sm:text-base mb-2 line-clamp-1">{product.name}</h3>

        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-text-muted">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-text">₹{product.price.toLocaleString()}</span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-text-muted line-through">₹{product.originalPrice.toLocaleString()}</span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Add ${product.name} to cart`}
            className="w-10 h-10 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
          >
            <ShoppingCart size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Featured"
          title="Premium Products"
          description="Hand-picked accessories and parts from the best brands. Quality you can trust, prices you'll love."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
