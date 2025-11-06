import { Workflow, Brain, Code, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Brain,
    title: 'AI Automation',
    desc: 'Agentic workflows, data extraction, and retrieval augmented generation tailored to your stack.'
  },
  {
    icon: Workflow,
    title: 'n8n Workflows',
    desc: 'Design, orchestration, and maintenance of low-code automations that scale reliably.'
  },
  {
    icon: Code,
    title: 'Custom Software',
    desc: 'From MVP to production — web apps, APIs, and integrations built with modern stacks.'
  },
  {
    icon: Zap,
    title: 'Advisory & SRE',
    desc: 'Architecture, observability, and performance tuning for high-availability systems.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[60rem] bg-gradient-to-r from-fuchsia-300/30 via-violet-300/30 to-cyan-300/30 blur-3xl rounded-full" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">What we ship</h2>
          <p className="mt-3 text-slate-600">Outcome-first services crafted for velocity and reliability.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border bg-white/70 backdrop-blur hover:bg-white transition-all p-6 shadow-sm hover:shadow-md"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 text-white">
                <s.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
