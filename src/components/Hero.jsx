import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/60 bg-white/70 shadow-sm backdrop-blur-sm text-xs text-slate-700 mb-6">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
            Web3 aesthetics • AI-native software house
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            ConnecTouch — automation, intelligence, and custom software under one roof.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-700">
            We design and ship AI automation, n8n workflows, and product-grade software so your team moves 10x faster.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors">Start a project</a>
            <a href="#services" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white/80 backdrop-blur border border-slate-200 text-slate-800 hover:bg-white">Explore services</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
