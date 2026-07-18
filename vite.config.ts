import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import type { IncomingMessage, ServerResponse } from 'http'

const MAX_BODY_BYTES = 8_192

function readBody(req: IncomingMessage, maxBytes = MAX_BODY_BYTES): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    let total = 0

    req.on('data', (chunk) => {
      const buf = chunk as Buffer
      total += buf.length
      if (total > maxBytes) {
        reject(new Error('BODY_TOO_LARGE'))
        req.destroy()
        return
      }
      chunks.push(buf)
    })
    req.on('end', () => resolve(Buffer.concat(chunks).toString()))
    req.on('error', reject)
  })
}

function chatApiDevPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'chat-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res: ServerResponse) => {
        const origin = (req.headers.origin as string | undefined) ?? null
        const referer = (req.headers.referer as string | undefined) ?? null
        const ip = req.socket.remoteAddress ?? '127.0.0.1'
        const contentLength = parseInt(req.headers['content-length'] ?? '0', 10) || 0

        process.env.GROQ_API_KEY = env.GROQ_API_KEY ?? process.env.GROQ_API_KEY
        process.env.CHAT_ALLOWED_ORIGINS =
          env.CHAT_ALLOWED_ORIGINS ?? process.env.CHAT_ALLOWED_ORIGINS

        const { handleOptions, processChatRequest } = await import('./shared/api-handler.ts')

        if (req.method === 'OPTIONS') {
          const result = handleOptions(origin, ip, referer)
          res.statusCode = result.statusCode
          for (const [key, value] of Object.entries(result.headers)) {
            res.setHeader(key, value)
          }
          res.end(result.body)
          return
        }

        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        try {
          const body = await readBody(req)
          const result = await processChatRequest({ body, origin, referer, ip, contentLength })

          res.statusCode = result.statusCode
          for (const [key, value] of Object.entries(result.headers)) {
            res.setHeader(key, value)
          }
          res.end(result.body)
        } catch (err) {
          const isTooLarge = err instanceof Error && err.message === 'BODY_TOO_LARGE'
          res.statusCode = isTooLarge ? 413 : 500
          res.setHeader('Content-Type', 'application/json')
          res.end(
            JSON.stringify({
              error: isTooLarge
                ? 'Invalid request. Please check your message and try again.'
                : 'Something went wrong. Please try again later.',
            }),
          )
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss(), chatApiDevPlugin(env)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
