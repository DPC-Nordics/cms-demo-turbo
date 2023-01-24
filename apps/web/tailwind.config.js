const {
  colors,
  colorsList,
} = require('@cms-demo-turbo/web-ui/src/design-system/design-tokens')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/web/src/**/*.{js,ts,jsx,tsx}',
  ],
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
