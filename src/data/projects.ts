export interface Project {
  title: string
  hook: string
  description: string
  problem: string
  built: string
  stack: string[]
  featured?: boolean
  /** Larger case-study treatment, with a screenshot slot. */
  lead?: boolean
  /** Legacy field. Often '#'. Prefer `repo` for a real URL. */
  link?: string
  /** Public repository. Omit when none exists. Never set this to '#'. */
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'Construction Hub',
    hook: 'Cross-platform desktop app for project tracking and billing.',
    description:
      'Built for a freelance client — milestone management, billing workflows, and project tracking. Argon2 auth with SQLite backend.',
    problem:
      'A freelance client needed milestones, billing, and project tracking in one desktop app, rather than another subscription tool.',
    built:
      'A Tauri and React desktop app for those three jobs, with Argon2 passwords and a local SQLite database.',
    stack: ['Tauri', 'React', 'Rust'],
    lead: true,
    link: '#',
  },
  {
    title: 'AutoStitch',
    hook: 'AI-powered ecommerce marketplace for Pakistani ethnic wear.',
    description:
      'Next.js + Django REST Framework monorepo (Turborepo) with JWT auth via httpOnly cookies. Features AI virtual try-on through an async Celery/Redis pipeline (Hugging Face/Fal/Replicate fallback), an AI stylist chatbot, multi-step checkout, guest cart with merge-on-login, and a unified admin dashboard.',
    problem:
      'Selling ethnic wear online needed more than a product grid: fitting help, a cart that works before signup, and a back office that can run the shop.',
    built:
      'A Next.js and Django marketplace with cookie-based login, guest checkout, an async AI try-on pipeline, a stylist chat, and an admin dashboard.',
    stack: ['Next.js', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Python'],
    featured: true,
    lead: true,
    link: '#',
    repo: 'https://github.com/mannan-op/Auto-Stitch-v2',
  },
  {
    title: 'n8n AI Video Automation',
    hook: 'Automated short-form video content pipeline — fully no-code.',
    description:
      'Orchestrated in n8n with local Ollama LLMs (via ngrok), Pexels stock footage, Creatomate rendering, and YouTube upload automation.',
    problem: 'Short-form video was being assembled by hand, from the script through to the upload.',
    built:
      'An n8n workflow that drafts with a local model, pulls stock footage from Pexels, renders in Creatomate, and uploads to YouTube.',
    stack: ['n8n', 'Ollama', 'Pexels', 'Creatomate', 'YouTube'],
    lead: true,
    link: '#',
  },
  {
    title: 'DesignForge AI',
    hook: 'AI-powered UI/UX design assistant and code generator (SaaS).',
    description:
      'Multi-provider LLM support (GPT-4, Claude, Gemini) via a unified Vercel AI SDK layer with real-time SSE streaming. Per-user token cost tracking with tiktoken, Clerk auth, Stripe billing, and Docker deployment.',
    problem:
      'A product for turning a description of an interface into code, with accounts and billing included.',
    built:
      'A multi-model assistant (GPT-4, Claude, Gemini) with streamed responses, per-user token costs, Clerk auth, Stripe billing, and Docker.',
    stack: ['MERN', 'TypeScript', 'PostgreSQL'],
    featured: true,
    link: '#',
  },
  {
    title: 'Intelligent E-Commerce Chatbot',
    hook: 'Conversational shopping assistant with context-aware recommendations.',
    description:
      'Cart management and order tracking via natural language. Groq-powered LLM with persistent chat history stored in PostgreSQL.',
    problem: 'Changing a cart or asking where an order is should not take a hunt through the store.',
    built:
      'A shop assistant on Groq that handles recommendations, the cart, and order questions, with the conversation stored in PostgreSQL.',
    stack: ['React', 'Express', 'PostgreSQL', 'Groq', 'LLaMA', 'Docker', 'Clerk'],
    link: '#',
  },
  {
    title: 'Plot — AI Chrome Extension',
    hook: 'Sidebar AI web copilot with local and cloud model routing.',
    description:
      'Manifest V3 extension with Ollama (local) and Claude (cloud) model routing, background service worker messaging, JWT auth, and Stripe billing.',
    problem:
      'A way to ask an AI about the page you are already on, and to choose a local model or a cloud one.',
    built:
      'A Chrome sidebar extension that routes between Ollama on the machine and Claude in the cloud, with sign-in and Stripe billing.',
    stack: ['React', 'Node.js/Express', 'Ollama'],
    link: '#',
    repo: 'https://github.com/mannan-op/PLOT--AI-web-copilot',
  },
  {
    title: 'MERN ChatApp',
    hook: 'Real-time chat with Socket.IO and modern React patterns.',
    description:
      'React 19 with Zustand state management, JWT in httpOnly cookies, Helmet.js security headers, and Arcjet rate limiting.',
    problem: 'A real-time messenger that keeps the session on the server, not in browser storage.',
    built:
      'React 19 chat with Socket.IO, Zustand, JWT stored in httpOnly cookies, Helmet headers, and Arcjet rate limiting.',
    stack: ['React 19', 'Socket.IO', 'Zustand', 'JWT', 'Helmet.js', 'Arcjet'],
    link: '#',
    repo: 'https://github.com/mannan-op/Mern-ChatApp',
  },
  {
    title: 'PromptForge',
    hook: 'ChatGPT-style prompt engine with real-time SSE token streaming.',
    description:
      'Multi-session management with full prompt history. Built for fast, responsive LLM interactions with Groq backend.',
    problem: 'Prompt experiments were getting lost between sessions.',
    built:
      'A chat-style prompt tool with live token streaming and a saved history for each session, backed by Groq.',
    stack: ['MERN', 'Groq', 'SSE'],
    link: '#',
  },
]
