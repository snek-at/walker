import {Story, Meta} from '@storybook/react'

import Settings from '.'

export default {
  title: 'Organisms/Settings',
  component: Settings
} as Meta

const Template: Story = args => <Settings {...args} />

export const Primary = Template.bind({})
