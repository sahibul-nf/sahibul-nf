import { MotionConfig } from 'framer-motion'
import { About } from './components/About'
import { CaseStudies } from './components/CaseStudies'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Notes } from './components/Notes'
import { Work } from './components/Work'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-svh">
        <Nav />
        <main>
          <Hero />
          <Work />
          <CaseStudies />
          <Notes />
          <Experience />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
