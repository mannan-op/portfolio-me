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
  /** Legacy field. Often '#'. Prefer `repo` or `site` for a real URL. */
  link?: string
  /** Public repository. Omit when none exists. Never set this to '#'. */
  repo?: string
  /** Public website. Omit when none exists. Never set this to '#'. */
  site?: string
  /** Longer case-study note, shown behind a disclosure on the card. */
  note?: string
}

export const projects: Project[] = [
  {
    title: 'AutoStitch AI',
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
    repo: 'https://github.com/mannan-op/Auto-Stitch-v2',
  },
  {
    title: 'Abeeras Collection',
    hook: 'Coming-soon page for a clothing shop in Lahore.',
    description:
      'The live site is a coming-soon page for Abeera Collection. It names the shop, says Lahore, and says the shop is opening soon.',
    problem: 'The public site introduces Abeera Collection and says the shop is opening soon.',
    built:
      'A coming-soon page: the city, the name, and one line that the shop is opening soon.',
    stack: ['Next.js'],
    lead: true,
    site: 'https://abeera-shop.vercel.app',
    repo: 'https://github.com/mannan-op/abeera_shop',
  },
  {
    title: 'Tasbeeha Collections',
    hook: 'Online shop for Pakistani women’s clothing.',
    description:
      'An e-commerce homepage for Tasbeeha Collections. It shows lawn suits, silk formals, kurtas, shawls, and unstitched fabric, with prices and links into the shop.',
    problem:
      'The shop sells Pakistani women’s clothing and the site is where a visitor browses the collections.',
    built:
      'An online store. The homepage shows the summer collection, shop and new-arrival links, and product prices. Complimentary shipping is listed on orders over $75.',
    stack: ['Next.js'],
    lead: true,
    site: 'https://www.tasbeehacollections.com',
  },
  {
    title: 'Construction Hub',
    hook: 'Desktop app for job sites, milestones, and billing.',
    description:
      'A cross-platform desktop app for a freelance construction client: job sites, milestones, and invoices, offline, with Argon2 access control.',
    problem:
      'A freelance client running a construction business needed one place to track job sites, billing, and milestones, instead of spreadsheets spread across the team.',
    built:
      'A Tauri, React, and Rust desktop app that works offline and installs like a normal program. SQLite stores projects, milestones, and invoices on the machine. Argon2 limits billing data to authorized staff.',
    stack: ['Tauri', 'React', 'Rust', 'SQLite', 'Argon2'],
    lead: true,
    note: 'A freelance client running a construction business needed a way to track multiple job sites, manage billing, and monitor milestones, without relying on spreadsheets scattered across the team. I built a cross-platform desktop app in Tauri, React, and Rust: a fast, native-feeling app that works offline and installs like any other desktop program. Keeping it lightweight meant Tauri rather than Electron, while still supporting the relationships between projects, milestones, and invoices. A local SQLite database stores the data offline, and Argon2 authentication limits billing data to authorized staff. From that one app the client can track project status, generate billing records, and monitor milestone completion.',
  },
  {
    title: 'n8n video automation',
    hook: 'Automated short-form video content pipeline.',
    description:
      'Orchestrated in n8n with local Ollama LLMs (via ngrok), Pexels stock footage, Creatomate rendering, and YouTube upload automation.',
    problem: 'Short-form video was being assembled by hand, from the script through to the upload.',
    built:
      'An n8n workflow that drafts with a local model, pulls stock footage from Pexels, renders in Creatomate, and uploads to YouTube.',
    stack: ['n8n', 'Ollama', 'Pexels', 'Creatomate', 'YouTube'],
    lead: true,
  },
  {
    // TODO: Abdul to fill in what Hisab AI does, the stack, and any real URL.
    title: 'Hisab AI',
    hook: 'WhatsApp automation.',
    description: 'WhatsApp automation. Details to be added.',
    problem: 'Details to be added.',
    built: 'Details to be added.',
    stack: [],
    lead: true,
  },
]
