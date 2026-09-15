import { useState, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { About } from './components/About'
import { CaseStudies } from './components/CaseStudies'
import { Contact } from './components/Contact'
import { DemoModal, type DemoSession } from './components/DemoModal'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Notes } from './components/Notes'
import { ResumeModal } from './components/ResumeModal'
import { SeoJsonLd } from './components/SeoJsonLd'
import { Work } from './components/Work'
import { caseStudies, projects } from './data/profile'

function demoSessionFromHash(hash: string): DemoSession | null {
  const match = hash.match(/^#demo-(.+)$/)
  if (!match) return null
  const id = match[1]
  const project = projects.find((item) => item.id === id && item.demos.length > 0)
  if (project) return { id: project.id, title: project.title, clips: project.demos }
  const study = caseStudies.find((item) => item.id === id && item.demos.length > 0)
  if (study) return { id: study.id, title: study.title, clips: study.demos }
  return null
}

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [demo, setDemo] = useState<DemoSession | null>(null)

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#resume') {
        setIsResumeOpen(true)
      }
      const fromHash = demoSessionFromHash(window.location.hash)
      if (fromHash) setDemo(fromHash)
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

  const handleOpenDemo = (session: DemoSession) => {
    setDemo(session)
    window.history.replaceState(null, '', `${window.location.pathname}#demo-${session.id}`)
  }

  const handleCloseDemo = () => {
    setDemo(null)
    if (window.location.hash.startsWith('#demo-')) {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <SeoJsonLd />
      <div className="min-h-svh">
        <Nav onOpenResume={handleOpenResume} />
        <main>
          <Hero />
          <Work onOpenDemo={handleOpenDemo} />
          <CaseStudies onOpenDemo={handleOpenDemo} />
          <Notes />
          <Experience />
          <About onOpenResume={handleOpenResume} />
          <Contact />
        </main>
        <Footer onOpenResume={handleOpenResume} />

        <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
        <DemoModal session={demo} onClose={handleCloseDemo} />
      </div>
    </MotionConfig>
  )
}
