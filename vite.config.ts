import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const DIST = fileURLToPath(new URL('./dist', import.meta.url))

/**
 * Makes `npm run preview` resolve URLs the way the static host does.
 *
 * Cloudflare Pages answers /services with dist/services/index.html and unknown
 * URLs with 404.html at a real 404 status. Vite's preview server does neither —
 * it either rewrites everything to index.html (appType 'spa', which hides the
 * whole point of prerendering) or 404s on every extensionless path ('mpa').
 * Neither tells you what visitors will actually get, so preview does it here.
 */
function previewStaticHost(): Plugin {
  return {
    name: 'preview-static-host',
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const [pathname = '/', query] = (req.url ?? '/').split('?')

        // Real assets (anything with an extension) are served untouched.
        if (path.extname(pathname)) return next()

        const clean = pathname === '/' ? '' : pathname.replace(/\/+$/, '')
        const candidate = path.join(DIST, clean, 'index.html')

        if (existsSync(candidate)) {
          req.url = `${clean}/index.html${query ? `?${query}` : ''}`
          return next()
        }

        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(readFileSync(path.join(DIST, '404.html')))
      })
    },
  }
}

/**
 * In dev there are no prerendered files, so /services has to fall back to
 * index.html for the client router to handle it.
 *
 * The build sets appType 'mpa' instead (see below), because the SPA fallback is
 * exactly what breaks prerendering: a catch-all rewrite to index.html means the
 * server answers /services with the homepage's HTML and the per-route file on
 * disk is never read. Keeping the fallback dev-only is what makes `npm run
 * preview` an honest rehearsal of production.
 */
function devSpaFallback(): Plugin {
  return {
    name: 'dev-spa-fallback',
    apply: 'serve',
    configureServer(server) {
      // Returned closure runs after Vite's own middlewares, so real files win.
      return () => {
        server.middlewares.use((req, _res, next) => {
          if (req.method !== 'GET' && req.method !== 'HEAD') return next()
          const pathname = (req.url ?? '').split('?')[0]
          const isAsset = pathname.includes('.') || pathname.startsWith('/@')
          if (!isAsset) req.url = '/index.html'
          next()
        })
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), devSpaFallback(), previewStaticHost()],

  /**
   * 'mpa' turns off Vite's built-in SPA fallback so `vite preview` resolves
   * /services to dist/services/index.html and returns a real 404 for unknown
   * URLs — which is how a static host serves the prerendered build.
   */
  appType: 'mpa',

  build: {
    // Modern baseline — smaller output than the default, and every browser that
    // supports the ES module <script> this app ships with supports these.
    target: 'es2020',
    cssCodeSplit: true,
    // Source maps bloat the deploy; the bundle is already public.
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split rarely-changing vendor code into its own chunks so a content
        // change doesn't force visitors to re-download React on every deploy.
        // Matched by resolved path rather than the string form of manualChunks,
        // which misses subpath imports like `react-dom/client`.
        //
        // Skipped for the SSR bundle: it runs once at build time in Node, where
        // splitting buys nothing, and manual chunks fight Rollup's SSR output.
        manualChunks: isSsrBuild
          ? undefined
          : (id: string) => {
            if (!id.includes('node_modules')) return
            if (id.includes('react-icons')) return 'icons'
            if (
              /node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom|@remix-run)[\\/]/.test(id)
            ) {
              return 'react'
            }
            return
          },
      },
    },
  },
}))
