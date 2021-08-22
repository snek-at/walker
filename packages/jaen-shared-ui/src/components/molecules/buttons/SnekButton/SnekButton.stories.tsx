import {Story, Meta} from '@storybook/react'

import SnekButton from '.'

export default {
  title: 'Molecules/buttons/SnekButton',
  component: SnekButton
} as Meta

const Template: Story = args => <SnekButton {...args} />

export const Primary = Template.bind({})

Primary.args = {}
