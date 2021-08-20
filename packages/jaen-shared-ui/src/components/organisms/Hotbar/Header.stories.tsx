import {Story, Meta} from '@storybook/react'

import Hotbar from '.'

export default {
  title: 'Organisms/Hotbarr',
  component: Hotbar
} as Meta

const Template: Story = args => <Hotbar {...args} />

export const Primary = Template.bind({})

Primary.args = {}
