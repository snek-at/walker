import {Button, useColorMode} from '@chakra-ui/react'
import {Lottie} from '@snek-at/react-lottie'

import {ARocketLottie} from '../../../atoms/icons/ARocket'

const PublishButton: React.FC = props => {
  const {colorMode} = useColorMode()

  const lottie = ARocketLottie(colorMode === 'dark')

  return (
    <Lottie lottie={lottie} forceReloadDeps={[lottie]}>
      {({animation, container}) => (
        <i
          onClick={() =>
            animation.playSegments([0, animation.totalFrames], true)
          }
          {...(props as any)}>
          <Button leftIcon={container}>
            Publish
          </Button>
        </i>
      )}
    </Lottie>
  )
}

export default PublishButton
