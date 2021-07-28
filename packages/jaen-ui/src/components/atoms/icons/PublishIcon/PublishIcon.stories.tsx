import {Story, Meta} from '@storybook/react'
import React from 'react'

import PublishIcon from '.'

export default {
  title: 'Atoms/icons/PublishIcon',
  component: PublishIcon
} as Meta

const Template: Story = args => <PublishIcon {...args} />

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
