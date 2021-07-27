import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme(
  {
    config: {
      //initialColorMode: 'light',
      useSystemColorMode: true
    },
    styles: {
      global: {
        body: {
          //backgroundColor: 'transparent'
        }
      }
    },
    colors: {
      brand: {
        100: '#77bb21',
        200: '#77bb21',
        300: '#77bb21',
        400: '#77bb21',
        500: '#77bb21',
        600: '#77bb21',
        700: '#77bb21',
        800: '#77bb21',
        900: '#77bb21'
      }
    },
    components: {
      Button: {baseStyle: {_focus: {boxShadow: '0 0 0 3px #A2B798'}}},
      Drawer: {
        sizes: {
          '2xl': {dialog: {maxW: '8xl'}}
        }
      }
    }
  }
  // withDefaultColorScheme({colorScheme: ''})
)
