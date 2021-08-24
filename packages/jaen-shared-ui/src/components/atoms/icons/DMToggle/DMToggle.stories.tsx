import {Story, Meta} from '@storybook/react'

import DMToggle, {DMToggleProps} from '.'

export default {
  title: 'Atoms/icons/DMToggle',
  component: DMToggle
} as Meta

const Template: Story<DMToggleProps> = args => <DMToggle {...args} />

export const DarkMode = Template.bind({})

DarkMode.args = {
  isDMEnabled: true
}

export const LightMode = Template.bind({})

LightMode.args = {
  isDMEnabled: false
}
