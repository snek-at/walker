import {Story, Meta} from '@storybook/react'

import Edit from '.'

export default {
  title: 'Molecules/buttons/Edit',
  component: Edit
} as Meta

const Template: Story = args => <Edit {...args} />

export const Primary = Template.bind({})

Primary.args = {}
