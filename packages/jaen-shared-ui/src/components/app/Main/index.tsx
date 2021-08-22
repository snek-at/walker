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

import React from 'react'

import {HeaderMain, HotbarMain, FooterMain} from '../../organisms/main'

import PageExplorer from '../../organisms/PageExplorer'


function Main() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const btnRef = React.useRef()
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
      <Drawer
        isOpen={true}
        placement="right"
        size="2xl"
        onClose={onClose}
        finalFocusRef={btnRef as any}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            <HeaderMain />
          </DrawerHeader>

          <Divider />

          <DrawerBody pd={0} mt={2}>
            <HotbarMain />
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
                  {/* <PageExplorer items={items}/> */}
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>
          <Divider />
          <DrawerFooter py={2}>
            <FooterMain />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Main