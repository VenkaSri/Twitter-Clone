/** @type {import('tailwindcss').Config} */
module.exports = {
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
    fontSize: {
      '.5xl': '1.25rem',
      '1xl': '1.35rem',
      'ssm': '.90rem',
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
        '120': '500px',
        '100': '27.6rem',
        '85': '21.875rem',
        '37': '9.832rem',
        '13': '3.141rem',
        '11.5': '2.78rem',
        '10.5': '2.rem',
        '24.5': '6.875rem',
        '13.5': '3.438rem',
      },
    }
  },
  plugins: [],
}
