const defaultConfig = require('tailwindcss/stubs/defaultConfig.stub.js')

module.exports = {
  theme: {
    // Some useful comment
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
    require('tailwindcss-spaced-items')({ values: defaultConfig.theme.spacing })
  ]
}
