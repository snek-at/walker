import {Story, Meta} from '@storybook/react'

import PublishButton from '.'

export default {
  title: 'Molecules/buttons/PublishButton',
  component: PublishButton
} as Meta

const Template: Story = args => <PublishButton {...args} />

export const Primary = Template.bind({})

Primary.args = {}
