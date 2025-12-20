import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * 关键配置：
   * 因为你的仓库名是 'yunshangnanchen'，
   * 你的 GitHub Pages 地址是 https://yunshangnanchen.github.io/yunshangnanchen/
   * 所以 base 必须是 '/yunshangnanchen/'
   */
  base: '/Project-Files_yunshang', 
  
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
  }
})