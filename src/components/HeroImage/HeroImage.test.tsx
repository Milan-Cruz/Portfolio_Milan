import React from 'react'
import { render, screen } from '@testing-library/react'
import HeroImage from './HeroImage'

test('renders hero image with children', () => {
  render(
    <HeroImage bgImage="https://via.placeholder.com/1200x400">
      Hero Content
    </HeroImage>
  )
  const heroElement = screen.getByText(/Hero Content/i)
  expect(heroElement).toBeVisible() // Ensure the hero content is visible
})

test('applies correct styles when disabled', () => {
  render(
    <HeroImage bgImage="https://via.placeholder.com/1200x400" disabled>
      Disabled Hero Content
    </HeroImage>
  )
  const heroElement = screen.getByText(/Disabled Hero Content/i)
  expect(heroElement).toHaveStyle('cursor: not-allowed') // Ensure the cursor is not-allowed
  expect(heroElement).toHaveStyle('opacity: 0.6') // Ensure the opacity is reduced
  expect(heroElement).toHaveStyle('color: #a0a0a0') // Ensure the text color changes (if applicable)
})
