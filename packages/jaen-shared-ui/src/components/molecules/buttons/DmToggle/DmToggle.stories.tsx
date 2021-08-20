import {Story, Meta} from '@storybook/react'

import DmToggle from '.'

export default {
  title: 'Molecules/buttons/DmToggle',
  component: DmToggle
} as Meta

const Template: Story = args => <DmToggle {...args} />

export const Primary = Template.bind({})

Primary.args = {}
