require('source-map-support').install()
require('ts-node').register()

const gatsbyNode = require('./src/gatsby/gatsby-node')

module.exports = gatsbyNode
