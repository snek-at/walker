import {Icon, IconProps, useColorMode} from '@chakra-ui/react'
import {faFolderOpen as farFolderOpen} from '@fortawesome/free-regular-svg-icons/faFolderOpen'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

type SnekIconProps = IconProps

const FolderOpen: React.FC<SnekIconProps> = props => {
  return <FontAwesomeIcon icon={farFolderOpen} />
}

export default FolderOpen
