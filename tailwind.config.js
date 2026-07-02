/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants.tsx"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        acer: {
          blue: '#175298',
          dark: '#3D3D3D',
          light: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
