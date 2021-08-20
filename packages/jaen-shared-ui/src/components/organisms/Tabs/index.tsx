import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Spacer,
} from '@chakra-ui/react'

import PagetTee from '../../molecules'

const MainTabs: React.FC = () => {
  return (
    <>
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
            <PageTab />
          </TabPanel>
          <TabPanel>
              <p>two</p>
          </TabPanel>
          <TabPanel>
              <p>three!</p>
          </TabPanel>
          </TabPanels>
      </Tabs>
    </>
  )
}

export default MainTabs