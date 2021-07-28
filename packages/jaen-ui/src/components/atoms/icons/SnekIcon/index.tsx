import {Icon, IconProps} from '@chakra-ui/react'

import {IconType, useColorModeValue} from '..'
import {ReactComponent as SnekSvgDarkMode} from '../../../../common/assets/snek-logo-dm.svg'
import {ReactComponent as SnekSvg} from '../../../../common/assets/snek-logo.svg'

type SnekIconProps = IconProps & IconType

const SnekIcon: React.FC<SnekIconProps> = props => (
  <Icon
    as={useColorModeValue(SnekSvg, SnekSvgDarkMode, props.colorMode)}
    w={75}
    h={75}
    {...(props as any)}
  />
)

export default SnekIcon
