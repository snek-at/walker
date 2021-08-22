import {Badge, Button, Menu, MenuButton, MenuItem, MenuList, MenuDivider} from '@chakra-ui/react'

const LanguageButton: React.FC = props => {

  return (
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
  )
}

export default LanguageButton
