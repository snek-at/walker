import {Story, Meta} from '@storybook/react'

import Discard from '.'

export default {
  title: 'Molecules/buttons/Discard',
  component: Discard
} as Meta

const Template: Story = args => <Discard {...args} />

export const Primary = Template.bind({})

Primary.args = {}
