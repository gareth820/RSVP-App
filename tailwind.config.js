
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#5D3E6B',
        'brand-green': '#7C9070',
        'brand-beige': '#FDFBF7',
        'brand-deep': '#2D242F',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'widest-extra': '0.3em',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
