import {Story, Meta} from '@storybook/react'

import AEdit from '.'

export default {
  title: 'Atoms/icons/AEdit',
  component: AEdit
} as Meta

const Template: Story = args => <AEdit {...args} />

export const Primary = Template.bind({})

Primary.args = {}
