import {createContext, useContext} from 'react'

import {ResolvedPageType} from '../../types'
import {usePage} from '../cms'

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

type PageProviderProps = {
  path: string
}

export const PageProvider: React.FC<PageProviderProps> = ({
  children,
  ...props
}) => {
  const page = usePage(props.path)

  return (
    <PageContext.Provider value={{page}}>
      {JSON.stringify(page)}
      {children}
    </PageContext.Provider>
  )
}

export default PageProvider
