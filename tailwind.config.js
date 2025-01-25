/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-soft-blue': 'hsl(215, 51%, 70%)',
        'primary-cyan': 'hsl(178, 100%, 50%)',
        'secondary-main-BG': 'hsl(217, 54%, 11%)',
        'secondary-card-BG': 'hsl(216, 50%, 16%)',
        'secondary-line': 'hsl(215, 32%, 27%)'
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif']
      },
      width: {
        "card": '21.875rem',
        "inner_card": '18.875rem',
        "card_mobile": '20rem',
      },
      height: {
        "card": '37.25rem',
        "thumbnail": '18.875rem',
      },
      fontSize: {
        heading: '1.375rem',
        body: '1.125rem',
        caption: '1rem',
        caption_mobile: '0.9375rem'
      }
    },
  },
  plugins: [],
}