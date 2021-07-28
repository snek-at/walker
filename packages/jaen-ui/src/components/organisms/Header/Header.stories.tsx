import {Story, Meta} from '@storybook/react'
import React from 'react'

import Header, {HeaderProps} from '.'

export default {
  title: 'Organisms/Header',
  component: Header
} as Meta

const Template: Story<HeaderProps> = args => <Header {...args} />

export const Primary = Template.bind({})

Primary.args = {
  colorMode: 'dark'
}
