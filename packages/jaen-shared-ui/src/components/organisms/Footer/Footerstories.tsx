import {Story, Meta} from '@storybook/react'

import Footer from '.'

export default {
  title: 'Organisms/Footer',
  component: Footer
} as Meta

const Template: Story = args => <Footer {...args} />

export const Primary = Template.bind({})

Primary.args = {}
