import {
  SearchIcon,
  QuestionIcon
} from '@chakra-ui/icons'
import {
  Button,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  IconButton,
  HStack,
  useColorMode,
} from '@chakra-ui/react'
import {FaGithub} from '@react-icons/all-files/fa/FaGithub'
import {
  Snek,
} from '../../atoms/icons'
import {
  DmToggle
} from '../../molecules/buttons'

const MainHeader:React.FC = () => {
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
      <HStack>
        <Button
          minW="4xs"
          variant="ghost"
          leftIcon={<Snek w={35} h={35} />}
          onClick={() => window.open('https://snek.at', 'blank')}>
          <Text>snek - Jaen</Text>
        </Button>

        <InputGroup maxW={'5xl'}>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input type="tel" placeholder="Search" />
        </InputGroup>
        <IconButton
          variant="ghost"
          aria-label="adad"
          icon={<FaGithub />}
        />
        <IconButton
          variant="ghost"
          aria-label="adad"
          icon={<QuestionIcon />}
        />
        <DmToggle />
      </HStack>
    </>
  )
}

export default MainHeader