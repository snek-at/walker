import {createContext, useContext} from 'react'
import { SiteType } from '../../types'

export type CMSContextType = {
  templates: JSX.Element[]
  site: SiteType
}
export const CMSContext = createContext<CMSContextType | undefined>(undefined)

export const useCMSContext = (): CMSContextType => {
  const context = useContext(CMSContext)

  if (context === undefined) {
    throw new Error('useCMSContext must be within CMSContext')
  }

  return context
}
