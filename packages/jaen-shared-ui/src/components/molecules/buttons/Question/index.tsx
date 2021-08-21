import {IconButton} from '@chakra-ui/react'
import {Lottie} from '@snek-at/react-lottie'

import {QuestionIcon} from '../../../atoms/icons'

const Question: React.FC = props => {

  return (
    <IconButton
      variant="ghost"
      aria-label="adad"
      icon={<QuestionIcon />}
    />
  )
}

export default Question
