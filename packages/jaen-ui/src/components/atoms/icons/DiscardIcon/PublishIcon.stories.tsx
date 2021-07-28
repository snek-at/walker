import {Story, Meta} from '@storybook/react'
import React from 'react'

import DiscardIcon from '.'

export default {
  title: 'Atoms/icons/DiscardIcon',
  component: DiscardIcon
} as Meta

const Template: Story = args => <DiscardIcon {...args} />

export const Primary = Template.bind({})

Primary.args = {}

export const LightMode = Template.bind({})

LightMode.args = {
  colorMode: 'light'
}

export const DarkMode = Template.bind({})

DarkMode.args = {
  colorMode: 'dark'
}
