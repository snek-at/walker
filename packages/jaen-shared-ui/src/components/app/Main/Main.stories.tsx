import {Story, Meta} from '@storybook/react'

import Main from '.'

export default {
  title: 'App/Main',
  component: Main
} as Meta

const Template: Story = args => <Main {...args} />

export const Primary = Template.bind({})

Primary.args = {}
