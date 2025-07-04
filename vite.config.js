
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH || "/", 
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        overpass: ['Overpass', 'sans-serif'],
        lato: ['Lato', 'san-serif'],
        firacode:['firacode', 'san-serif']
      },
    },
  },
 
})
