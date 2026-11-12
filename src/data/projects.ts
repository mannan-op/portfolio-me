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
  /** Confirmed how-it-works notes. Shown under Details. No metrics. */
  details?: {
    summary: string
    steps: readonly string[]
  }
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
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Stripe'],
    details: {
      summary:
        'For shoppers ordering custom clothes and for the boutiques that make them. Abdul’s public repository is a fork of the team project.',
      steps: [
        'The shop covers collections, search, fabric and size choices, a wishlist, and a cart.',
        'A customer sends a custom request with reference photos, measurements, and a deadline. Boutiques reply with proposals. Messages use Socket.IO, and accepting a proposal creates the order.',
        'Order tracking moves through placed, accepted, in tailoring, quality passed, dispatched, and delivered.',
        'Boutique dashboards cover the catalogue, stock, custom requests, and the order pipeline. An admin area covers boutique KYC verification, listing moderation, and user management.',
        'Stripe is the payment gateway in the repository.',
      ],
    },
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
    details: {
      summary:
        'For Abeera, a Lahore house selling lawn, chiffon, and stitched and unstitched clothes. The public shop is a Next.js storefront. A separate desktop app bills the store.',
      steps: [
        'The homepage leads with the Eid collection, with paths for the stitched collection and unstitched fabric.',
        'The site banner lists cash on delivery and free delivery over Rs. 5,000. Product pages offer WhatsApp help.',
        'A separate Tauri, React, and Rust desktop app stores clothing inventory in SQLite: name, barcode, category, size, color, price, and quantity.',
        'A bill is a cart saved on the machine. If a phone number is entered, the app can open that bill in WhatsApp or SMS.',
      ],
    },
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
    details: {
      summary: 'For shoppers browsing Tasbeeha Collections.',
      steps: [
        'The homepage shows lawn suits, silk formals, kurtas, shawls, and unstitched fabric, with prices.',
        'It links into the shop and the new arrivals.',
        'Complimentary shipping is listed on orders over $75.',
      ],
    },
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
    details: {
      summary:
        'For a freelance client running a construction business, in place of spreadsheets spread across the team.',
      steps: [
        'The app is cross-platform. Tauri keeps it lighter than Electron while still holding the relationships between projects, milestones, and invoices.',
        'It works offline and installs like a normal desktop program.',
        'A local SQLite database stores projects, milestones, and invoices on the machine.',
        'Argon2 authentication limits billing data to authorized staff.',
        'From that app the client can track project status, generate billing records, and monitor milestone completion.',
      ],
    },
    lead: true,
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
    details: {
      summary:
        'A short-form video pipeline orchestrated in n8n. The local model is Ollama, reached through ngrok.',
      steps: [
        'n8n drafts the video with a local Ollama model, reached through ngrok.',
        'The workflow pulls stock footage from Pexels.',
        'Creatomate renders the video.',
        'The workflow uploads it to YouTube.',
      ],
    },
    lead: true,
  },
  {
    title: 'Hisab AI',
    hook: 'Personal budget bot for WhatsApp.',
    description:
      'A personal budget bot. You set how much money you have, text each expense in plain language, and ask what is left. It keeps the totals, splits spending by category, and can reserve cash for a date.',
    problem:
      'A personal budget has to record what you have, what you spent, and what is set aside for a date.',
    built:
      'A Node, TypeScript, and Express bot with SQLite. One function handles each message. The same ledger runs in a local CLI, through a Twilio WhatsApp sandbox webhook, or through the Meta WhatsApp Cloud API.',
    stack: ['Node.js', 'TypeScript', 'Express', 'SQLite', 'WhatsApp'],
    details: {
      summary:
        'For one person tracking their own money. Each phone number has its own ledger in a single SQLite file.',
      steps: [
        'Set or add funds. Setting funds replaces the balance. Older expenses stay in reports and stop affecting that balance.',
        'Text an expense in plain language. A keyword map files it as food, transport, groceries, bills, shopping, entertainment, health, or other.',
        'Ask for the balance, a category report for the week or month, the last ten entries, or advice. Advice covers the 7-day burn, how long available cash lasts at that pace, the biggest category this month, and whether each reserve is covered.',
        'Reserve an amount for a date. Available cash is the balance minus those reserves, and the reply includes a safe daily limit so a reserve is not spent early.',
        'Undo the last funds change, expense, or goal change. Reset deletes that ledger only after a confirmation.',
        'With no API key, every command still works. If an OpenAI key is set, messages the parser does not understand can be interpreted by the model, and advice can be rewritten only when every figure is still there.',
      ],
    },
    lead: true,
    repo: 'https://github.com/mannan-op/whats_tracky',
  },
]
