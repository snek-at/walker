import {
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  useColorMode,
} from '@chakra-ui/react'

import {
  SearchIcon,
} from '../../atoms/icons'
import {
  Snek,
  DmToggle,
  Question,
  Github,
} from '../../molecules/buttons'

const MainHeader:React.FC = () => {
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
      <HStack>
        <Snek />
        <InputGroup maxW={'5xl'}>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input type="tel" placeholder="Search" />
        </InputGroup>
        <Github />
        <Question />
        <DmToggle />
      </HStack>
    </>
  )
}

export default MainHeader