import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#0EA5E9',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#ea384c',
          foreground: '#FFFFFF'
        },
        accent: {
          DEFAULT: '#33C3F0',
          foreground: '#FFFFFF'
        },
        destructive: {
          DEFAULT: '#ea384c',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#222222',
          foreground: '#888888'
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#000000'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;