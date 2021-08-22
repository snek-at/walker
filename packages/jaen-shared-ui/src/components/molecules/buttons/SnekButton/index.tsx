import {Button, Text} from '@chakra-ui/react'

import {SnekIcon} from '../../../atoms/icons'

const SnekButton: React.FC = props => {

  return (
    <Button
      minW="4xs"
      variant="ghost"
      leftIcon={<SnekIcon w={35} h={35} />}
      onClick={() => window.open('https://snek.at', 'blank')}>
      <Text>snek - Jaen</Text>
    </Button>
  )
}

export default SnekButton
