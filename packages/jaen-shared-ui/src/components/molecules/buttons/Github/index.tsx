import {IconButton, useColorMode} from '@chakra-ui/react'

import {GithubIcon} from '../../../atoms/icons'

const Github: React.FC = props => {

  return (
    <IconButton
      variant="ghost"
      aria-label="adad"
      icon={<GithubIcon />}
    />
  )
}

export default Github
