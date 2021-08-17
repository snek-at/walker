import {createContext, useContext} from 'react'

import {PageType} from '../../types'

// SEO: https://github.com/jlengstorf/gatsby-theme-jason-blog/blob/master/src/components/SEO/SEO.js

export type PageContextType = {
  page: PageType
}

export const PageContext = createContext<PageContextType | undefined>(undefined)

export const useCMSPageContext = (): PageContextType => {
  const context = useContext(PageContext)

  if (context === undefined) {
    throw new Error('useCMSPageContext must be within PageContext')
  }

  return context
}

export const CMSPageProvider: React.FC<PageContextType> = ({
  children,
  ...props
}) => {
  return <PageContext.Provider value={props}>{children}</PageContext.Provider>
}

export default CMSPageProvider
