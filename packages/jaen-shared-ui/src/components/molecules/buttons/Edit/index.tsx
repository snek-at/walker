import {Button, Tooltip, Badge, useColorMode} from '@chakra-ui/react'
import {Lottie} from '@snek-at/react-lottie'

import {APublishLottie} from '../../../atoms/icons/APublish'

const Edit: React.FC = props => {
  const {colorMode} = useColorMode()

  const lottie = APublishLottie(colorMode === 'dark')

  return (
    <Lottie lottie={lottie} forceReloadDeps={[lottie]}>
      {({container, animation}) => (
        <Tooltip
            hasArrow
            label="Hey you.. Press me and you can destroy everything"
            placement="bottom-start"
            fontSize="md">
            <Button
            size="sm"
            variant="outline"
            leftIcon={container}
            rightIcon={
                <Badge borderRadius="full" px="2" colorScheme="red">
                187
                </Badge>
            }
            onClick={() => {
                animation.playSegments(
                [0, animation.totalFrames],
                true
                )
            }}
            {...(props as any)}>
            Edit
            </Button>
        </Tooltip>
      )}
    </Lottie>
  )
}

export default Edit

