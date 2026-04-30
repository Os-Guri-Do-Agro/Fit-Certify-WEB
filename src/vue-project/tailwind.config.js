/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#00C6FE',
        lime: '#88CE0D',
        dark: '#060606',
        'dark-2': '#0e0e0e',
        'dark-3': '#1a1a1a',
      },
      fontFamily: {
        head: ['"Space Grotesk"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      letterSpacing: {
        wider2: '0.08em',
        widest2: '0.14em',
      },
    },
  },
  plugins: [],
}
