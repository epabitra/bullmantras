import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/bullmantras",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Moves node_modules into a separate chunk
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Increase size limit (optional)
  }
})
