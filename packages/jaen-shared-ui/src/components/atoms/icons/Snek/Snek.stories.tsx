import {Story, Meta} from '@storybook/react'

import Snek from '.'

export default {
  title: 'Atoms/icons/Snek',
  component: Snek
} as Meta

const Template: Story = args => <Snek {...args} />

export const Primary = Template.bind({})

Primary.args = {}
