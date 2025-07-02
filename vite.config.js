/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        overpass: ['Overpass', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      }
    }
  },
  plugins: []
}

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// // import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//    theme: {
//     extend: {
//       fontFamily: {
//         jost: ['Jost', 'sans-serif'],
//         overpass: ['Overpass', 'sans-serif'],
//         lato: ['Lato', 'san-serif']
//       },
//     },
//   },
//   plugins: [react()],
//   base: process.env.VITE_BASE_PATH || "/"
// })
