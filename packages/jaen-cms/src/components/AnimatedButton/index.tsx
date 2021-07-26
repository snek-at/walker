import {Button, ButtonProps} from '@chakra-ui/react'
import {useState} from 'react'

type AnimatedButtonProps = ButtonProps

const AnimatedButton: React.FC<AnimatedButtonProps> = props => {
  const [animation, setAnimation] = useState()
  const [hover, setHover] = useState(false)

  // click => onClick
  // hover => yes: onMOuseEnter no: onMouseLeave (hover trigger and hover loop)
  return (
    <Button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}>
      {props.children}
    </Button>
  )
}

export default AnimatedButton

/**
 * icons / lottie:
 * 
 * export const sampleLottie = (colorMode) => createLottie(colorMode ? require(A) : require(B))
 * 
 * icons / lotties / SampleLottie
 * 
 * export animation
 * 
 * default export JSX
 */

/**
 * Drawer:
 * 
 * 
 * <Animated sampleLottie.animation><Button leftIcon={sampleLottie.Element}/></Animated>
 */

// createLottie = (animatedData, elementProps: Element...Props) => JSX, animation

// Icon
// AnimatedButton (animation + ButtonProps)
