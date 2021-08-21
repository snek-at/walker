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
  Button
} from '@chakra-ui/react'
import {useState} from 'react'

import {PageContent} from '../../molecules'
import PageTree from '../../molecules/PageTree'

export type Items = {
  [id: string]: {
    data: {
      title: string
      slug: string
      description: string
      image: string
      isBlogPost: boolean
      lastPublished: string
      locked?: boolean
    }
    children: string[]
    isRootItem?: true
  }
}

export type PageExplorerProps = {
  items: Items
}

const PageExplorer: React.FC<PageExplorerProps> = props => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const getItemValues = (id: string) => {
    const item = props.items[id]

    return {
      title: item.data.title,
      slug: item.data.slug,
      description: item.data.description,
      image: item.data.image,
      isBlogPost: item.data.isBlogPost,
      lastPublished: item.data.lastPublished
    }
  }

  const values = selectedItem ? getItemValues(selectedItem) : undefined

  const handleItemSelect = (id: string | null) => {
    setSelectedItem(id)
  }

  const handleValuesChange = (values: any) => {}

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
          <Box paddingRight={5} minW="sm">
            <PageTree
              items={props.items}
              height="100%"
              onItemSelect={handleItemSelect}
            />
          </Box>
          <Center height="65vh">
            <Divider orientation="vertical" />
          </Center>
          <Box flex="1" p={5}>
            <PageContent values={values} onValuesChange={handleValuesChange} />
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default PageExplorer
