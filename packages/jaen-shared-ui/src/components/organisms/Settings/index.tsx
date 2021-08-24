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

import SiteSettings from '../../molecules/SiteSettings'
import {testvalues} from '../../molecules/SiteSettings/SiteSettings.stories'


const Settings: React.FC = () => {

  return (
    <>
      {/* <Divider mt={4} mb={4} /> */}
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" h="67vh" p={2}>
        <Flex h="65vh">
          <Box paddingRight={5} minW="sm">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={2}
              userSelect="none">
              <Flex>
                <Box>
                  ~ Site
                </Box>
              </Flex>
            </Box>
          </Box>
          <Center height="65vh">
            <Divider orientation="vertical" />
          </Center>
          <Box flex="1" p={5} overflow="auto">
            <SiteSettings onValuesChange={_values => null} values={testvalues}/>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Settings
