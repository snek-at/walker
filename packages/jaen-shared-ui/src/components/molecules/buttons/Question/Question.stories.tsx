import {Story, Meta} from '@storybook/react'

import Question from '.'

export default {
  title: 'Molecules/buttons/Question',
  component: Question
} as Meta

const Template: Story = args => <Question {...args} />

export const Primary = Template.bind({})

Primary.args = {}
