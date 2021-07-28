import {IconProps} from '@chakra-ui/react'
import {
  createLottie,
  Lottie,
  LottieFn,
  LottieFnFn,
  LottieFnResult
} from '@snek-at/react-lottie'

import {IconType, useColorModeValue} from '..'

export const publishIconLottie: LottieFn = container => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: require(`../../../../common/assets/lottie/489-rocket-space-outline.json`),
    loop: false
  })

  return {creator, containerProps}
}

export const publishIconLottieDm: LottieFn = container => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: require(`../../../../common/assets/lottie/489-rocket-space-outline-dm.json`),
    loop: false
  })

  return {creator, containerProps}
}

export const gPublishIconLottie: LottieFnFn = (dm: boolean) => container => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: require(dm
      ? `../../../../common/assets/lottie/489-rocket-space-outline-dm.json`
      : `../../../../common/assets/lottie/489-rocket-space-outline.json`),
    loop: false
  })

  return {creator, containerProps}
}

type SnekIconProps = IconProps & IconType

const SnekIcon: React.FC<SnekIconProps> = props => {
  const lottie = useColorModeValue(
    publishIconLottie,
    publishIconLottieDm,
    props.colorMode
  ) as LottieFn

  return (
    <Lottie lottie={lottie} forceReloadDeps={[lottie]}>
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
