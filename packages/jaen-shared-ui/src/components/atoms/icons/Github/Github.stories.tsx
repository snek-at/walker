import {Story, Meta} from '@storybook/react'

import Github from '.'

export default {
  title: 'Atoms/icons/Github',
  component: Github
} as Meta

const Template: Story = args => <Github {...args} />

export const Primary = Template.bind({})

Primary.args = {}
