import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-72 w-72 bg-gradient-to-br from-cyan-300/40 to-violet-300/40 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 h-72 w-72 bg-gradient-to-tr from-fuchsia-300/40 to-violet-300/40 blur-3xl rounded-full" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border bg-white/80 backdrop-blur p-10 md:p-14 text-center shadow-md">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-slate-900"
          >
            Ready to automate and build smarter?
          </motion.h3>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Tell us about your use case. We’ll propose a high-impact plan within 48 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:hello@connectouch.ai" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Email us</a>
            <a href="#" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50">Book a call</a>
          </div>
        </div>
      </div>
    </section>
  )
}
