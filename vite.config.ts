import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    vueDevTools({
      componentInspector: false,
      launchEditor: 'webstorm',
    }),
  ],
  build: {
    outDir: 'dist',
  },
  server: {
    fs: {
      strict: true,
    },
  },
  preview: {
    port: 4173,
    host: true
  }
})
