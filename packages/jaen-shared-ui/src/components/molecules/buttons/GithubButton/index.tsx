import {IconButton} from '@chakra-ui/react'

import {GithubIcon} from '../../../atoms/icons'

const GithubButton: React.FC = props => {

  return (
    <IconButton
      variant="ghost"
      aria-label="adad"
      icon={<GithubIcon />}
    />
  )
}

export default GithubButton
