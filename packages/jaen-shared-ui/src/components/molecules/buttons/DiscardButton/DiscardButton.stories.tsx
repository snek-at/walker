import {Story, Meta} from '@storybook/react'

import DiscardButton from '.'

export default {
  title: 'Molecules/buttons/DiscardButton',
  component: DiscardButton
} as Meta

const Template: Story = args => <DiscardButton {...args} />

export const Primary = Template.bind({})

Primary.args = {}
