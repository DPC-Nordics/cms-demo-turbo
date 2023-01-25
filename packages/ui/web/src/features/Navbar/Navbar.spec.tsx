import { render } from '@testing-library/react'
import { Navbar } from '.'

const homeNav = {
  label: 'DPC Turbo',
  navigateTo: '/',
}
const items = [
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
]

describe('Navbar', () => {
  it('renders', () => {
    const { queryAllByText } = render(<Navbar homeNav={homeNav} items={items} />)

    expect(queryAllByText('Contentful')).toHaveLength(1)
    expect(queryAllByText('Contentstack')).toHaveLength(1)
    expect(queryAllByText('Storyblok')).toHaveLength(1)
  })
})
