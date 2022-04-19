import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()],
  optimizeDeps: {
    include: ['@apollo/client/core', '@apollo/client/cache'],
  },
  rollupInputOptions: {
    external: ['react'],
  },
})
