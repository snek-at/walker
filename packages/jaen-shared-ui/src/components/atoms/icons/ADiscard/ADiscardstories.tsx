import {Story, Meta} from '@storybook/react'

import ADiscard from '.'

export default {
  title: 'Atoms/icons/ADiscard',
  component: ADiscard
} as Meta

const Template: Story = args => <ADiscard {...args} />

export const Primary = Template.bind({})

Primary.args = {}
