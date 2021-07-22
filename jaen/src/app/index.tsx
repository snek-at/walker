import {Button, Checkbox, HStack} from '@chakra-ui/react'
// import {SnekIcon} from '../components/icons'
// import * as S from './style'
// import {IconButton} from '@chakra-ui/react'
const Overlay: React.FC = () => {
  // SNEK button
  // Sidebar with buttons
  // Login modal
  return (
    <>
      <Button colorScheme="blue">Button</Button>
      <HStack spacing={10} direction="row">
        <Checkbox size="sm" colorScheme="red">
          Checkbox
        </Checkbox>
        <Checkbox size="md" colorScheme="green" defaultIsChecked>
          Checkbox
        </Checkbox>
        <Checkbox size="lg" colorScheme="orange" defaultIsChecked>
          Checkbox
        </Checkbox>
      </HStack>
      {/* 
      <Box bg="brandDark">
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<SnekIcon />}
        />
      </Box> */}
    </>
  )
}

export default Overlay
