import type {GatsbyBrowser, GatsbySSR} from 'gatsby'
import React from 'react'
import {Provider} from 'react-redux'

import {CMSProvider} from '../contexts/cms'
import {store} from '../store'

const wrapper: GatsbyBrowser['wrapRootElement'] = (
  {element},
  pluginOptions
) => {
  // @ts-ignore
  const config = require(___JAEN_CONFIG___)
  const templates = config.plugins.cms.templates

  return (
    <Provider store={store}>
      <CMSProvider templates={templates}>{element}</CMSProvider>
    </Provider>
  )
}

export default wrapper
