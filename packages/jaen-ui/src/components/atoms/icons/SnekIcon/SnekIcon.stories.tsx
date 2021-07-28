import {Story, Meta} from '@storybook/react'
import React from 'react'

import SnekIcon from '.'

export default {
  title: 'Atoms/icons/SnekIcon',
  component: SnekIcon
} as Meta

const Template: Story = args => <SnekIcon {...args} />

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
