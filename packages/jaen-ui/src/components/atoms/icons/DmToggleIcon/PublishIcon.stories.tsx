import {Story, Meta} from '@storybook/react'
import React from 'react'

import DmToggleIcon from '.'

export default {
  title: 'Atoms/icons/DmToggleIcon',
  component: DmToggleIcon
} as Meta

const Template: Story = args => <DmToggleIcon {...args} />

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
