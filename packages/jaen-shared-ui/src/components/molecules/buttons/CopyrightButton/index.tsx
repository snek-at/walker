import {Button, Text} from '@chakra-ui/react'

import {SnekIcon} from '../../../atoms/icons'

const CopyrightButton: React.FC = props => {

  return (
    <Button 
      size="sm"
      variant="ghost" 
      onClick={() => window.open('https://github.com/snek-at/jaen/blob/main/LICENSES/preferred/EUPL-1.2', 'blank')}>
      2021 &copy; snek-at
    </Button>
  )
}

export default CopyrightButton
