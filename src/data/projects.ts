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
  /** Short honest credit, such as Team project. */
  tag?: string
}

export const projects: Project[] = [
  {
    title: 'AutoStitch AI',
    hook: 'Team project. A marketplace for custom tailoring.',
    description:
      'Team project. Auto Stitch is a multi-vendor bespoke clothing marketplace: shop, custom bids, virtual try-on, order tracking, boutique tools, and admin. Abdul’s public repository is a fork of that project.',
    problem:
      'Shoppers and boutiques needed one place for custom clothing: a catalogue, quotes, messages, and a way to follow an order.',
    built:
      'Built with a team. The app is a React and Vite storefront with a Node and Express API, MongoDB, and Socket.IO. It includes the shop, virtual try-on, custom stitching bids, live order tracking, boutique dashboards, and an admin area.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    featured: true,
    lead: true,
    tag: 'Team project',
    repo: 'https://github.com/mannan-op/Auto-Stitch-v2',
  },
  {
    title: 'Abeeras Collection',
    hook: 'Pakistani womenswear shop in Lahore.',
    description:
      'An online store for Abeera, a Lahore house selling lawn, chiffon, and stitched and unstitched clothes. The homepage leads with the Eid collection. Cash on delivery is offered, and product pages include WhatsApp help.',
    problem:
      'Abeera needed a shop that could show lawn, chiffon, and stitched and unstitched collections, including Eid, and take orders with cash on delivery.',
    built:
      'An e-commerce store based in Lahore. The homepage opens on the Eid collection, with paths for the stitched collection and unstitched fabric. The banner lists cash on delivery and free delivery over Rs. 5,000, and product pages offer WhatsApp help.',
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
