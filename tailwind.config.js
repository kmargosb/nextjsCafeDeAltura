/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cardsBg': "url('/assets/backgroundcafecards.jpeg')",
      },
      colors: {
        'Grey': '#515051',
        'gray-300': '#D1D5DB',
        'gray-500': '#6B7280',
        'gray-700': '#374151',
        'DarkGrey': '#2B2A2B',
        'Black': '#1F1815',
        'RealBlack': '#000',
        'BlackP': '#111827',
        'Taupe': '#E3DED7',
        'GreenAll': '#2A5B45',
        'GreenA': 'rgba(42, 91, 69, 0.70)',
        'GreenB': 'rgba(42, 91, 69, 0.10)',
        'OffWhite': '#F7F5F3',
        'hover-nav': 'rgba(247, 245, 243, 0.10)',
        'hover-inp': '#9B9EA3',
        'focus-inp': '#3F8F6B',
        'white': '#fff',
      },
      fontFamily: {
        outfit: ['Outfit', 'regular']
      }
    },
  },
  plugins: [],
}
