/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf8ee',
          100: '#f5edd3',
          200: '#eddca9',
          300: '#e2c578',
          400: '#d7af4e',
          500: '#c5a059',
          600: '#a88438',
          700: '#86642d',
          800: '#6d5029',
          900: '#5c4326',
        },
        champagne: {
          DEFAULT: '#f5ebd7',
          light: '#fbf6ec',
          dark: '#e3d2b3',
        },
        charcoal: {
          800: '#1e1e1e',
          850: '#171717',
          900: '#121212',
          950: '#0a0a0a',
        },
        warm: {
          white: '#fcfbf9',
          cream: '#f6f3ed',
          muted: '#a39f99',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
