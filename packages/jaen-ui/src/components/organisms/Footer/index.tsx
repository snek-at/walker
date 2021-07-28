import {Badge, Divider, Flex, HStack, Spacer, Stack} from '@chakra-ui/layout'
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tooltip,
  ColorMode
} from '@chakra-ui/react'
import {FaGithub} from '@react-icons/all-files/fa/FaGithub'
import * as React from 'react'

import {Animation, dmToggleIconLottie} from '../../../lottie/index'
import SnekIcon from '../../atoms/icons/SnekIcon'

export type HeaderProps = {
  colorModeToggle: () => void
  colorMode: ColorMode
}

const Header: React.FC<HeaderProps> = props => {
  return (
    <HStack>
      <Button size="sm" variant="ghost">
        2021 &copy; snek-at
      </Button>
      <Spacer />
      <Menu isLazy>
        <MenuButton
          size="sm"
          as={Button}
          aria-label="Options"
          rightIcon={
            <Badge borderRadius="full" px="2" colorScheme="green">
              en
            </Badge>
          }
          variant="ghost">
          Language
        </MenuButton>
        <MenuList>
          <MenuItem command="⌘T">en</MenuItem>
          <MenuDivider />
          <MenuItem command="⌘T">de</MenuItem>
        </MenuList>
      </Menu>
      <Button size="sm" variant="ghost">
        v1.3.0
      </Button>
    </HStack>
  )
}

// Header.defaultProps = {
//   colorModeToggle: useColorMode().toggleColorMode,
//   colorMode: useColorMode().colorMode
// }

export default Header
