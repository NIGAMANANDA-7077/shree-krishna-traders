/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream:   '#FFF7EC',
        creamDark: '#F5EDD8',
        surface: '#FFFFFF',
        orange:  '#F45F02',
        orangeHover: '#DE5400',
        charcoal: '#2D241C',
        mid:     '#5C4D3E',
        muted:   '#9A8470',
        border:  'rgba(30,22,21,0.1)',
        borderHover: 'rgba(244,95,2,0.5)',
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        sans:    ['"Manrope"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card:  '0 2px 18px -6px rgba(30,22,21,0.08)',
        cardHover: '0 16px 40px -12px rgba(244,95,2,0.18)',
        orange: '0 0 28px rgba(244,95,2,0.38)',
      }
    },
  },
  plugins: [],
}
