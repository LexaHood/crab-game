import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
  ],
  build: {
    watch: {},
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'CrabGame',
      fileName: 'crab-game',
    },
    cssCodeSplit: true
  },
  define: { 'process.env.NODE_ENV': `"${mode}"` }
}))
