import {Story, Meta} from '@storybook/react'
import React from 'react'

import PageTree from '../../atoms/icons/SnekIcon'

export default {
  title: 'Organisms/PageTree',
  component: PageTree
} as Meta

const Template: Story = args => <PageTree {...args} />

export const Primary = Template.bind({})

Primary.args = {}
