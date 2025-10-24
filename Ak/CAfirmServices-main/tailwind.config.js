/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'custom-dark-blue': '#00144E',
        'custom-blue': '#1F3A89',
      }
    },
  },
  plugins: [],
}
