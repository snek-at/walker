import {createContext, useContext} from 'react'

export type CMSPageContextType = {}
export const CMSPageContext = createContext<CMSPageContextType | undefined>(
  undefined
)

export const useCMSPageContext = (): CMSPageContextType => {
  const context = useContext(CMSPageContext)

  if (context === undefined) {
    throw new Error('useCMSPageContext must be within CMSPageContext')
  }

  return context
}
