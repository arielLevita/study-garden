/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        celeste: '#acdef2',
        azul: '#1a3551',
        naranja: '#f28705',
        claro: '#f3f4f6'
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-in-out forwards",
      },
    },
  },
  plugins: [],
}

