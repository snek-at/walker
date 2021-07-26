import lottie, {AnimationItem} from 'lottie-web'

export const createLottie = (
  animationData: string,
  initialSegment?: [number, number]
): {animation: AnimationItem; Element: HTMLDivElement} => {
  const container = document.createElement('div')

  const animation = lottie.loadAnimation({
    autoplay: false,
    container,
    animationData: animationData,
    initialSegment: initialSegment
  })

  return {animation, Element: container}
}
