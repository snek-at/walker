import {Story, Meta} from '@storybook/react'
import React from 'react'

import EditIcon from '.'

export default {
  title: 'Atoms/icons/EditIcon',
  component: EditIcon
} as Meta

const Template: Story = args => <EditIcon {...args} />

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
