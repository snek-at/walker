import {Story, Meta} from '@storybook/react'

import PageTree from '.'

export default {
  title: 'Molecules/PageTree',
  component: PageTree
} as Meta

const treeExample = {
  'SitePage /test': {
    id: 'test',
    children: [],
    data: {
      title: 'root'
    },
    parent: null
  },
  '1-1': {
    id: '1-1',
    children: [],
    data: {
      title: 'First parent',
      locked: true
    },
    parent: null
  },
  '1-2': {
    id: '1-2',
    children: [],
    data: {
      title: 'Second parent'
    },
    parent: null
  },
  '1-1-1': {
    id: '1-1-1',
    children: [],
    data: {
      title: 'Child one'
    },
    parent: null
  },
  '1-1-2': {
    id: '1-1-2',
    children: [],
    data: {
      title: 'Child two'
    },
    parent: null
  },
  '1-2-1': {
    id: '1-2-1',
    children: [],
    data: {
      title: 'Child three'
    },
    parent: null
  },
  '1-2-2': {
    id: '1-2-2',
    children: [],
    data: {
      title: 'Child four'
    },
    parent: null
  }
}

const Template: Story = args => (
  <PageTree
    items={treeExample}
    height={500}
    onItemSelect={() => console.log('help')}
    {...args}
  />
)

export const Primary = Template.bind({})

Primary.args = {}
