/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 看板・ロゴ準拠：深いグリーン（旧 navy の役割）
        brand: {
          DEFAULT: '#006058',
          50: '#F2F8F7',
          100: '#D9EBE9',
          700: '#1A8F84',
          800: '#0A7A70',
          900: '#006058',
        },
        // ターコイズ／青緑（アクセント専用）
        accent: {
          DEFAULT: '#00C1D2',
          400: '#33CDDB',
          500: '#00C1D2',
          600: '#00A8B8',
          700: '#008A96',
        },
        // 互換：既存クラスを緑へ寄せる
        navy: {
          DEFAULT: '#006058',
          50: '#F2F8F7',
          100: '#D9EBE9',
          700: '#1A8F84',
          800: '#0A7A70',
          900: '#006058',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-zen-kaku)',
          'Hiragino Kaku Gothic ProN',
          'Meiryo',
          'system-ui',
          'sans-serif',
        ],
        serif: [
          'var(--font-zen-old-mincho)',
          'Hiragino Mincho ProN',
          'Yu Mincho',
          'serif',
        ],
      },
      lineHeight: {
        relaxed: '1.65',
      },
      // 日本語本文向けの既定行間（leading-relaxed よりやや詰め）
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.6' }],
        sm: ['0.875rem', { lineHeight: '1.65' }],
        base: ['1rem', { lineHeight: '1.7' }],
        lg: ['1.125rem', { lineHeight: '1.7' }],
        xl: ['1.25rem', { lineHeight: '1.65' }],
        '2xl': ['1.5rem', { lineHeight: '1.6' }],
        '3xl': ['1.875rem', { lineHeight: '1.5' }],
        '4xl': ['2.25rem', { lineHeight: '1.45' }],
        '5xl': ['3rem', { lineHeight: '1.35' }],
        '6xl': ['3.75rem', { lineHeight: '1.25' }],
      },
    },
  },
  plugins: [],
}
