import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Divider
} from '@chakra-ui/react'
import React, {useEffect} from 'react'

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
