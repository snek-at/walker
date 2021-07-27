import {Story, Meta} from '@storybook/react'
import React from 'react'

import Hotbar, {HotbarProps} from '../../components/main/Hotbar'

export default {
  title: 'Jaen UI/Main/Hotbar',
  component: Hotbar
} as Meta

const Template: Story<HotbarProps> = args => <Hotbar {...args} />

export const Primary = Template.bind({})

Primary.args = {
  onEditClick: () => alert("onEditClick"),
  onDiscardClick: () => alert("onDiscardClick"),
  onSaveClick: () => alert("onSaveClick"),
  onPublishClick: () => alert("onPublishClick"),
  onWorkspacesClick: () => alert("onWorkspacesClick"),
  workspacesMenuItems: [
    {type: 'Item', command: 'A', name: 'Workspaces', onClick: () => alert("workspacesMenuItems")},
    {type: 'Divider'},
    {type: 'Item', command: 'B', name: 'Open Workspace', onClick: () => alert("workspacesMenuItems")},
    {type: 'Item', command: 'C', name: 'Choose Workspace', onClick: () => alert("workspacesMenuItems")},
    {type: 'Item', command: 'C', name: 'Merge Workspace', onClick: () => alert("workspacesMenuItems")}
  ]
}
