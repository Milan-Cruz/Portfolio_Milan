import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Text from './Text'

test('renders the text input with placeholder', () => {
  render(<Text placeholder="Enter text..." value="" onChange={() => {}} />)
  const inputElement = screen.getByPlaceholderText(/Enter text.../i)
  expect(inputElement).toBeVisible()
})

test('calls onChange when text is entered', () => {
  const handleChange = jest.fn()
  render(<Text placeholder="Enter text..." value="" onChange={handleChange} />)
  const inputElement = screen.getByPlaceholderText(/Enter text.../i)
  fireEvent.change(inputElement, { target: { value: 'New text' } })
  expect(handleChange).toHaveBeenCalledTimes(1)
})

test('disables the input when disabled prop is true', () => {
  render(
    <Text placeholder="Disabled input" value="" onChange={() => {}} disabled />
  )
  const inputElement = screen.getByPlaceholderText(/Disabled input/i)
  expect(inputElement).toBeDisabled() // Ensure the input is disabled
})

test('applies correct styles when disabled', () => {
  render(
    <Text placeholder="Disabled input" value="" onChange={() => {}} disabled />
  )
  const inputElement = screen.getByPlaceholderText(/Disabled input/i)

  // Get computed styles for the input element itself
  const styles = window.getComputedStyle(inputElement)

  // Ensure correct styles are applied
  expect(styles.cursor).toBe('not-allowed') // Ensure the cursor is not-allowed
  expect(styles.backgroundColor).toBe('rgb(240, 240, 240)') // Ensure background color changes (rgb equivalent of #f0f0f0)
})
