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
        // モダンプレミアムカラーパレット（高級感重視の調整）
        primary: '#1A2C42',     // 深いネイビー - 知性と信頼
        secondary: '#C5A059',   // 落ち着いたゴールド - 卓越と伝統
        accent: '#E6E9EE',      // ソフトスレート - 清潔感
        background: '#FCFDFF',  // オフホワイト - 可読性
        textMain: '#2D3436',    // チャコールグレー - 柔らかい視認性
        base: '#fdfdfd',        // オフホワイトベース
        text: '#2c3e50',        // 文字色
        navy: {
          DEFAULT: '#1A2C42',
          700: '#1e3a5f',
          800: '#162c49',
          900: '#0d2136',
          50: '#F0F2F5',
          100: '#DFE4EF',
        },
        gold: {
          DEFAULT: '#C5A059',
          400: '#FFBF00',
          500: '#FFC726',
          600: '#E6AD0F',
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
      // リファインドタイポグラフィ用カスタムクラス
      lineHeight: {
        relaxed: '1.8',
        spacious: '2.2',
      },
      boxShadow: {
        'elegant': '0 25px 50px -12px rgba(0, 0, 0, 0.1)', // blury shadow
        'elegant-sm': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
