/** @type {import('tailwindcss').Config} */
// TECH INNOVATOR THEME - Sky Blue + Purple + Pink
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
        // PRIMARY - Sky Blue (Tech Innovator Theme)
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // Main Brand - Sky Blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // SECONDARY - Purple
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',  // Vibrant Purple
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        // ACCENT COLORS
        accent: {
          cyan: '#06b6d4',      // Electric Cyan
          purple: '#a855f7',    // Vibrant Purple
          pink: '#ec4899',      // Hot Pink
          green: '#10b981',     // Success Green
          orange: '#f97316',    // Energy Orange
          blue: '#0ea5e9',      // Sky Blue
        },
        // BACKGROUND COLORS - Darker for better contrast
        bg: {
          primary: '#0f172a',    // Deep Navy (darker)
          secondary: '#1e293b',  // Slate
          tertiary: '#334155',   // Light Slate
          card: '#1e293b',       // Card Background
          light: '#f8fafc',      // Light mode
        },
        // TEXT COLORS
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'text-muted': '#94a3b8',
        'text-accent': '#38bdf8',  // Bright Sky Blue
        'text-dark': '#0f172a',
        'text-white': '#ffffff',
        // BORDER COLORS
        'border-primary': '#334155',
        'border-secondary': '#475569',
        'border-accent': '#0ea5e9',  // Sky Blue
      },
      backgroundImage: {
        // TECH INNOVATOR GRADIENTS
        'gradient-primary': 'linear-gradient(135deg, #0ea5e9 0%, #a855f7 50%, #ec4899 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
        'gradient-accent': 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
        'gradient-success': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'gradient-button': 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0ea5e9 0%, #a855f7 50%, #ec4899 100%)',
        'gradient-card': 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        'gradient-mesh': 'radial-gradient(at 20% 80%, rgba(14, 165, 233, 0.15) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(168, 85, 247, 0.15) 0px, transparent 50%), radial-gradient(at 40% 40%, rgba(6, 182, 212, 0.12) 0px, transparent 50%), radial-gradient(at 60% 60%, rgba(236, 72, 153, 0.12) 0px, transparent 50%)',
        'radial-gradient': 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)',
      },
      boxShadow: {
        // TECH INNOVATOR GLOWS - Sky Blue based
        'glow': '0 0 20px rgba(14, 165, 233, 0.4)',
        'glow-lg': '0 8px 25px rgba(14, 165, 233, 0.5)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.4)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.4)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.4)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.3)',
        'button': '0 4px 15px rgba(14, 165, 233, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 30px -3px rgba(14, 165, 233, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
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
          'from': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)' },
          'to': { boxShadow: '0 0 30px rgba(14, 165, 233, 0.6)' },
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
