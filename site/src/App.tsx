import { useState, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { About } from './components/About'
import { CaseStudies } from './components/CaseStudies'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Notes } from './components/Notes'
import { ResumeModal } from './components/ResumeModal'
import { Work } from './components/Work'

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  // Support opening via hash #resume or Esc key
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#resume') {
        setIsResumeOpen(true)
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResumeOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('hashchange', handleHash)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleOpenResume = () => {
    setIsResumeOpen(true)
  }

  const handleCloseResume = () => {
    setIsResumeOpen(false)
    if (window.location.hash === '#resume') {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-svh">
        <Nav onOpenResume={handleOpenResume} />
        <main>
          <Hero onOpenResume={handleOpenResume} />
          <Work />
          <CaseStudies />
          <Notes />
          <Experience />
          <About onOpenResume={handleOpenResume} />
          <Contact />
        </main>
        <Footer onOpenResume={handleOpenResume} />

        <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
      </div>
    </MotionConfig>
  )
}
