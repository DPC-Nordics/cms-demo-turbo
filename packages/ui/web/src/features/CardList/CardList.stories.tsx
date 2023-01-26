import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardList } from './CardList'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Features/CardList',
  component: CardList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ref: { table: { disable: true } },
  },
} as ComponentMeta<typeof CardList>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardList> = (args) => <CardList {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
const cards = [
  {
    title: 'Next JS',
    description:
    'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    subtitle: 'This is the subtitle',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
  },
  {
    title: 'React 18',
    description:
    'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
    subtitle: 'A JavaScript UI library',
    image: 'https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png',
  },
  {
    title: 'Redux Toolkit',
    description:
    'Global state management. New generation Redux framework. Includes Redux Thunk out of the box for asynchronous actions',
    subtitle: 'State management',
    image: 'https://hybridheroes.de/blog/content/images/size/w2000/2022/03/redux-toolkit-1400.jpg',
  },
]

export const Primary = Template.bind({})

Primary.args = {
  cards: cards,
}
