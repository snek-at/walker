import {Button, useColorMode} from '@chakra-ui/react'
import {Lottie} from '@snek-at/react-lottie'

import {APublishLottie} from '../../../atoms/icons/APublish'

const Discard: React.FC = props => {
  const {colorMode} = useColorMode()

  const lottie = APublishLottie(colorMode === 'dark')

  return (
    <Lottie lottie={lottie} forceReloadDeps={[lottie]}>
      {({container, animation}) => (
        <Button
            size="sm"
            variant="outline"
            leftIcon={container}
            onClick={() => {
            animation.playSegments(
                [0, animation.totalFrames],
                true
            )
            }}
            {...(props as any)}>
            Discard
        </Button>
      )}
    </Lottie>
  )
}

export default Discard
