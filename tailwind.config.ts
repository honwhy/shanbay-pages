import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#A8E6CF',
          500: '#5DBBA1',
          600: '#3B9D8F',
          700: '#2A7C6E',
          DEFAULT: '#5DBBA1'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: []
} satisfies Config