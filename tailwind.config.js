/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          rose: "#fce7f3",
          pink: "#fbcfe8",
          blush: "#fff1f2",
          sky: "#e0f2fe",
          blue: "#bae6fd",
          lavender: "#f3e8ff",
          peach: "#ffedd5",
          gold: "#fef08a",
        },
        rose: {
          400: "#f43f5e",
          500: "#e11d48",
          600: "#be123c",
        },
        pink: {
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'pastel-glow': '0 10px 30px -10px rgba(244, 114, 182, 0.25), 0 4px 15px -5px rgba(186, 230, 253, 0.3)',
        'pastel-card': '0 15px 35px -5px rgba(244, 114, 182, 0.12), 0 5px 15px rgba(0, 0, 0, 0.04)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.8)',
      },
      backgroundImage: {
        'gradient-pastel': 'linear-gradient(135deg, #fff5f7 0%, #f0fdf4 50%, #f0f9ff 100%)',
        'gradient-rose-sky': 'linear-gradient(135deg, #fbcfe8 0%, #bae6fd 100%)',
        'gradient-gold-pink': 'linear-gradient(135deg, #fef3c7 0%, #fbcfe8 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
