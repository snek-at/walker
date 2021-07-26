import {createContext, useContext} from 'react'

export type PageContextType = {}
export const PageContext = createContext<PageContextType | undefined>(undefined)

export const usePageContext = (): PageContextType => {
  const context = useContext(PageContext)

  if (context === undefined) {
    throw new Error('usePageContext must be within PageProvider')
  }

  return context
}
