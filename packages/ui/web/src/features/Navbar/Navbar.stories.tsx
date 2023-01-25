import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Navbar } from './Navbar'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/NavBar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {
  homeNav: {
    label: 'DPC Turbo',
    navigateTo: '/',
  },
  items: [
    {
      label: 'Contentful',
      navigateTo: '/contentful',
    },
    {
      label: 'Contentstack',
      navigateTo: '/contentstack',
    },
    {
      label: 'Storyblok',
      navigateTo: '/storyblok',
    },
  ],
}
