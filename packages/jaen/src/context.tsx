import {Main as MainUI} from '@snek-at/jaen-shared-ui'
import {createContext, useContext} from 'react'
import React, {useState} from 'react'

import {PluginUI, PluginCallbacks} from './plugin'
import {getPublishValue, getUI, Plugin} from './plugin'

export type JaenCoreContextType = {} & PluginCallbacks
export const JaenCoreContext = createContext<JaenCoreContextType | undefined>(
  undefined
)

export const useJaenCoreContext = (): JaenCoreContextType => {
  const context = useContext(JaenCoreContext)

  if (context === undefined) {
    throw new Error('useJaenCoreContext must be within JaenCoreContext')
  }

  return context
}

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
    <JaenCoreContext.Provider value={{onPublish}}>
      <MainUI hotbar={hotbar} tabs={tabs} />
      {children}
    </JaenCoreContext.Provider>
  )
}

export default JaenCoreProvider
