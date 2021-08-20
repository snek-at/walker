import {Story, Meta} from '@storybook/react'

import OpenFolder from '.'

export default {
  title: 'Atoms/icons/OpenFolder',
  component: OpenFolder
} as Meta

const Template: Story = args => <OpenFolder {...args} />

export const Primary = Template.bind({})

Primary.args = {}
