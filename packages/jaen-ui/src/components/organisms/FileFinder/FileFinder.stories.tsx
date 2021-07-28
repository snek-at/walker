import {Story, Meta} from '@storybook/react'
import React from 'react'

import FileFinder from '../../atoms/icons/SnekIcon'

export default {
  title: 'Organisms/FileFinder',
  component: FileFinder
} as Meta

const Template: Story = args => <FileFinder {...args} />

export const Primary = Template.bind({})

Primary.args = {}
