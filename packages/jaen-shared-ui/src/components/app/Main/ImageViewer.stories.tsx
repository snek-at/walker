import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  TabPanels,
  TabList,
  Tab,
  Tabs,
  TabPanel,
  Spacer,
  useDisclosure,
  useColorMode
} from '@chakra-ui/react'
import ImageViewer, {
  ImageViewerProps
} from '@snek-at/snek-finder/lib/components/organisms/ImageViewer'
import {Meta, Story} from '@storybook/react'
import {useRef} from 'react'

// const styles = {
//   transform: 'scale(1)',
//   height: '100vh'
// }

export default {
  title: 'Organisms/ImageViewer',
  component: ImageViewer
  //   decorators: [storyFn => <div style={styles}>{storyFn()}</div>]
} as Meta

const Template: Story<ImageViewerProps> = args => <ImageViewer {...args} />

export const Primary: Story<ImageViewerProps> = Template.bind({})

Primary.args = {
  src:
    'https://topsexymodels.net/wp-content/uploads/2020/04/_92444178_518742988810667_5403639706982625195_n-820x1024.jpg',
  onClose: () => null,
  onOpenStudio: () => null
}

function DrawerExample() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const btnRef = useRef()
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

          <DrawerHeader>{/* <HeaderMain /> */}</DrawerHeader>

          {/* <Divider /> */}

          <DrawerBody pd={0} mt={2} overflowY="hidden">
            {/* <HotbarMain /> */}
            {/* <Divider mt={4} mb={4} /> */}
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
                  {/* <PageExplorer items={PageExplorer.args?.items || {}} /> */}
                </TabPanel>
                <TabPanel>
                  {/* <SnekFinder backend={IPFSBackend} /> */}
                  <ImageViewer
                    src="https://topsexymodels.net/wp-content/uploads/2020/04/_92444178_518742988810667_5403639706982625195_n-820x1024.jpg"
                    onClose={() => null}
                    onOpenStudio={() => null}
                  />
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
          {/* <Divider /> */}
          <DrawerFooter py={2}>{/* <FooterMain /> */}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export const DrawerExampleStory: Story = () => <DrawerExample />
