import {createContext, useContext} from 'react'

export type JaenTemplatePage = {
  uname: string
  children: string[]
}

export type AppContextType = {
  /**
   * Contains a list of template components used for dynamic page creation
   */
  templates: React.ComponentType<JaenTemplatePage>[]
}
export const AppContext = createContext<AppContextType | undefined>(undefined)

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useAppContext must be within AppProvider')
  }

  return context
}
