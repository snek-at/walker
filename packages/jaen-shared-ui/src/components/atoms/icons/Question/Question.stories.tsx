import {Story, Meta} from '@storybook/react'

import Question from '.'

export default {
  title: 'Atoms/icons/Question',
  component: Question
} as Meta

const Template: Story = args => <Question {...args} />

export const Primary = Template.bind({})

Primary.args = {}
