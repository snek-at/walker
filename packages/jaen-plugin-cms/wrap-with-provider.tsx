import React from 'react'
import {Provider} from 'react-redux'

import {CMSProvider} from '.'
import {store} from './src/store'

// eslint-disable-next-line react/display-name,react/prop-types
export default ({element}) => (
  <Provider store={store}>
    <CMSProvider>{element}</CMSProvider>
  </Provider>
)
