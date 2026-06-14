import { motion } from 'framer-motion'
import { SectionHeading } from '../ui'
import { fadeUp } from '../../utils/animations'
import { brands } from '../../data/siteData'

function BrandLogo({ name }) {
  // Render brand name as styled text logos
  return (
    <div className="flex items-center justify-center px-8 py-4 mx-4 select-none">
      <span className="text-xl sm:text-2xl font-extrabold text-text-muted/40 hover:text-primary whitespace-nowrap transition-colors duration-300 tracking-tight">
        {name}
      </span>
    </div>
  )
}

export default function Brands() {
  // Double the brands for seamless infinite scroll
  const doubledBrands = [...brands, ...brands]

  return (
    <section id="brands" className="py-20 md:py-28 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Partners"
          title="Trusted by Top Brands"
          description="We partner with the biggest names in the motorcycle industry to bring you genuine, quality products."
        />
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="overflow-hidden"
      >
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

          {/* Marquee Row 1 */}
          <div className="flex animate-marquee py-4">
            {doubledBrands.map((brand, i) => (
              <BrandLogo key={`${brand}-${i}`} name={brand} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
