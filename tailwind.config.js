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
      // Tailwind 既定の text-* は行間 1.5 前後で日本語には詰まりすぎるため、
      // サイズごとに日本語向けの行間を既定値として持たせる。
      // 個別に leading-* を指定した箇所はそちらが優先される。
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.7' }],
        sm: ['0.875rem', { lineHeight: '1.8' }],
        base: ['1rem', { lineHeight: '1.9' }],
        lg: ['1.125rem', { lineHeight: '1.85' }],
        xl: ['1.25rem', { lineHeight: '1.75' }],
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
