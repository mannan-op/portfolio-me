import { PORTFOLIO_CHUNKS, type KnowledgeChunk } from './knowledge.js'

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'must', 'shall', 'can', 'need', 'dare',
  'ought', 'used', 'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by',
  'from', 'up', 'about', 'into', 'through', 'during', 'before', 'after',
  'above', 'below', 'between', 'out', 'off', 'over', 'under', 'again',
  'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why',
  'how', 'all', 'each', 'few', 'more', 'most', 'other', 'some', 'such',
  'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very',
  'just', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while',
  'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am',
  'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us',
  'them', 'my', 'your', 'his', 'its', 'our', 'their', 'tell', 'know',
])

const PORTFOLIO_SIGNALS = new Set([
  'abdul', 'mannan', 'portfolio', 'project', 'projects', 'skill', 'skills',
  'experience', 'work', 'job', 'hire', 'contact', 'email', 'phone', 'github',
  'developer', 'engineer', 'stack', 'tech', 'technology', 'education',
  'degree', 'university', 'fast', 'nuces', 'certification', 'award', 'awards',
  'react', 'nextjs', 'next', 'node', 'django', 'typescript', 'python',
  'freelance', 'commission', 'client', 'autostitch', 'designforge', 'groq',
  'ai', 'llm', 'rag', 'built', 'builds', 'background', 'resume', 'cv',
  'available', 'lahore', 'pakistan', 'fullstack', 'full', 'backend', 'frontend',
])

function tokenize(text: string): string[] {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z0-9+#./\s-]/g, ' ')
      .match(/\b[a-z0-9+#./-]+\b/g)
      ?.filter((t) => t.length > 1 && !STOP_WORDS.has(t)) ?? []
  )
}

function scoreChunk(queryTokens: string[], chunk: KnowledgeChunk): number {
  const contentTokens = tokenize(chunk.content + ' ' + chunk.topic)
  const contentSet = new Set(contentTokens)

  if (queryTokens.length === 0) return 0

  let hits = 0
  for (const token of queryTokens) {
    if (contentSet.has(token)) hits++
    else if ([...contentSet].some((c) => c.includes(token) || token.includes(c))) hits += 0.5
  }

  return hits / queryTokens.length
}

function hasPortfolioIntent(query: string): boolean {
  const tokens = tokenize(query)
  return tokens.some((t) => PORTFOLIO_SIGNALS.has(t))
}

export interface RetrievedChunk extends KnowledgeChunk {
  score: number
}

export function retrieveChunks(query: string, topK = 4): RetrievedChunk[] {
  const queryTokens = tokenize(query)

  return PORTFOLIO_CHUNKS.map((chunk) => ({
    ...chunk,
    score: scoreChunk(queryTokens, chunk),
  }))
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
}

export function isRelevantQuery(query: string, chunks: RetrievedChunk[]): boolean {
  if (hasPortfolioIntent(query)) return true
  if (chunks.length === 0) return false
  return chunks[0].score >= 0.2
}

export function buildContext(chunks: RetrievedChunk[]): string {
  return chunks.map((c) => `[${c.topic}]\n${c.content}`).join('\n\n')
}
