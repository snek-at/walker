import {Story, Meta} from '@storybook/react'

import ADmToggle from '.'

export default {
  title: 'Atoms/icons/ADmToggle',
  component: ADmToggle
} as Meta

const Template: Story = args => <ADmToggle {...args} />

export const Primary = Template.bind({})

Primary.args = {}
