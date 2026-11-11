import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { PortfolioChatbot } from '@/components/PortfolioChatbot'
import { Contact } from '@/sections/Contact'
import { Hero } from '@/sections/Hero'
import { Services } from '@/sections/Services'
import { Work } from '@/sections/Work'

/** Off unless VITE_ENABLE_CHAT=true. The /api/chat function stays in place. */
const chatEnabled = import.meta.env.VITE_ENABLE_CHAT === 'true'

function App() {
  return (
    <>
      <SiteHeader />
      <main id="content">
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>
      <SiteFooter />
      {chatEnabled ? <PortfolioChatbot /> : null}
    </>
  )
}

export default App
