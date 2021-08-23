import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Divider,
  Box,
  useDisclosure
} from '@chakra-ui/react'
import React, {useRef} from 'react'

import {JaenToggleButton} from '../../molecules/buttons'
import {
  HeaderMain,
  HotbarMain,
  FooterMain,
  HotbarMainProps,
  TabsMainProps,
  TabsMain,
  LoginMain
} from '../../organisms/main'

export type MainProps = {
  hotbar: HotbarMainProps
  tabs: TabsMainProps
  authenticated: boolean
}

const Main: React.FC<MainProps> = props => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const btnRef = useRef<HTMLButtonElement | null>()
  return (
    <>
      <Box pos="fixed" bottom={5} right={5} ref={btnRef as any}>
        <JaenToggleButton ref={btnRef as any} onClick={onOpen} />
      </Box>
      <Drawer
        placement="right"
        size="6xl"
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef as any}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          {props.authenticated ? (
            <>
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
            </>
          ) : (
            <LoginMain />
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Main
