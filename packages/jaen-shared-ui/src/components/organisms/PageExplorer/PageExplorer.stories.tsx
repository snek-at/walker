import {Story, Meta} from '@storybook/react'

import PageExplorer, {PageExplorerProps} from '.'

export default {
  title: 'Organisms/PageExplorer',
  component: PageExplorer
} as Meta

const Template: Story<PageExplorerProps> = args => <PageExplorer {...args} />

export const Primary = Template.bind({})

Primary.args = {
  items: {
    '1': {
      children: [],
      data: {
        title: 'Snek Homepage',
        slug: 'string',
        description: 'string',
        image: 'string',
        isBlogPost: false,
        lastPublished: 'string',
        locked: true
      },
      isRootItem: true
    },
    '2': {
      children: ['2-1'],
      data: {
        title: 'My Blog',
        slug: 'my-blog',
        description: 'A fancy blog',
        image: 'string',
        isBlogPost: false,
        lastPublished: 'string'
      },
      isRootItem: true
    },
    '2-1': {
      children: [],
      data: {
        title: 'JaenV2',
        slug: 'jaen-v2',
        description: 'Wow.. Jaen release out now!',
        image: 'string',
        isBlogPost: true,
        lastPublished: '21.08.2021'
      }
    }
  }
}
