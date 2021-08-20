import {Story, Meta} from '@storybook/react'

import FolderOpen from '.'

export default {
  title: 'Atoms/icons/FolderOpen',
  component: FolderOpen
} as Meta

const Template: Story = args => <FolderOpen {...args} />

export const Primary = Template.bind({})

Primary.args = {}
