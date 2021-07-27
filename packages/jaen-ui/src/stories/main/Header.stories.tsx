import {Story, Meta} from '@storybook/react'
import React from 'react'

import Header, {HeaderProps} from '../../components/main/Header'

export default {
  title: 'Jaen UI/Main/Header',
  component: Header
} as Meta

const Template: Story<HeaderProps> = args => <Header {...args} />

export const Primary = Template.bind({})

Primary.args = {
  colorMode: 'dark'
}
