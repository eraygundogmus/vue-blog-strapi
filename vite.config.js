import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
    },
  },

  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()],
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
    }),
  ],
  optimizeDeps: {
    include: ['@apollo/client/core', '@apollo/client/cache'],
  },
  rollupInputOptions: {
    external: ['react'],
  },
})
