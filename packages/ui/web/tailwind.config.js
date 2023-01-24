const { colors, colorsList } = require('./src/design-system/design-tokens')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  safelist: colorsList.map((color) => 'bg-' + color),
  daisyui: {
    // styled: true,
    // themes: true,
    // base: true,
    // utils: true,
    // logs: true,
    // rtl: false,
    // prefix: "",
    darkTheme: 'light',
  },
}
