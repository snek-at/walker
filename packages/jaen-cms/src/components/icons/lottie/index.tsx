import {useColorMode} from '@chakra-ui/react'
import {AnimationItem} from 'lottie-web'
import {forwardRef} from 'react'

import {createLottie} from '../../../common/lottie'

type AnmiationCreator = (
  lightMode?: boolean
) => {
  animation: AnimationItem
  Element: HTMLDivElement
}

type AnimationProps = {
  lottie: AnmiationCreator
  children: ({Element: HTMLDivElement}) => JSX.Element
}
export const Animation: React.FC<AnimationProps> = ({
  children,
  lottie,
  ...props
}) => {
  const {colorMode} = useColorMode()

  const {animation, Element} = lottie(colorMode === 'dark')

  return <>{children({Element})}</>
}

export const sampleLottie = (lightMode: boolean = true) =>
  createLottie(
    require(`../../../common/assets/lottie/35-edit-outline${
      lightMode && '-dm'
    }.json`)
  )
