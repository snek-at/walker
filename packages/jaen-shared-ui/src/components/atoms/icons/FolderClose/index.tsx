import {Icon, IconProps, useColorMode} from '@chakra-ui/react'
import {faFolder as farFolder} from '@fortawesome/free-regular-svg-icons/faFolder'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

type SnekIconProps = IconProps

const FolderClose: React.FC<SnekIconProps> = props => {
  return <FontAwesomeIcon icon={farFolder} strokeWidth={50} />
}

export default FolderClose
