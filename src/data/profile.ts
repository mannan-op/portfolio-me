export const profile = {
  name: 'Abdul Mannan',
  title: 'Websites, automations, and internal software',
  subtitle: 'For small and mid-sized businesses',
  tagline:
    'I work with owners in the United States, the United Kingdom and Europe, the UAE and the Gulf, and Pakistan.',
  email: 'contact@abdulmannan.me',
  phone: '(+92) 322 4574467',
  github: 'https://github.com/mannan-op',
  site: 'https://abdulmannan.me',
  // No CV file is in the repo. Do not render a download control for this.
  cvUrl: '#',
  education: {
    degree: 'BS Computer Science',
    school: 'FAST-NUCES Lahore',
    period: 'Fall 2022 — Expected 2027',
    coursework: [
      'Data Structures & Algorithms',
      'Database Systems',
      'Software Engineering',
      'Operating Systems',
      'Compiler Construction',
      'Artificial Intelligence',
    ],
  },
  about: `I'm a full-stack developer with 2+ years of experience turning ideas into responsive, production-ready applications. I work across the stack — React and Next.js on the front, Node.js and Django REST on the back — and I'm equally comfortable designing PostgreSQL schemas, wiring up JWT auth, or integrating LLM-powered features with streaming and tool calling.

I'm currently pursuing my BS in Computer Science at FAST-NUCES Lahore, where coursework in algorithms, databases, and AI keeps sharpening how I think about systems. Whether I'm building an ecommerce marketplace with async AI pipelines or a real-time chat app with Socket.IO, I care about performance, security, and the details that make software feel professional.`,
} as const

export const navItems = [
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'Work', href: '#work', id: 'work' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Contact', href: '#contact', id: 'contact' },
] as const
