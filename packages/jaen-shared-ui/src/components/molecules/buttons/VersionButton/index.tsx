import {Button, Text} from '@chakra-ui/react'

import {SnekIcon} from '../../../atoms/icons'

const VersionButton: React.FC = props => {

  return (
    <Button size="sm" variant="ghost">
      v2.0.0
    </Button>
  )
}

export default VersionButton
