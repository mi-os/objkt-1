import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  return {
    root: './src',
    publicDir: '../public',
    base: mode === 'development' ? '/' : '/objkt-1/',
    build: {
      rollupOptions: {
        input: {
          home: path.resolve(__dirname, './src/index.html'),
        },
      },
      outDir: '../dist',
      emptyOutDir: true,
    },
    server: {
      host: true,
    },
  }
})
