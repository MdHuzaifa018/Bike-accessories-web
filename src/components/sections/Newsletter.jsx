import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react'
import { fadeUp } from '../../utils/animations'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMsg('')

    if (!email.trim()) {
      setStatus('error')
      setErrorMsg('Please enter your email address.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setErrorMsg('Please enter a valid email address.')
      return
    }

    // Simulate subscribe
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent">
      <div className="container-max section-padding">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Mail size={26} className="text-primary" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-text mb-3">
            Stay in the <span className="text-gradient">Fast Lane</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg mb-8 leading-relaxed">
            Get exclusive deals, new product drops, and riding tips delivered straight to your inbox.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20"
            >
              <CheckCircle2 size={20} className="text-emerald-500" />
              <span className="text-sm font-medium text-emerald-500">
                You're in! Welcome to the MotoGear family.
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
                    placeholder="Enter your email address"
                    aria-label="Email address"
                    className={`
                      w-full pl-11 pr-4 py-3.5 rounded-xl
                      bg-surface border text-text text-sm
                      placeholder:text-text-muted/60
                      focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                      transition-all duration-200
                      ${status === 'error' ? 'border-red-500' : 'border-border'}
                    `}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300 cursor-pointer shrink-0"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </motion.button>
              </div>
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-500 mt-2 text-left"
                >
                  {errorMsg}
                </motion.p>
              )}
              <p className="text-xs text-text-muted/60 mt-3">
                No spam, ever. Unsubscribe at any time.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
