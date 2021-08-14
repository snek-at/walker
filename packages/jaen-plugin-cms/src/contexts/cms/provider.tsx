// import {Button, ChakraProvider, extendTheme} from '@chakra-ui/react'
import {CMSContext, CMSContextType} from './context'

// const theme = extendTheme({})

export const CMSProvider: React.FC<CMSContextType> = ({children, ...props}) => {
  return (
    <CMSContext.Provider value={{templates: props.templates}}>
      {/* <ChakraProvider theme={theme} resetCSS={false}>
        {'Overlay'}
      </ChakraProvider> */}
      {children}
    </CMSContext.Provider>
  )
}

export default CMSProvider
