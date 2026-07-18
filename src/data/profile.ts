export const profile = {
  name: 'Abdul Mannan',
  title: 'Full-Stack Software Developer (2+ years)',
  subtitle: 'React.js · Next.js · Node.js · AI-integrated web apps',
  tagline:
    'I build production-grade web apps that ship fast, scale cleanly, and feel great on every device — from polished React frontends to secure APIs and AI features that actually solve problems.',
  email: 'contact@abdulmannan.me',
  phone: '(+92) 322 4574467',
  github: 'https://github.com/mannan-op',
  site: 'https://abdulmannan.me',
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
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Contact', href: '#contact', id: 'contact' },
] as const
