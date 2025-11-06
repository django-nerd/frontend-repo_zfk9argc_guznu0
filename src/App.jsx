import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="font-inter text-slate-800">
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} ConnecTouch. Crafted with intelligence & care.
      </footer>
    </div>
  )
}

export default App
