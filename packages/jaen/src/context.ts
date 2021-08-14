import {createContext, useContext} from 'react'

import {PluginUI, PluginCallbacks} from './plugin'

export type JaenCoreContextType = {} & PluginUI & PluginCallbacks
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
