import {Story, Meta} from '@storybook/react'

import Main, {MainProps} from '.'
import {Primary as HotbarMain} from '../../organisms/main/HotbarMain/HeaderMain.stories'
import {Primary as TabsMain} from '../../organisms/main/TabsMain/TabsMain.stories'

export default {
  title: 'App/Main',
  component: Main
} as Meta

const Template: Story<MainProps> = args => <Main {...args} />

export const Primary = Template.bind({})

Primary.args = {
  hotbar: HotbarMain.args as any,
  tabs: TabsMain.args as any,

  onOpen: () => null,
  onClose: () => null,
  isOpen: true
}
