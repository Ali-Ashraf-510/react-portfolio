import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Content-Security-Policy': `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval';
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com;
        font-src 'self' data: https://fonts.gstatic.com https://cdnjs.cloudflare.com;
        img-src 'self' data: https:;
        worker-src 'self' blob:;
        connect-src 'self' ws:;
        frame-ancestors 'none'
      `.replace(/\s+/g, ' ').trim()
    }
  },
  build: {
    target: 'esnext',
    sourcemap: true
  }
})
