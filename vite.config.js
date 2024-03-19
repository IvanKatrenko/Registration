import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        jpg: {
          quality: 40
        }
      }),
      react()
    ]
  }
})
