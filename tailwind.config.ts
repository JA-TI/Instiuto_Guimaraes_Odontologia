import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#29d8db',
          500: '#00b4d8',
          600: '#0284c7',
          700: '#01578c',
          800: '#0c385c',
          900: '#07243d',
          950: '#031422',
        },
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          800: '#0f172a',
          900: '#091528',
          950: '#050b14',
        },
        accent: {
          gold: '#f59e0b',
          emerald: '#10b981',
          teal: '#14b8a6',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-brand': '0 0 40px -10px rgba(41, 216, 219, 0.35)',
        'glow-subtle': '0 10px 30px -5px rgba(1, 87, 140, 0.12)',
        'card-hover': '0 20px 40px -15px rgba(1, 87, 140, 0.15)',
        'premium': '0 25px 50px -12px rgba(15, 23, 42, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
