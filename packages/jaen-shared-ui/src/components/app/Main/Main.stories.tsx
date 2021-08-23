import {Story, Meta} from '@storybook/react'

import Main, {MainProps} from '.'

export default {
  title: 'App/Main',
  component: Main
} as Meta

const Template: Story<MainProps> = args => <Main {...args} />

export const Primary = Template.bind({})

Primary.args = {
  pagesItems: {
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
      parent: null
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
      parent: null
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
      },
      parent: '2'
    }
  },
  filesInitBackendLink:
    'https://ipfs.io/ipfs/QmSw2QEGRx9PzBXsxt5HoKiong1hkWYN8pNwLKqwNPgaiR',
  filesBackendLinkChange: () => null,
  onOpen: () => null,
  onClose: () => null,
  isOpen: true
}
