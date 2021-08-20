import {Story, Meta} from '@storybook/react'

import File from '.'

export default {
  title: 'Atoms/icons/File',
  component: File
} as Meta

const Template: Story = args => <File {...args} />

export const Primary = Template.bind({})

Primary.args = {}
