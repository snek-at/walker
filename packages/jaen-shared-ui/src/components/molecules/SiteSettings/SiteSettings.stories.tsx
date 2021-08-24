import {Story, Meta} from '@storybook/react'

import SiteSettings, {SiteSettingsType} from '.'

export default {
  title: 'Molecules/SiteSettings',
  component: SiteSettings
} as Meta

const Template: Story = args => (
  <SiteSettings onValuesChange={_values => null} {...args} />
)

export const Primary: Story<SiteSettingsType> = Template.bind({})

export const testvalues = {
  title: 'Snek Homepage',
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  siteUrl: 'https://snek.at',
  image: 'https://placehold.jp/150x150.png',
  author: {
    name: "kleberbaum"
  },
  organization: {
    name: "snek-at",
    url: "snek.at",
    logo: "idk"
  },
  social: {
    twitter: "kleberbaum", // twitter username
    fbAppID: "cool", // FB ANALYTICS
    google: "st ring"// GOOGLE ANALYTICS
  },
  lastPublished: 'never'
}

Primary.args = {
  values: testvalues
}
