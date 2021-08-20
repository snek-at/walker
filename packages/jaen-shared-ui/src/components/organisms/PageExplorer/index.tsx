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
  Checkbox
} from '@chakra-ui/react'

import {PageContent} from '../../molecules'
import PageTree from '../../molecules/PageTree'

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
          <Box paddingRight={5} minW="sm">
            <PageTree
              items={treeExample}
              onItemSelect={() => console.log('help')}
            />
          </Box>
          <Center height="65vh">
            <Divider orientation="vertical" />
          </Center>
          <Box flex="1" p={5}>
            <PageContent />
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default MainTabs
