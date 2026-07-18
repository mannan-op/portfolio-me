export interface KnowledgeChunk {
  id: string
  topic: string
  content: string
}

export const PORTFOLIO_CHUNKS: KnowledgeChunk[] = [
  {
    id: 'profile-overview',
    topic: 'Overview',
    content:
      'Abdul Mannan is a Full-Stack Software Developer with 2+ years of experience. He builds production-grade web apps with React.js, Next.js, Node.js, and AI-integrated features. He is based in Lahore, Pakistan and is open to work opportunities.',
  },
  {
    id: 'profile-about',
    topic: 'About',
    content:
      'Abdul Mannan is a full-stack developer who works across React, Next.js, Node.js, and Django REST Framework. He designs PostgreSQL schemas, implements JWT auth, and integrates LLM-powered features with streaming and tool calling. He cares about performance, security, and professional craft.',
  },
  {
    id: 'contact',
    topic: 'Contact',
    content:
      'Contact Abdul Mannan: Email contact@abdulmannan.me, Phone (+92) 322 4574467, GitHub github.com/mannan-op, Website abdulmannan.me. He welcomes project inquiries and collaboration.',
  },
  {
    id: 'education',
    topic: 'Education',
    content:
      'Abdul Mannan is pursuing BS Computer Science at FAST-NUCES Lahore (Fall 2022 — Expected 2027). Coursework includes Data Structures & Algorithms, Database Systems, Software Engineering, Operating Systems, Compiler Construction, and Artificial Intelligence.',
  },
  {
    id: 'skills-frontend',
    topic: 'Skills — Frontend',
    content:
      'Frontend skills: React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, TypeScript, Responsive & Mobile-First Design.',
  },
  {
    id: 'skills-backend',
    topic: 'Skills — Backend',
    content:
      'Backend skills: Node.js, Express.js, Django, Django REST Framework, RESTful API Design & Integration, Auth & Security Best Practices.',
  },
  {
    id: 'skills-languages',
    topic: 'Skills — Languages',
    content: 'Programming languages: JavaScript/TypeScript, Python, Java, C, Rust.',
  },
  {
    id: 'skills-databases',
    topic: 'Skills — Databases',
    content: 'Database skills: PostgreSQL, MongoDB, SQL, SQLite, Prisma ORM.',
  },
  {
    id: 'skills-tools',
    topic: 'Skills — Tools',
    content:
      'Tools & platforms: Git/GitHub, Docker, Vercel, Render, Netlify, Figma, Cursor, GitHub Copilot.',
  },
  {
    id: 'skills-ai',
    topic: 'Skills — AI',
    content:
      'AI & emerging tech: Vercel AI SDK, Groq, OpenAI, Hugging Face, Ollama, LangChain.js, LangGraph.js, RAG, Agentic AI.',
  },
  {
    id: 'exp-fullstack',
    topic: 'Experience — Full-Stack AI Web Engineer',
    content:
      'Full-Stack AI Web Engineer (2023 — 2026): Built responsive UIs with React, Next.js, and Node.js. Integrated RESTful APIs with PostgreSQL and MongoDB. Implemented JWT/httpOnly cookie auth, rate limiting, and Helmet.js. Optimized cross-stack performance. Integrated LLM streaming, RAG pipelines, and agentic workflows using Vercel AI SDK, Groq, and LangChain.',
  },
  {
    id: 'exp-freelance',
    topic: 'Experience — Freelance',
    content:
      'Freelance Full-Stack Developer (2022 — Present), commission-based independent client work. Delivers end-to-end solutions including Tauri/Rust desktop apps, responsive web apps, and AI tools. Owns full delivery cycle from UI to deployment with mobile-first responsive testing.',
  },
  {
    id: 'awards',
    topic: 'Certifications',
    content:
      'Certifications: Udemy Full Stack MERN Development, Udemy Next.js & TypeScript, Udemy LangChain & Generative AI, AI Engineering Curriculum covering LLM APIs, Prompt Engineering, Streaming, Tool Calling, Structured Outputs, Vercel AI SDK, Clerk Auth, and Vercel Deployment.',
  },
  {
    id: 'project-autostitch',
    topic: 'Project — AutoStitch',
    content:
      'AutoStitch (Featured): AI-powered ecommerce marketplace for Pakistani ethnic wear. Stack: Next.js, Django, DRF, PostgreSQL, Celery, Redis, Python. Features JWT auth, AI virtual try-on via Celery/Redis pipeline, AI stylist chatbot, multi-step checkout, guest cart merge-on-login, and admin dashboard. Turborepo monorepo.',
  },
  {
    id: 'project-designforge',
    topic: 'Project — DesignForge AI',
    content:
      'DesignForge AI (Featured): AI-powered UI/UX design assistant and code generator SaaS. Stack: MERN, TypeScript, PostgreSQL. Multi-provider LLM (GPT-4, Claude, Gemini) via Vercel AI SDK, SSE streaming, token cost tracking with tiktoken, Clerk auth, Stripe billing, Docker deployment.',
  },
  {
    id: 'project-ecommerce-chatbot',
    topic: 'Project — E-Commerce Chatbot',
    content:
      'Intelligent E-Commerce Chatbot: Conversational shopping assistant with recommendations, cart management, and order tracking. Groq-powered LLM with PostgreSQL chat history. Stack: React, Express, PostgreSQL, Groq, LLaMA, Docker, Clerk.',
  },
  {
    id: 'project-promptforge',
    topic: 'Project — PromptForge',
    content:
      'PromptForge: ChatGPT-style prompt engine with real-time SSE token streaming and multi-session management. Stack: MERN, Groq, SSE.',
  },
  {
    id: 'project-construction',
    topic: 'Project — Construction Hub',
    content:
      'Construction Hub: Cross-platform desktop app for project tracking and billing, built for a freelance client. Argon2 auth, SQLite backend. Stack: Tauri, React, Rust.',
  },
  {
    id: 'project-plot',
    topic: 'Project — Plot',
    content:
      'Plot — AI Chrome Extension: Sidebar AI web copilot with Ollama (local) and Claude (cloud) model routing. Manifest V3, JWT auth, Stripe billing. Stack: React, Node.js/Express, Ollama.',
  },
  {
    id: 'project-chatapp',
    topic: 'Project — MERN ChatApp',
    content:
      'MERN ChatApp: Real-time chat with Socket.IO, React 19, Zustand, JWT in httpOnly cookies, Helmet.js, Arcjet rate limiting.',
  },
  {
    id: 'project-n8n',
    topic: 'Project — n8n Video Automation',
    content:
      'n8n AI Video Automation: Automated short-form video pipeline using Ollama LLMs, Pexels, Creatomate, and YouTube upload — orchestrated in n8n.',
  },
]
