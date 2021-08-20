import {Story, Meta} from '@storybook/react'

import Publish from '.'

export default {
  title: 'Molecules/buttons/Publish',
  component: Publish
} as Meta

const Template: Story = args => <Publish {...args} />

export const Primary = Template.bind({})

Primary.args = {}
