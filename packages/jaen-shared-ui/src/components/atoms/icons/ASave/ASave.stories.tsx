import {Story, Meta} from '@storybook/react'

import ASave from '.'

export default {
  title: 'Atoms/icons/ASave',
  component: ASave
} as Meta

const Template: Story = args => <ASave {...args} />

export const Primary = Template.bind({})

Primary.args = {}
