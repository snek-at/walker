import {Story, Meta} from '@storybook/react'

import Search from '.'

export default {
  title: 'Atoms/icons/Search',
  component: Search
} as Meta

const Template: Story = args => <Search {...args} />

export const Primary = Template.bind({})

Primary.args = {}
