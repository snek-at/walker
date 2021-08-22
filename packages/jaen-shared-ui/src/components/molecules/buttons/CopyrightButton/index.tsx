import {Button, Text} from '@chakra-ui/react'

import {SnekIcon} from '../../../atoms/icons'

const CopyrightButton: React.FC = props => {

  return (
    <Button size="sm" variant="ghost">
      2021 &copy; snek-at
    </Button>
  )
}

export default CopyrightButton
