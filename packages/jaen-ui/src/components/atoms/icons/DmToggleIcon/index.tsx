import {IconProps} from '@chakra-ui/react'
import {
  createLottie,
  Lottie,
  LottieFn,
  LottieFnResult
} from '@snek-at/react-lottie'

import {IconType} from '..'

export const dmToggleIconLottie: LottieFn = container => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: require(`../../../../common/assets/lottie/dm-toggle.json`),
    loop: false
  })

  return {creator, containerProps}
}

type SnekIconProps = IconProps & IconType

const SnekIcon: React.FC<SnekIconProps> = props => {
  return (
    <Lottie lottie={dmToggleIconLottie}>
      {({animation, container}) => (
        <i
          onClick={() =>
            animation.playSegments([0, animation.totalFrames], true)
          }
          {...(props as any)}>
          {container}
        </i>
      )}
    </Lottie>
  )
}

export default SnekIcon
