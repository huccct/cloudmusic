import react from '@vitejs/plugin-react-swc'
import path from 'path'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  resolve: { alias: { '@': path.resolve('./src') } },
})
