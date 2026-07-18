export interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'TypeScript',
      'Responsive & Mobile-First Design',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'Django',
      'Django REST Framework',
      'RESTful API Design & Integration',
      'Auth & Security Best Practices',
    ],
  },
  {
    title: 'Languages',
    skills: ['JavaScript/TypeScript', 'Python', 'Java', 'C', 'Rust'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'SQL', 'SQLite', 'Prisma ORM'],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Git/GitHub',
      'Docker',
      'Vercel',
      'Render',
      'Netlify',
      'Figma',
      'Cursor',
      'GitHub Copilot',
    ],
  },
  {
    title: 'AI / Emerging Tech',
    skills: [
      'Vercel AI SDK',
      'Groq',
      'OpenAI',
      'Hugging Face',
      'Ollama',
      'LangChain.js',
      'LangGraph.js',
      'RAG',
      'Agentic AI',
    ],
  },
]
