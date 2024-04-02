import { defineConfig } from 'vite'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'sensoro-0e',
      project: 'sentry-demo',
      authToken:
        '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',
    }),
  ],
  build: {
    sourcemap: true,
  },
})
