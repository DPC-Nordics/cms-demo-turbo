import { render, fireEvent, screen } from '@testing-library/react'
import { Card } from '.'

describe('Card', () => {
  it('renders', () => {
    const { queryAllByText } = render(<Card>Test</Card>)
    expect(queryAllByText('Test')).toHaveLength(1)
  })
  it('clicks', () => {
    const handleClick = jest.fn()
    render(<Card onClick={handleClick}>Click Me</Card>)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
