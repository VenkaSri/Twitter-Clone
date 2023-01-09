/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "public/**",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      custom1: ["Custom-1", "sans-serif"],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1520px',
    }
  },
  plugins: [],
}
