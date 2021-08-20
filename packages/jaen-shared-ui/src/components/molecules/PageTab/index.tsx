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
} from '@chakra-ui/react'

import PageTree from '../../atoms/PageTree'

const treeExample = {
    'SitePage /test': {
      id: 'test',
      children: [],
      data: {
        title: 'root'
      }
    },
    '1-1': {
      id: '1-1',
      children: [],
      data: {
        title: 'First parent'
      }
    },
    '1-2': {
      id: '1-2',
      children: [],
      data: {
        title: 'Second parent'
      }
    },
    '1-1-1': {
      id: '1-1-1',
      children: [],
      data: {
        title: 'Child one'
      }
    },
    '1-1-2': {
      id: '1-1-2',
      children: [],
      data: {
        title: 'Child two'
      }
    },
    '1-2-1': {
      id: '1-2-1',
      children: [],
      data: {
        title: 'Child three'
      }
    },
    '1-2-2': {
      id: '1-2-2',
      children: [],
      data: {
        title: 'Child four'
      }
    }
  }
  
const MainTabs = () => {
  return (
    <>
        {/* <Divider mt={4} mb={4} /> */}
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          minHeight="65vh"
          p={2}>
          <Flex minHeight="65vh">
            <Box paddingRight={10}>
              <PageTree items={treeExample} onItemSelect={()=>(console.log("help"))} />
              </Box>
              <Center height="65vh">
              <Divider orientation="vertical" />
              </Center>
              <Box flex="1" p={10}>
              <Stack spacing="24px">
                  <Stack spacing={2}>
                  <Text variant="bold" as="strong">
                      Title
                  </Text>
                  <Input placeholder="Title" />
                  <Text variant="bold" as="strong">
                      Description
                  </Text>
                  <Textarea placeholder="Description" />
                  <Text variant="bold" as="strong">
                      Twitter username
                  </Text>
                  <Input
                      placeholder="TwitterUsername"
                      colorScheme="facebook"
                  />

                  {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
                  <InputGroup size="sm">
                      <InputLeftAddon children="https://" />
                      <Input placeholder="mysite" />
                      <InputRightAddon children=".com" />
                  </InputGroup>
                  </Stack>

                  <Heading as="h3" size="md">
                  <Text color="#77bb21" as="span" pr={2}>
                      #
                  </Text>
                  Additional info
                  </Heading>
                  <Checkbox>Hide</Checkbox>
                  <Checkbox>Hide in menus</Checkbox>
                  {/* <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  p={2}>
                  <Table variant="simple">
                      <TableCaption>Metadata</TableCaption>
                      <Thead>
                      <Tr>
                          <Th>Name</Th>
                          <Th>Value</Th>
                      </Tr>
                      </Thead>
                      <Tbody>
                      <Tr>
                          <Td>inches</Td>
                          <Td>millimetres (mm)</Td>
                      </Tr>
                      <Tr>
                          <Td>feet</Td>
                          <Td>centimetres (cm)</Td>
                      </Tr>
                      <Tr>
                          <Td>yards</Td>
                          <Td>metres (m)</Td>
                      </Tr>
                      </Tbody>
                      <Tfoot>
                      <Tr>
                          <Th>To convert</Th>
                          <Th>into</Th>
                      </Tr>
                      </Tfoot>
                  </Table>
                  </Box> */}
              </Stack>
              </Box>
          </Flex>
        </Box>
    </>
  )
}

export default MainTabs