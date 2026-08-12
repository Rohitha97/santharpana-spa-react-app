import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

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
        manualChunks(id) {
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
})
