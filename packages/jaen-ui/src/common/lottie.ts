import lottie, {
  AnimationConfigWithData,
  AnimationConfigWithPath,
  AnimationItem
} from 'lottie-web'
import React from 'react'

export type LottieAnimationCreator = {
  animation: AnimationItem
}

export const createLottie = (
  params: AnimationConfigWithData | AnimationConfigWithPath
): LottieAnimationCreator => {
  const animation = lottie.loadAnimation({autoplay: false, ...params})

  return {animation}
}
