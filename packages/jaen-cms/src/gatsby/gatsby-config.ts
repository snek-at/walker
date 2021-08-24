const config = {
  plugins: [
    {
      resolve: '@snek-at/gatsby-plugin-chakra-ui',
      options: {disableProvider: true}
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true
      }
    }
  ]
}

export default config
