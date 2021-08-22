import {IconButton} from '@chakra-ui/react'

import {QuestionIcon} from '../../../atoms/icons'

const QuestionButton: React.FC = props => {

  return (
    <IconButton
      variant="ghost"
      aria-label="adad"
      icon={<QuestionIcon />}
    />
  )
}

export default QuestionButton
