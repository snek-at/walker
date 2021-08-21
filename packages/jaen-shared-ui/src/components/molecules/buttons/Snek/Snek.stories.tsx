import {Story, Meta} from '@storybook/react'

import Search from '.'

export default {
  title: 'Molecules/buttons/Search',
  component: Search
} as Meta

const Template: Story = args => <Search {...args} />

export const Primary = Template.bind({})

Primary.args = {}
