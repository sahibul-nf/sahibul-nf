import { MotionConfig } from 'framer-motion'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Work } from './components/Work'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-svh">
        <Nav />
        <main>
          <Hero />
          <Work />
          <Experience />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
