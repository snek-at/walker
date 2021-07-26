import {
  Box,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
  Button,
  Circle,
  extendTheme,
  withDefaultColorScheme,
  ChakraProvider,
  CSSReset
} from '@chakra-ui/react'
import * as React from 'react'

import Drawer from '../components/Drawer'
import {SnekIcon} from '../components/icons'

// import SnekSvg from '../common/assets/snek-logo.svg'

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme(
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

// import * as S from './style'
// import {IconButton} from '@chakra-ui/react'
const Overlay: React.FC = () => {
  // SNEK button
  // Sidebar with buttons
  // Login modal
  return (
    <ChakraProvider theme={theme}>
      <Drawer></Drawer>
      {/* <SnekIcon /> */}
      {/* <SnekSvg /> */}
      <Button>test</Button>
      <Switch size="sm" />
      <Circle
        bg="black"
        pos="fixed"
        left={10} // !! Position of snek logo must be choosable L/R
        bottom={10}
        zIndex={2}
        as="button">
        <SnekIcon />
      </Circle>

      <Slider aria-label="slider-ex-1" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </ChakraProvider>
  )
}

export default Overlay
