/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#1e3a5f',
          800: '#162c49',
          900: '#0d2136',
        },
        gold: {
          400: '#ffbf00',
          500: '#ffc726',
          600: '#e6ad0f',
        },
      },
    },
  },
  plugins: [],
}
