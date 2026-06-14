import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/animations'
import { footerLinks } from '../../data/siteData'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const socialLinks = [
  { name: 'Instagram', href: '#' },
  { name: 'YouTube', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Facebook', href: '#' },
]

export default function Footer() {
  return (
    <footer id="contact" className="pt-20 pb-8 border-t border-border">
      <div className="container-max section-padding">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-black text-base">M</span>
                </div>
                <span className="text-lg font-extrabold text-text">
                  Moto<span className="text-gradient">Gear</span>
                </span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs mb-6">
                India's most trusted destination for premium motorcycle accessories, riding gear, and performance parts.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="w-10 h-10 rounded-xl bg-surface border border-border hover:border-primary/30 hover:bg-primary/10 flex items-center justify-center text-text-muted hover:text-primary transition-all duration-200"
                  >
                    <span className="text-xs font-bold">{name[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-bold text-text text-sm mb-4">Shop</h4>
              <ul className="space-y-2.5">
                {footerLinks.shop.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-text-muted hover:text-primary transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-text text-sm mb-4">Company</h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-text-muted hover:text-primary transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-bold text-text text-sm mb-4">Support</h4>
              <ul className="space-y-2.5">
                {footerLinks.support.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-text-muted hover:text-primary transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} MotoGear Pro. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-text-muted hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-text-muted hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-xs text-text-muted hover:text-primary transition-colors">Refund Policy</a>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="border-t border-border mt-8 pt-6 flex flex-col items-center justify-center gap-3">
            <p className="text-xs text-text-muted tracking-wide">
              Designed & Developed by{' '}
              <span className="relative group inline-block">
                <a
                  href="https://wa.me/918434890116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-text hover:text-primary transition-colors duration-300"
                >
                  Md Huzaif Sheikh
                </a>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-3 py-1.5 text-[10px] text-white bg-slate-900 dark:bg-slate-800 border border-border rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-lg flex flex-col items-center z-50">
                  Chat with Developer on WhatsApp
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-800"></span>
                </span>
              </span>
            </p>
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/MdHuzaifa018"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-text-muted hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/huzaif-sheikh-6443a6330"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-text-muted hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="mailto:mdhuzaifsh786@gmail.com"
                aria-label="Email Developer"
                className="text-text-muted hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaEnvelope className="text-lg" />
              </a>
              <a
                href="https://wa.me/918434890116"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Developer"
                className="text-text-muted hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
