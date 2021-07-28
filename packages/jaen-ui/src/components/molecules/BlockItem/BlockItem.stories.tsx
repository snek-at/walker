import {Story, Meta} from '@storybook/react'
import React from 'react'

import BlockItem from '../../atoms/icons/SnekIcon'

export default {
  title: 'Molecules/BlockItem',
  component: BlockItem
} as Meta

const Template: Story = args => <BlockItem {...args} />

export const Primary = Template.bind({})

Primary.args = {}
