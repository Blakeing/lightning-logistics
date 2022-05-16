const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // screens: {
    //   sm: '375px',

    //   md: '768px',

    //   lg: '1024px',

    //   xl: '1440px',
    // },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.stone,
    //   white: colors.white,
    //   gray: colors.stone,
    //   emerald: colors.emerald,
    //   indigo: colors.indigo,
    //   yellow: colors.yellow,
    // },
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
