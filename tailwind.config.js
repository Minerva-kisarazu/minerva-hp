/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A2C42',
          50: '#F0F2F5',
          100: '#DFE4EF',
          700: '#1E3A5F',
          800: '#162C49',
          900: '#0D2136',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-noto-sans-jp)',
          'Hiragino Kaku Gothic ProN',
          'Meiryo',
          'system-ui',
          'sans-serif',
        ],
        serif: [
          'var(--font-noto-serif-jp)',
          'Hiragino Mincho ProN',
          'Yu Mincho',
          'serif',
        ],
      },
      lineHeight: {
        relaxed: '1.8',
      },
    },
  },
  plugins: [],
}
