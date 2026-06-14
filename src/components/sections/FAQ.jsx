import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '../ui'
import { staggerContainer, staggerItem } from '../../utils/animations'
import { faqs } from '../../data/siteData'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <motion.div
      variants={staggerItem}
      className="border border-border rounded-2xl overflow-hidden transition-colors duration-300 hover:border-primary/20"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer group"
      >
        <span className="font-semibold text-text text-sm sm:text-base pr-4 group-hover:text-primary transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"
        >
          <ChevronDown size={18} className="text-primary" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <p className="text-sm text-text-muted leading-relaxed border-t border-border pt-4">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Help"
          title="Frequently Asked Questions"
          description="Got questions? We've got answers. Find everything you need to know about shopping with us."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-3xl mx-auto space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
