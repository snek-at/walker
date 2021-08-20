import type {GatsbyNode} from 'gatsby'
import * as path from 'path'
import {DefinePlugin} from 'webpack'

import {PluginOptions} from './types'

require = require('esm')(module)

const configFile = path.resolve('./jaen-config.js')

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = (
  {actions},
  pluginOptions: PluginOptions
) => {
  actions.setWebpackConfig({
    plugins: [
      new DefinePlugin({
        ___JAEN_CONFIG___: JSON.stringify(configFile)
      })
    ]
  })
}
