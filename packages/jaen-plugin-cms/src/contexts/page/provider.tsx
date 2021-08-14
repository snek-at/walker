import {CMSPageContext, CMSPageContextType} from './context'

export const CMSPageProvider: React.FC<CMSPageContextType> = ({children}) => {
  return (
    <CMSPageContext.Provider value={{}}>{children}</CMSPageContext.Provider>
  )
}

export default CMSPageProvider
