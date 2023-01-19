/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "public/**",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      custom1: ["Custom-1", "sans-serif"],
      custom2: ["Custom-2", "sans-serif"],
      cReg: ["Chrip Regular", "sans-serif"],
      cMed: ["Chrip Medium", "sans-serif"],
      cBold: ["Chirp Bold", "sans-serif"],
      cHeavy: ["Chirp Heavy", "sans-serif"],
      cThin: ["Chirp Thin", "sans-serif"],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1520px',
    },
    extend: {
      spacing: {
        '130': '37.375rem',
        '120': '31.25rem',
        '100': '27.6rem',
        '85': '21.875rem',
        '37': '9.832rem',
        '13': '3.141rem',
        '14.2': '4.357rem',
        '11.5': '2.78rem',
        '10.5': '2.rem',
        '24.5': '6.875rem',
        '13.5': '3.438rem',
        '80.1': '21.75rem',
        '97': '25.62rem',
        '72.1': '18.75rem',
        '4.1': '1.125rem',
      },
      zIndex: {
        '100': '100',
      }
    }
  },
  plugins: [],
}
