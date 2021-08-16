import {Story, Meta} from '@storybook/react'

import ARocket from '.'

export default {
  title: 'Atoms/icons/ARocket',
  component: ARocket
} as Meta

const Template: Story = args => <ARocket {...args} />

export const Primary = Template.bind({})

Primary.args = {}
