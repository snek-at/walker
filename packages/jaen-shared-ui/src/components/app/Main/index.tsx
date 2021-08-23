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
import React, {useEffect} from 'react'

import {Items} from '../../organisms/PageExplorer'
import {Primary as PageExplorer} from '../../organisms/PageExplorer/PageExplorer.stories'
import {
  HeaderMain,
  HotbarMain,
  FooterMain,
  HotbarMainProps,
  TabsMainProps,
  TabsMain
} from '../../organisms/main'

export type MainProps = {
  hotbar: HotbarMainProps
  tabs: TabsMainProps
  onOpen: () => void
  onClose: () => void
  isOpen: boolean
}

const Main: React.FC<MainProps> = props => {
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        placement="right"
        size="2xl"
        onClose={props.onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            <HeaderMain />
          </DrawerHeader>

          <Divider />

          <DrawerBody pd={0} mt={2}>
            <HotbarMain {...props.hotbar} />
            <TabsMain {...props.tabs} />
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
