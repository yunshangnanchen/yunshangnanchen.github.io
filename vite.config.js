import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 注意：这里的 base 必须和你的 GitHub 仓库名一致
  // 如果你的仓库名是 'my-web-app'，则改为 '/my-web-app/'
  base: '/yunshangnanchen.github.io/',
})