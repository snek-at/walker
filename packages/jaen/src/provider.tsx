import * as React from 'react'

import {JaenCoreContext} from './context'
import {getPublishValue, getUI, Plugin} from './plugin'

type JaenCoreProviderProps = {
  plugins: Plugin[]
}

export const JaenCoreProvider: React.FC<JaenCoreProviderProps> = ({
  children,
  plugins
}) => {
  const {hotbar, tabs} = getUI(plugins)

  const onPublish = () => getPublishValue(plugins)

  return (
    <JaenCoreContext.Provider value={{hotbar, tabs, onPublish}}>
      {children}
    </JaenCoreContext.Provider>
  )
}

export default JaenCoreProvider
