import React from 'react'
import { render, screen } from '@testing-library/react'
import Img from './Img'

test('renders image with alt text', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Test image" />)
  const imgElement = screen.getByAltText(/Test image/i)
  expect(imgElement).toBeVisible() // Ensure the image is visible
})

test('applies correct styles when disabled', () => {
  render(
    <Img src="https://via.placeholder.com/150" alt="Disabled image" disabled />
  )
  const imgElement = screen.getByAltText(/Disabled image/i)
  expect(imgElement).toHaveStyle('cursor: not-allowed') // Ensure the cursor is not-allowed
  expect(imgElement).toHaveStyle('opacity: 0.5') // Ensure the opacity is lowered
})
