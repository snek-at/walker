import {Icon, IconProps, useColorMode} from '@chakra-ui/react'
import {faFile as farFile} from '@fortawesome/free-regular-svg-icons/faFile'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

type SnekIconProps = IconProps

const File: React.FC<SnekIconProps> = props => {
  return <FontAwesomeIcon icon={farFile} />
}

export default File
