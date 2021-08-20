import {
  Button,
  HStack,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Spacer,
} from '@chakra-ui/react'
import React from 'react'

const MainFooter:React.FC = () => {
  const btnRef = React.useRef()

  return (
    <>
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
    </>
  )
}

export default MainFooter