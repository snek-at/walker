import {Story, Meta} from '@storybook/react'

import Github from '.'

export default {
  title: 'Molecules/buttons/Github',
  component: Github
} as Meta

const Template: Story = args => <Github {...args} />

export const Primary = Template.bind({})

Primary.args = {}
