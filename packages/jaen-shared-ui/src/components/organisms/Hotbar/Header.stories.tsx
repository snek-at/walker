import {Story, Meta} from '@storybook/react'

import MainHotbar from '.'

export default {
  title: 'Organisms/Hotbar',
  component: MainHotbar
} as Meta

const Template: Story = args => <MainHotbar {...args} />

export const Primary = Template.bind({})

Primary.args = {}
