import {Story, Meta} from '@storybook/react'

import Save from '.'

export default {
  title: 'Molecules/buttons/Save',
  component: Save
} as Meta

const Template: Story = args => <Save {...args} />

export const Primary = Template.bind({})

Primary.args = {}
