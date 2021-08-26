module.exports = {
  plugins: {
    cms: {
      resolve: require('@snek-at/jaen-cms'),
      templates: [require('./src/templates/SamplePage.tsx')]
    }
  }
}
