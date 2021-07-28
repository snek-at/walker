import {Story, Meta} from '@storybook/react'
import React from 'react'

import BlockChooser from '../../atoms/icons/SnekIcon'

export default {
  title: 'Organisms/BlockChooser',
  component: BlockChooser
} as Meta

const Template: Story = args => <BlockChooser {...args} />

export const Primary = Template.bind({})

Primary.args = {}
