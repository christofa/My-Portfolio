import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      // This ensures that '@' maps to your 'src' directory
      '@': path.resolve(__dirname, './src'),
      "@locator/babel-jsx/dist": path.resolve(__dirname, './node_modules/@locator/babel-jsx/dist'),
      // You can add more specific aliases if needed, e.g.:
      // '@/components': path.resolve(__dirname, './src/components'),
      // '@/pages': path.resolve(__dirname, './src/Pages'),
    },
  },
  
})
