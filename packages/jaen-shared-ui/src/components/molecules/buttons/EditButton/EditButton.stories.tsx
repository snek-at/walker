import {Story, Meta} from '@storybook/react'

import EditButton from '.'

export default {
  title: 'Molecules/buttons/Edit',
  component: EditButton
} as Meta

const Template: Story = args => <EditButton {...args} />

export const Primary = Template.bind({})

Primary.args = {}
