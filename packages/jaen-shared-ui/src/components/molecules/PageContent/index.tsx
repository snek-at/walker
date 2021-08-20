import {
  Input,
  Text,
  InputGroup,
  Heading,
  Box,
  Stack,
  Divider,
  Flex,
  Center,
  InputRightAddon,
  InputLeftAddon,
  Textarea,
  Checkbox,
  Badge,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  HStack,
  Spacer,
  Image,
  VStack
} from '@chakra-ui/react'

const PageContent: React.FC = () => {
  return (
    <>
      <Stack spacing="24px" h="70vh">
        <Flex>
          <Box>
            <Heading size="lg">Snek Homepage</Heading>
          </Box>
          <Spacer />
          <Box>
            <Badge mx={1} variant="outline" colorScheme="green">
              BlogPost
            </Badge>
            <Badge variant="outline" colorScheme="blue">
              Last published: 01.01.2001
            </Badge>
          </Box>
        </Flex>
        <Divider />
        <Stack spacing={2}>
          <Flex>
            <Box flex="1" mr={5}>
              <Box py={2}>
                <Heading size="md">Title</Heading>
                <Input placeholder="My title" />
              </Box>
              <Box py={2}>
                <Heading size="md">Slug</Heading>
                <Input placeholder="My slug" />
              </Box>
              <Box py={2}>
                <Heading size="md">Description</Heading>
                <Textarea placeholder="Description" maxH="sm" />
              </Box>
            </Box>
            <Box>
              <Image
                maxH="sm"
                src="https://bit.ly/sage-adebayo"
                alt="Segun Adebayo"
              />
            </Box>
          </Flex>
        </Stack>
      </Stack>
    </>
  )
}

export default PageContent
