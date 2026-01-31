
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#5D3E6B', // Wisteria
        'brand-green': '#7C9070',  // Sage
        'brand-beige': '#FDFBF7',  // Parchment
        'brand-deep': '#2D242F',   // Ink
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
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'drift': 'drift 8s ease-in-out infinite',
        'drift-reverse': 'drift-reverse 10s ease-in-out infinite',
        'reveal': 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'seal': 'seal 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'petal-fall': 'petalFall 10s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(15px, -15px) rotate(5deg)' },
        },
        'drift-reverse': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-20px, 10px) rotate(-3deg)' },
        },
        reveal: {
          '0%': { clipPath: 'inset(100% 0 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        seal: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        }
      },
    },
  },
  plugins: [],
}
