import {Story, Meta} from '@storybook/react'

import PageTree from '.'

export default {
  title: 'Molecules/PageTree',
  component: PageTree
} as Meta

const treeWithTwoBranches = {
  'SitePage /test': {
    id: 'test',
    children: [],
    data: {
      title: 'root'
    }
  },
  '1-1': {
    id: '1-1',
    children: [],
    data: {
      title: 'First parent'
    }
  },
  '1-2': {
    id: '1-2',
    children: [],
    data: {
      title: 'Second parent'
    }
  },
  '1-1-1': {
    id: '1-1-1',
    children: [],
    data: {
      title: 'Child one'
    }
  },
  '1-1-2': {
    id: '1-1-2',
    children: [],
    data: {
      title: 'Child two'
    }
  },
  '1-2-1': {
    id: '1-2-1',
    children: [],
    data: {
      title: 'Child three'
    }
  },
  '1-2-2': {
    id: '1-2-2',
    children: [],
    data: {
      title: 'Child four'
    }
  }
}

const Template: Story = args => (
  <PageTree items={treeWithTwoBranches} {...args} />
)

export const Primary = Template.bind({})

Primary.args = {}
