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
          50: '#FDFBF7',
          100: '#FAF4E8',
          200: '#F3E5C8',
          300: '#EBD4A2',
          400: '#DFC075',
          500: '#C5A059', // Primary metallic gold
          600: '#A98440',
          700: '#8A682D',
          800: '#694D1D',
          900: '#483310',
          metallic: '#D4AF37',
          accent: '#E6CA65',
          champagne: '#EADBC8',
          subtle: '#F6EFE2'
        },
        ivory: {
          50: '#FDFCF9',
          100: '#FAF8F5',
          200: '#F5EFEB',
          300: '#EDE4DC',
          400: '#DDD0C4',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#666666',
          600: '#4D4D4D',
          700: '#333333',
          800: '#222222',
          900: '#141414',
          950: '#0A0A0A',
        },
        ruby: '#9B1B30',
        emerald: '#0B4D3C',
        sapphire: '#0F2537',
        pearl: '#F8F7F3',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(197, 160, 89, 0.12)',
        'gold-md': '0 4px 20px rgba(197, 160, 89, 0.18)',
        'gold-lg': '0 10px 30px rgba(197, 160, 89, 0.22)',
        'luxury': '0 12px 40px -10px rgba(20, 20, 20, 0.08)',
        'luxury-hover': '0 20px 45px -12px rgba(197, 160, 89, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
