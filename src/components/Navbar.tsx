import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems } from '@/data/profile'

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navItems.map((item) => item.id)
      const scrollPos = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id)
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled ? 'py-3' : 'py-6',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home', 'home')
            }}
            className="group cursor-pointer font-mono text-sm font-bold tracking-tight"
          >
            <span className="text-foreground transition-colors group-hover:text-primary">AM</span>
            <span className="text-primary">/</span>
            <span className="text-muted-foreground">dev</span>
          </a>

          <nav
            className={cn(
              'hidden items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500 md:flex',
              scrolled && 'glass shadow-xl shadow-black/20',
            )}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={cn(
                    'relative cursor-pointer rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-300',
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact', 'contact')
              }}
              className="hidden cursor-pointer rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:scale-[0.97] hover:shadow-lg hover:shadow-primary/25 md:inline-flex"
            >
              Let's Talk
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="cursor-pointer rounded-full border border-white/10 p-2.5 text-foreground transition-colors hover:bg-white/5 md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-4 top-[68px] z-40 rounded-3xl glass p-5 shadow-2xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.id)}
                className={cn(
                  'cursor-pointer rounded-2xl px-4 py-3.5 text-left text-sm font-medium transition-colors',
                  activeSection === item.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-white/5 hover:text-foreground',
                )}
              >
                {item.name}
              </button>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact', 'contact')
              }}
              className="mt-2 cursor-pointer rounded-2xl bg-primary px-4 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-primary-foreground"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      )}
    </>
  )
}
