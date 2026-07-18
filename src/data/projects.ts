export interface Project {
  title: string
  hook: string
  description: string
  stack: string[]
  featured?: boolean
  link?: string
}

export const projects: Project[] = [
  {
    title: 'AutoStitch',
    hook: 'AI-powered ecommerce marketplace for Pakistani ethnic wear.',
    description:
      'Next.js + Django REST Framework monorepo (Turborepo) with JWT auth via httpOnly cookies. Features AI virtual try-on through an async Celery/Redis pipeline (Hugging Face/Fal/Replicate fallback), an AI stylist chatbot, multi-step checkout, guest cart with merge-on-login, and a unified admin dashboard.',
    stack: ['Next.js', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Python'],
    featured: true,
    link: '#',
  },
  {
    title: 'DesignForge AI',
    hook: 'AI-powered UI/UX design assistant and code generator (SaaS).',
    description:
      'Multi-provider LLM support (GPT-4, Claude, Gemini) via a unified Vercel AI SDK layer with real-time SSE streaming. Per-user token cost tracking with tiktoken, Clerk auth, Stripe billing, and Docker deployment.',
    stack: ['MERN', 'TypeScript', 'PostgreSQL'],
    featured: true,
    link: '#',
  },
  {
    title: 'Intelligent E-Commerce Chatbot',
    hook: 'Conversational shopping assistant with context-aware recommendations.',
    description:
      'Cart management and order tracking via natural language. Groq-powered LLM with persistent chat history stored in PostgreSQL.',
    stack: ['React', 'Express', 'PostgreSQL', 'Groq', 'LLaMA', 'Docker', 'Clerk'],
    link: '#',
  },
  {
    title: 'PromptForge',
    hook: 'ChatGPT-style prompt engine with real-time SSE token streaming.',
    description:
      'Multi-session management with full prompt history. Built for fast, responsive LLM interactions with Groq backend.',
    stack: ['MERN', 'Groq', 'SSE'],
    link: '#',
  },
  {
    title: 'Construction Hub',
    hook: 'Cross-platform desktop app for project tracking and billing.',
    description:
      'Built for a freelance client — milestone management, billing workflows, and project tracking. Argon2 auth with SQLite backend.',
    stack: ['Tauri', 'React', 'Rust'],
    link: '#',
  },
  {
    title: 'Plot — AI Chrome Extension',
    hook: 'Sidebar AI web copilot with local and cloud model routing.',
    description:
      'Manifest V3 extension with Ollama (local) and Claude (cloud) model routing, background service worker messaging, JWT auth, and Stripe billing.',
    stack: ['React', 'Node.js/Express', 'Ollama'],
    link: '#',
  },
  {
    title: 'MERN ChatApp',
    hook: 'Real-time chat with Socket.IO and modern React patterns.',
    description:
      'React 19 with Zustand state management, JWT in httpOnly cookies, Helmet.js security headers, and Arcjet rate limiting.',
    stack: ['React 19', 'Socket.IO', 'Zustand', 'JWT', 'Helmet.js', 'Arcjet'],
    link: '#',
  },
  {
    title: 'n8n AI Video Automation',
    hook: 'Automated short-form video content pipeline — fully no-code.',
    description:
      'Orchestrated in n8n with local Ollama LLMs (via ngrok), Pexels stock footage, Creatomate rendering, and YouTube upload automation.',
    stack: ['n8n', 'Ollama', 'Pexels', 'Creatomate', 'YouTube'],
    link: '#',
  },
]
