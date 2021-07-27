import {Icon, IconProps, useColorModeValue} from '@chakra-ui/react'

import {ReactComponent as SnekSvgDarkMode} from '../../common/assets/snek-logo-dm.svg'
import SnekSvg from '../../common/assets/snek-logo.svg'

export const SnekIcon: React.FC<IconProps> = props => (
  <Icon
    as={useColorModeValue(SnekSvg, SnekSvgDarkMode)}
    w={75}
    h={75}
    {...(props as any)}
  />
)
