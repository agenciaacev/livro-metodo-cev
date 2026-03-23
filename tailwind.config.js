/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          light: '#e8d5a3',
          DEFAULT: '#c9a84c',
          dark: '#a07830',
        },
        cream: '#faf7f0',
        charcoal: '#1a1a1a',
        muted: '#6b6b6b',
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.4em',
      },
    },
  },
  plugins: [],
}