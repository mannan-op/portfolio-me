import { GrainOverlay } from '@/components/GrainOverlay'
import { Navbar } from '@/components/Navbar'
import { PortfolioChatbot } from '@/components/PortfolioChatbot'
import { About } from '@/sections/About'
import { Awards } from '@/sections/Awards'
import { Contact } from '@/sections/Contact'
import { Experience } from '@/sections/Experience'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'

function App() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Awards />
        <Contact />
      </main>
      <PortfolioChatbot />
    </>
  )
}

export default App
