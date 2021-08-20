import {Story, Meta} from '@storybook/react'

import FolderClose from '.'

export default {
  title: 'Atoms/icons/FolderClose',
  component: FolderClose
} as Meta

const Template: Story = args => <FolderClose {...args} />

export const Primary = Template.bind({})

Primary.args = {}
