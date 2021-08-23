import type {GatsbyBrowser, GatsbySSR} from 'gatsby'

import {JaenCoreProvider} from '../context'

const wrapper: GatsbyBrowser['wrapRootElement'] = (
  {element},
  pluginOptions
) => {
  // @ts-ignore
  const config = require(___JAEN_CONFIG___)

  console.log(config)

  return <JaenCoreProvider plugins={[]}> {element}</JaenCoreProvider>
}

export default wrapper
