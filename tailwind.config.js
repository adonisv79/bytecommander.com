/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'ui-sans-serif'], //override defaulr sans using our imported google font 'Kanit'
      },
      colors: {
        primary: {
          f: {
            1: "#aaa",
            2: "#ddd",
            3: "#eee",
          },
          b: {
            1: "#047",
            2: "#058",
            3: "#069",
          }
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
