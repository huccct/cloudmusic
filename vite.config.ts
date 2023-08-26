import react from '@vitejs/plugin-react-swc'
import path from 'path'
import UnoCSS from 'unocss/vite'
import { ConfigEnv, UserConfigExport, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: './',
    plugins: [react(), UnoCSS()],
    resolve: { alias: { '@': path.resolve('./src') } },
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVE,
          // 需要代理跨域
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    build: {
      sourcemap: 'inline',
    },
  }
}
