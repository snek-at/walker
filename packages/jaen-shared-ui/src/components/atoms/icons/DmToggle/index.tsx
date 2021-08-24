import {SunIcon, MoonIcon} from '@chakra-ui/icons'
import {Icon, IconButton, IconProps, useColorMode} from '@chakra-ui/react'

type QuestionIconProps = IconProps

const QuestionIcon: React.FC<QuestionIconProps> = props => {
  const {colorMode} = useColorMode()
  return (
    <>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </>
  )
}

export default QuestionIcon
