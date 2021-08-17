import {createContext, useContext} from 'react'

import {ResolvedPageType} from '../../types'

// SEO: https://github.com/jlengstorf/gatsby-theme-jason-blog/blob/master/src/components/SEO/SEO.js

export type PageContextType = {
  page: ResolvedPageType
}

export const PageContext = createContext<PageContextType | undefined>(undefined)

export const usePageContext = (): PageContextType => {
  const context = useContext(PageContext)

  if (context === undefined) {
    throw new Error('usePageContext must be within PageContext')
  }

  return context
}

export const PageProvider: React.FC<PageContextType> = ({
  children,
  ...props
}) => {
  return <PageContext.Provider value={props}>{children}</PageContext.Provider>
}

export default PageProvider
