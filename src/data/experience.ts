export interface ExperienceItem {
  role: string
  company?: string
  engagement?: string
  period: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Full-Stack AI Web Engineer',
    period: '2023 — 2026',
    bullets: [
      'Developed responsive, production-grade UIs across React, Next.js, and Node.js — from component architecture to deployment on Vercel and Render.',
      'Designed and integrated RESTful APIs backed by PostgreSQL and MongoDB, with clean schema design and efficient query patterns.',
      'Implemented auth flows and security best practices — JWT/httpOnly cookies, rate limiting, Helmet.js, and input validation across the stack.',
      'Debugged and optimized cross-stack performance bottlenecks, improving load times and API response latency for client-facing products.',
      'Collaborated remotely with designers, PMs, and fellow developers to ship features on tight timelines without sacrificing code quality.',
      'Integrated AI features — LLM streaming, RAG pipelines, and agentic workflows — into client products using Vercel AI SDK, Groq, and LangChain.',
    ],
  },
  {
    role: 'Freelance Full-Stack Developer',
    engagement: 'Commission-Based · Independent Client Work',
    period: '2022 — Present',
    bullets: [
      'Partner with clients on a commission and project basis — scoping requirements, estimating deliverables, and shipping production-ready software on agreed milestones.',
      'Built and deployed cross-platform solutions including desktop apps (Tauri/Rust), responsive web applications, and AI-powered tools tailored to each client\'s business needs.',
      'Owned the full delivery cycle: UI/UX implementation, API design, database setup, auth, testing, and handoff — with clear communication throughout.',
      'Delivered mobile-first, fully responsive interfaces tested across phones, tablets, and desktop breakpoints before every release.',
      'Maintained long-term client relationships through reliable delivery, post-launch support, and iterative feature additions as products scaled.',
    ],
  },
]

export const awards = [
  'Udemy: Full Stack MERN Development',
  'Udemy: Next.js & TypeScript',
  'Udemy: LangChain & Generative AI',
  'AI Engineering Curriculum — LLM APIs, Prompt Engineering, Streaming, Tool Calling, Structured Outputs, Vercel AI SDK, Clerk Auth, Vercel Deployment',
] as const
