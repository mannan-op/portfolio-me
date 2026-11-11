import { lazy, Suspense } from 'react'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { Hero } from '@/sections/Hero'
import { Services } from '@/sections/Services'
import { Work } from '@/sections/Work'

/** Off unless VITE_ENABLE_CHAT=true. The /api/chat function stays in place and returns 404 unless CHAT_ENABLED=true. */
const chatEnabled = import.meta.env.VITE_ENABLE_CHAT === 'true'
const PortfolioChatbot = lazy(() =>
  import('@/components/PortfolioChatbot').then((module) => ({ default: module.PortfolioChatbot })),
)

function App() {
  return (
    <>
      <SiteHeader />
      <main id="content">
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <SiteFooter />
      {chatEnabled ? (
        <Suspense fallback={null}>
          <PortfolioChatbot />
        </Suspense>
      ) : null}
    </>
  )
}

export default App
