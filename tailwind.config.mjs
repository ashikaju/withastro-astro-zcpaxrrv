/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3245ff',
          dark: '#2835cc',
        },
        secondary: {
          DEFAULT: '#10B981',
          dark: '#059669',
        }
      }
    },
  },
  plugins: [],
}