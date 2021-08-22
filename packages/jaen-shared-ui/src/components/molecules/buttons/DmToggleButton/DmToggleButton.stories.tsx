import {Story, Meta} from '@storybook/react'

import DmToggleButton from '.'

export default {
  title: 'Molecules/buttons/DmToggleButton',
  component: DmToggleButton
} as Meta

const Template: Story = args => <DmToggleButton {...args} />

export const Primary = Template.bind({})

Primary.args = {}
