import {Center, Wrap, WrapItem} from '@chakra-ui/react'

// ImageTab Component
const ImageTab: React.FC = props => {
  return (
    <Wrap spacing="30px">
      {[...Array(100)].map((i, k) => (
        <WrapItem key={k}>
          <Center w="240px" h="240px" bg="red.200">
            Box {k}
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  )
}

export default ImageTab
