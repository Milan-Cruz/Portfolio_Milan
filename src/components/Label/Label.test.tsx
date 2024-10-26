import React from 'react'
import { render, screen } from '@testing-library/react'
import Label from './Label'

test('renders the label with correct text', () => {
  render(<Label text="Label Text" />)
  const labelElement = screen.getByText(/Label Text/i)
  expect(labelElement).toBeVisible() // Ensure the label is visible
})

test('applies correct styles when disabled', () => {
  render(<Label text="Disabled Label" disabled />)
  const labelElement = screen.getByText(/Disabled Label/i)
  expect(labelElement).toHaveStyle('cursor: not-allowed') // Ensure the cursor is not-allowed
  expect(labelElement).toHaveStyle('color: #a0a0a0') // Ensure the text color changes
  expect(labelElement).toHaveStyle('opacity: 0.6') // Ensure opacity changes
})
