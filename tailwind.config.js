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
          50: '#f0f4ff',
          100: '#e0e9ff',
          500: '#667eea',
          600: '#5a6fd8',
          700: '#4d5bc6',
          900: '#1a1a2e',
        },
        secondary: {
          500: '#f5576c',
          600: '#e84857',
        },
        accent: {
          cyan: '#00f2fe',
          green: '#43e97b',
        },
        bg: {
          primary: '#0f0f23',
          secondary: '#1a1a2e',
          card: '#16213e',
        },
        text: {
          white: '#ffffff',
          light: '#e0e0e0',
          muted: '#a0a0a0',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-accent': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-success': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'radial-gradient': 'radial-gradient(at 0% 0%, rgba(102, 126, 234, 0.1) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(245, 87, 108, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 242, 254, 0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(67, 233, 123, 0.1) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(102, 126, 234, 0.3)',
        'glow-lg': '0 8px 25px rgba(102, 126, 234, 0.5)',
        'button': '0 4px 15px rgba(102, 126, 234, 0.3)',
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