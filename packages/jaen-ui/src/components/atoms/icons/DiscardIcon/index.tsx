import {IconProps} from '@chakra-ui/react'
import {
  createLottie,
  Lottie,
  LottieFn,
  LottieFnFn,
  LottieFnResult
} from '@snek-at/react-lottie'

import {IconType, useColorModeValue} from '..'

export const discardIconLottie: LottieFn = container => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: require(`../../../../common/assets/lottie/185-trash-bin-outline.json`),
    loop: false
  })

  return {creator, containerProps}
}

export const discardIconLottieDm: LottieFn = container => {
  let creator: LottieFnResult['creator']
  const containerProps: LottieFnResult['containerProps'] = {
    style: {width: 24}
  }

  creator = createLottie({
    container,
    animationData: require(`../../../../common/assets/lottie/185-trash-bin-outline-dm.json`),
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
      ? `../../../../common/assets/lottie/185-trash-bin-outline-dm.json`
      : `../../../../common/assets/lottie/185-trash-bin-outline.json`),
    loop: false
  })

  return {creator, containerProps}
}

type SnekIconProps = IconProps & IconType

const SnekIcon: React.FC<SnekIconProps> = props => {
  const lottie = useColorModeValue(
    discardIconLottie,
    discardIconLottieDm,
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
