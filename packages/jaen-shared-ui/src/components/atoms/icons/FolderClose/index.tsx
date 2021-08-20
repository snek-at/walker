import {Icon, IconProps, useColorMode} from '@chakra-ui/react'
import {faFolder as farFolderClose} from '@fortawesome/free-regular-svg-icons/faFolder'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

type SnekIconProps = IconProps

const FolderClose: React.FC<SnekIconProps> = props => {
  return <FontAwesomeIcon icon={farFolderClose} />
}

export default FolderClose
