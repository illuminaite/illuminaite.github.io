/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#131313',
        primary: '#ca4949',
        'primary-dark': '#751d18',
        secondary: '#f48b8b',
        'secondary-dark': '#a14646',
        text: '#f9efef',
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
