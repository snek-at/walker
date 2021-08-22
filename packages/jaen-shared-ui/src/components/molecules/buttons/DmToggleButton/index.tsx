import {Button, IconButton, useColorMode} from '@chakra-ui/react'
import {Lottie} from '@snek-at/react-lottie'

import {ADmToggleLottie} from '../../../atoms/icons/ADmToggle'

const ADmToggleButton: React.FC = props => {
  const {colorMode, toggleColorMode} = useColorMode()

  console.log('colorMode', colorMode)

  // const lottie = ADmToggleLottie(colorMode === 'dark')

  return (
    <Button onClick={() => toggleColorMode()}>test</Button>
    // <Lottie lottie={lottie} forceReloadDeps={[lottie]}>
    //   {({animation, container}) => (
    //     <i
    //       onClick={() => {
    //         // colorMode === 'dark'
    //         //   ? animation.playSegments([0, 114], true)
    //         //   : animation.playSegments([114, 228], true)

    //         console.log('toggle CM')
    //         toggleColorMode()
    //       }}
    //       {...(props as any)}>
    //       <IconButton
    //         aria-label="darkmode toggle"
    //         variant="ghost"
    //         icon={container}
    //       />
    //     </i>
    //   )}
    // </Lottie>
  )
}

export default ADmToggleButton
