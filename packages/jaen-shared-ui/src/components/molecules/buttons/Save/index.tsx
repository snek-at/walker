import {Button, useColorMode} from '@chakra-ui/react'
import {Lottie} from '@snek-at/react-lottie'

import {ASaveLottie} from '../../../atoms/icons/ASave'

const Save: React.FC = props => {
  const {colorMode} = useColorMode()

  const lottie = ASaveLottie(colorMode === 'dark')

  return (
    <Lottie lottie={lottie} forceReloadDeps={[lottie]}>
      {({animation, container}) => (
        <i
          onClick={() =>
            animation.playSegments([0, animation.totalFrames], true)
          }
          {...(props as any)}>
          <Button leftIcon={container}>
            Save
          </Button>
        </i>
      )}
    </Lottie>
  )
}

export default Save
