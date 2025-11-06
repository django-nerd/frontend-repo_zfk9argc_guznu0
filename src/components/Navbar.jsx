import { useState, useEffect } from 'react'
import { Rocket } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 flex items-center justify-center text-white shadow-lg">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-slate-800">ConnecTouch</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="text-slate-700 hover:text-slate-900">Services</a>
          <a href="#work" className="text-slate-700 hover:text-slate-900">Workflows</a>
          <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
        </div>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors">
          Start a project
        </a>
      </nav>
    </header>
  )
}
