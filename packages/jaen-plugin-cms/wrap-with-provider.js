import React from "react"
import { Provider } from "react-redux"

import {store} from "./src/store"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
