import {
  DeleteIcon,
  InfoIcon,
  InfoOutlineIcon,
  LockIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  QuestionIcon
} from '@chakra-ui/icons'
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  useDisclosure,
  Switch,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  InputGroup,
  InputLeftElement,
  Heading,
  Box,
  IconButton,
  HStack,
  Badge,
  Stack,
  Divider,
  ButtonGroup,
  Tooltip,
  List,
  ListItem,
  ListIcon,
  useColorMode,
  Flex,
  Center,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  InputRightAddon,
  InputLeftAddon,
  Textarea,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Spacer,
  Checkbox,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import {FaCodeBranch} from '@react-icons/all-files/fa/FaCodeBranch'
import {FaGithub} from '@react-icons/all-files/fa/FaGithub'
import {FaRocket} from '@react-icons/all-files/fa/FaRocket'
import {FaSave} from '@react-icons/all-files/fa/FaSave'
import React from 'react'

import PureTree from '../PageTree'
import {
  SnekIcon //   HelpIcon,
  //   BrightnessIcon,
  //   EditIcon,
  //   DiscardIcon,
  //   SaveIcon,
  //   RocketIcon,
  //   WorkspacesIcon,
  //   AddIcon,
  //   MergeIcon
} from '../icons'
import {
  Animation,
  dmToggleIconLottie,
  editIconLottie,
  discardIconLottie,
  saveIconLottie,
  publishIconLottie,
  workspacesIconLottie,
  folderIconLottie
} from '../icons/lottie'
import {ImageTab} from '../tabs'

// import {
//   FaCodeBranch,
//   FaCompress,
//   FaDraft2Digital,
//   FaFirstdraft,
//   FaFolder,
//   FaGithub,
//   FaHashtag,
//   FaRocket,
//   FaSave,
//   FaTrash
// } from '@react-icons/all-files/fa'

function DrawerExample() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const btnRef = React.useRef()
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
      <Button ref={btnRef as any} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        size="2xl"
        onClose={onClose}
        finalFocusRef={btnRef as any}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            <HStack>
              {/* <Animation lottie={sampleLottie}>
                {({container, animation}) => (
                  <IconButton
                    variant="ghost"
                    aria-label="adad"
                    icon={container}
                    onTog
                    onClick={() => {
                      animation.play()
                      animation.resetSegments(true)
                    }}
                  />
                )}
              </Animation> */}
              <Button
                minW="4xs"
                variant="ghost"
                leftIcon={<SnekIcon w={35} h={35} />}
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
              <Animation lottie={dmToggleIconLottie} supportColorMode={false}>
                {({container, animation}) => (
                  <IconButton
                    variant="ghost"
                    aria-label="adad"
                    icon={container}
                    onClick={() => {
                      toggleColorMode()

                      colorMode === 'dark'
                        ? animation.playSegments([20, 114], true)
                        : animation.playSegments([144, 228], true)
                    }}
                  />
                )}
              </Animation>
            </HStack>
          </DrawerHeader>

          <Divider />

          <DrawerBody pd={0} mt={2}>
            <HStack>
              <Flex width="100%">
                <Stack direction="row">
                  <Animation lottie={editIconLottie}>
                    {({container, animation}) => (
                      <Tooltip
                        hasArrow
                        label="Hey you.. Press me and you can destroy everything"
                        placement="bottom-start"
                        fontSize="md">
                        <Button
                          size="sm"
                          variant="outline"
                          leftIcon={container}
                          rightIcon={
                            <Badge borderRadius="full" px="2" colorScheme="red">
                              187
                            </Badge>
                          }
                          onClick={() => {
                            animation.playSegments(
                              [0, animation.totalFrames],
                              true
                            )
                          }}>
                          Edit
                        </Button>
                      </Tooltip>
                    )}
                  </Animation>

                  <Animation lottie={discardIconLottie}>
                    {({container, animation}) => (
                      <Button
                        size="sm"
                        variant="outline"
                        leftIcon={container}
                        onClick={() => {
                          animation.playSegments(
                            [0, animation.totalFrames],
                            true
                          )
                        }}>
                        Discard
                      </Button>
                    )}
                  </Animation>

                  <Animation lottie={saveIconLottie}>
                    {({container, animation}) => (
                      <Button
                        size="sm"
                        variant="outline"
                        leftIcon={container}
                        onClick={() => {
                          animation.playSegments(
                            [0, animation.totalFrames],
                            true
                          )
                        }}>
                        Save
                      </Button>
                    )}
                  </Animation>
                </Stack>

                <Spacer />
                <Stack direction="row">
                  <Animation lottie={publishIconLottie}>
                    {({container, animation}) => (
                      <Button
                        size="sm"
                        variant="outline"
                        leftIcon={container}
                        onClick={() => {
                          animation.playSegments(
                            [0, animation.totalFrames],
                            true
                          )
                        }}>
                        Publish
                      </Button>
                    )}
                  </Animation>
                  <Divider orientation="vertical" />
                  <Menu isLazy>
                    <Animation lottie={workspacesIconLottie}>
                      {({container, animation}) => (
                        <MenuButton
                          size="sm"
                          as={Button}
                          aria-label="Options"
                          leftIcon={container}
                          rightIcon={
                            <Badge
                              borderRadius="full"
                              px="2"
                              colorScheme="yellow">
                              a7bd
                            </Badge>
                          }
                          variant="outline"
                          onClick={() => {
                            animation.playSegments(
                              [
                                [0, animation.totalFrames],
                                [animation.totalFrames, 0]
                              ],
                              true
                            )
                          }}>
                          Workspaces
                        </MenuButton>
                      )}
                    </Animation>
                    <MenuList>
                      <MenuItem command="⌘T">Workspaces</MenuItem>
                      <MenuDivider />
                      <MenuItem command="⌘T">New Workspace</MenuItem>
                      <MenuItem command="⌘O">Choose Workspace</MenuItem>
                      <MenuItem command="⌘O">Merge Workspace</MenuItem>
                    </MenuList>
                  </Menu>
                </Stack>
              </Flex>
            </HStack>
            {/* <Divider mt={4} mb={4} /> */}
            <Tabs pd={0} mt={4}>
              <TabList>
                <Tab>Pages</Tab>
                <Tab>Images</Tab>
                <Tab>Documents</Tab>
                <Spacer />
                <Tab>Analytics</Tab>
                <Tab>Settings</Tab>
              </TabList>

              <TabPanels overflowY="auto" maxH="80vh">
                <TabPanel>
                  <Box
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    minHeight="65vh"
                    p={2}>
                    <Flex minHeight="65vh">
                      <Box paddingRight={10}>
                        <PureTree />
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
                </TabPanel>
                <TabPanel>
                  <ImageTab />
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>
          <Divider />
          <DrawerFooter py={2}>
            <Button size="sm" variant="ghost">
              2021 &copy; snek-at
            </Button>
            <Spacer />
            <Menu isLazy>
              <MenuButton
                size="sm"
                as={Button}
                aria-label="Options"
                rightIcon={
                  <Badge borderRadius="full" px="2" colorScheme="green">
                    en
                  </Badge>
                }
                variant="ghost">
                Language
              </MenuButton>
              <MenuList>
                <MenuItem command="⌘T">en</MenuItem>
                <MenuDivider />
                <MenuItem command="⌘T">de</MenuItem>
              </MenuList>
            </Menu>
            <Button size="sm" variant="ghost">
              v1.3.0
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerExample
