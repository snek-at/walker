import {Story, Meta} from '@storybook/react'

import APublish from '.'

export default {
  title: 'Atoms/icons/APublish',
  component: APublish
} as Meta

const Template: Story = args => <APublish {...args} />

export const Primary = Template.bind({})

Primary.args = {}
