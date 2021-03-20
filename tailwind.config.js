module.exports = {
  purge: [
    './src/**/*.vue',
    './src/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        champagne: {
          '200': '#EEE9DF',
        }
      }
    },
  },
  variants: {
    extend: {

    }
  },
  plugins: [],

}
