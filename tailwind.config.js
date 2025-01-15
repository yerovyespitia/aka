/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B1E28',
        secondary: '#292C35',
        txtGray: '#A6ACCD',
      },
    },
  },
  plugins: [],
}
