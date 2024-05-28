/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      spacing: {
        '8xl': '90rem',
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/typography'),
  ],
}