/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'fira': ['Fira Code', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        secondary: {
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        accent: {
          cyan: '#06b6d4',
          green: '#10b981',
          purple: '#8b5cf6',
          pink: '#ec4899',
          orange: '#f97316',
        },
        bg: {
          primary: '#1e293b',    // Slate 800 - main background
          secondary: '#334155',  // Slate 700 - card backgrounds
          tertiary: '#475569',   // Slate 600 - elevated elements
          light: '#f8fafc',      // Light mode background
          card: '#2d3748',       // Card background with slight warmth
        },
        // Update text colors to follow Tailwind convention
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'text-muted': '#94a3b8',
        'text-accent': '#06b6d4',
        'text-dark': '#1e293b',
        // Border colors
        'border-primary': '#475569',
        'border-secondary': '#64748b',
        'border-accent': '#06b6d4',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
        'gradient-accent': 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
        'gradient-success': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'gradient-warm': 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
        'gradient-cool': 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
        'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.1) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(236, 72, 153, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(6, 182, 212, 0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(16, 185, 129, 0.1) 0px, transparent 50%)',
        'radial-gradient': 'radial-gradient(ellipse at center, rgba(30, 41, 59, 0.8) 0%, rgba(30, 41, 59, 0.95) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-lg': '0 8px 25px rgba(99, 102, 241, 0.4)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.3)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.3)',
        'button': '0 4px 15px rgba(99, 102, 241, 0.3)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fadeInUp': 'fadeInUp 0.8s ease',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(102, 126, 234, 0.3)' },
          'to': { boxShadow: '0 0 30px rgba(102, 126, 234, 0.6)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}