import {Story, Meta} from '@storybook/react'

import MainHeader from '.'

export default {
  title: 'Organisms/Header',
  component: MainHeader
} as Meta

const Template: Story = args => <MainHeader {...args} />

export const Primary = Template.bind({})

Primary.args = {}
