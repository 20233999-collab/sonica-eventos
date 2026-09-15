/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#090D16',
        surface: {
          DEFAULT: '#0E1626',
          elevated: '#162035',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        brand: {
          cyan: '#00B2FE',
          glow: 'rgba(0, 178, 254, 0.25)',
          blue: '#0077B6',
          dark: '#004C75',
          light: '#38C5FF'
        },
        accent: {
          primary: '#00B2FE',
          secondary: '#0077B6',
          glow: 'rgba(0, 178, 254, 0.25)'
        }
      },
      fontFamily: {
        display: ['Outfit', 'Cabinet Grotesk', 'system-ui', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Satoshi', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'beautiful-sm': '0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)',
        'beautiful-md': '0px 0px 0px 1px rgba(0,0,0,0.06), 0px 1px 1px -0.5px rgba(0,0,0,0.06), 0px 3px 3px -1.5px rgba(0,0,0,0.06), 0px 6px 6px -3px rgba(0,0,0,0.06), 0px 12px 12px -6px rgba(0,0,0,0.06), 0px 24px 24px -12px rgba(0,0,0,0.06)',
        'beautiful-lg': '0 2.8px 2.2px rgba(0,0,0,0.034), 0 6.7px 5.3px rgba(0,0,0,0.048), 0 12.5px 10px rgba(0,0,0,0.06), 0 22.3px 17.9px rgba(0,0,0,0.072), 0 41.8px 33.4px rgba(0,0,0,0.086), 0 100px 80px rgba(0,0,0,0.12)',
        'glow-cyan': '0 0 35px -5px rgba(0, 178, 254, 0.35)',
        'glow-cyan-lg': '0 0 60px -10px rgba(0, 178, 254, 0.45)',
      }
    },
  },
  plugins: [],
};
