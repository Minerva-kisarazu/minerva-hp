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
        // モダンプレミアムカラーパレット
        primary: '#1a2e44',     // 深いネイビー - 信頼
        accent: '#c5a059',      // 落ち着いたゴールド - 卓越
        base: '#fdfdfd',        // オフホワイト - 清潔
        text: '#2c3e50',        // 柔らかい黒 - 可読性
        navy: {
          DEFAULT: '#1a2e44',
          700: '#1e3a5f',
          800: '#162c49',
          900: '#0d2136',
        },
        gold: {
          DEFAULT: '#c5a059',
          400: '#ffbf00',
          500: '#ffc726',
          600: '#e6ad0f',
        },
      },
      fontFamily: {
        serif: [
          'Noto Serif JP',
          'Georgia',
          'Times New Roman',
          'serif',
        ],
        sans: [
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      letterSpacing: {
        wide: '.01em',
        wider: '.02em',
        widest: '.03em',
      },
    },
  },
  plugins: [],
}
