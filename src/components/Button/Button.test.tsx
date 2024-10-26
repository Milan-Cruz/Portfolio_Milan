// Button.test.tsx
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

test('renders the button with correct label', () => {
  render(<Button label="Click Me" onClick={() => {}} />)
  const buttonElement = screen.getByText(/Click Me/i)
  expect(buttonElement).toBeVisible()
})

test('button is disabled when disabled prop is true', () => {
  render(<Button label="Disabled" onClick={() => {}} disabled />)
  const buttonElement = screen.getByText(/Disabled/i)
  expect(buttonElement).toBeDisabled()
})

test('button has correct styles when disabled', () => {
  render(<Button label="Disabled" onClick={() => {}} disabled />)
  const buttonElement = screen.getByText(/Disabled/i)
  expect(buttonElement).toHaveStyle('cursor: not-allowed')
  expect(buttonElement).toHaveStyle('opacity: 0.6')
})

test('onClick is called when button is clicked and not disabled', () => {
  const handleClick = jest.fn()
  render(<Button label="Click Me" onClick={handleClick} />)
  const buttonElement = screen.getByText(/Click Me/i)
  fireEvent.click(buttonElement)
  expect(handleClick).toHaveBeenCalledTimes(1)
})

test('onClick is not called when button is disabled', () => {
  const handleClick = jest.fn()
  render(<Button label="Disabled" onClick={handleClick} disabled />)
  const buttonElement = screen.getByText(/Disabled/i)
  fireEvent.click(buttonElement)
  expect(handleClick).not.toHaveBeenCalled()
})
