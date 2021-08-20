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
  Spacer
} from '@chakra-ui/react'

const PageContent: React.FC = () => {
  return (
    <>
      <Stack spacing="24px">
        <Flex>
          <Box>
            <Heading size="lg">Snek Homepage</Heading>
          </Box>
          <Spacer />
          <Box>
            <Badge variant="outline" colorScheme="blue">
              Last published: 01.01.2001
            </Badge>
          </Box>
        </Flex>
        <Divider />
        <Stack spacing={2}>
          <HStack>
            <Box>
              <Text variant="bold" as="strong">
                Title
              </Text>
              <Input placeholder="Title" />
            </Box>
            <Box>
              <Text variant="bold" as="strong">
                Slug
              </Text>
              <Input placeholder="my-slug" />
            </Box>
          </HStack>
          <Text variant="bold" as="strong">
            Description
          </Text>
          <Textarea placeholder="Description" />
          <Text variant="bold" as="strong">
            Twitter username
          </Text>
          <Input placeholder="TwitterUsername" colorScheme="facebook" />

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
        title: string description: string image: string /** * Link
        rel="canonical" will be used by search engines */ canonical: string
        datePublished: string | false social: {'{'}
        twitter: string fbAppId: string
        {'}'}
        isBlogPost: boolean
      </Stack>
    </>
  )
}

export default PageContent
