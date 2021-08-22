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
import {SnekFinder} from '@snek-at/snek-finder'
import IPFSBackend from '@snek-at/snek-finder/lib/backends/IPFSBackend'
import ImageViewer from '@snek-at/snek-finder/lib/components/organisms/ImageViewer'
import React from 'react'

import {Primary as PageExplorer} from '../../organisms/PageExplorer/PageExplorer.stories'
import {HeaderMain, HotbarMain, FooterMain} from '../../organisms/main'

IPFSBackend.onBackendLinkChange = (link: string) => {
  console.log(link)
}

IPFSBackend.initBackendLink =
  'https://ipfs.io/ipfs/QmSw2QEGRx9PzBXsxt5HoKiong1hkWYN8pNwLKqwNPgaiR'

function Main() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const btnRef = React.useRef()
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
      <Drawer isOpen={true} placement="right" size="sm" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <SnekFinder backend={IPFSBackend} />
        </DrawerContent>
      </Drawer>
      {/* <Drawer
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

          <DrawerBody pd={0} mt={2} overflowY="hidden">
            <HotbarMain />
            <Tabs pd={0} mt={4}>
              <TabList>
                <Tab>Pages</Tab>
                <Tab>Files</Tab>
                <Spacer />
                <Tab>Analytics</Tab>
                <Tab>Settings</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <PageExplorer items={PageExplorer.args?.items || {}} />
                </TabPanel>
                <TabPanel>
              
                </TabPanel>
                <TabPanel>
                  <p>Analytics</p>
                </TabPanel>
                <TabPanel>
                  <p>Settings</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>
          <Divider />
          <DrawerFooter py={2}>
            <FooterMain />
          </DrawerFooter>
        </DrawerContent>
      </Drawer> */}
    </>
  )
}

export default Main
