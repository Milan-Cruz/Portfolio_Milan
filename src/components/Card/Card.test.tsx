import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from './Card'

test('renders card with title and content', () => {
  render(<Card title="Test Title" content="Test Content" />)
  const titleElement = screen.getByText(/Test Title/i)
  const contentElement = screen.getByText(/Test Content/i)
  expect(titleElement).toBeVisible()
  expect(contentElement).toBeVisible()
})

test('applies correct styles when disabled', () => {
  render(<Card title="Disabled Title" content="Disabled Content" disabled />)
  const titleElement = screen.getByText(/Disabled Title/i)
  // const contentElement = screen.getByText(/Disabled Content/i);

  // Get the parent element that has the styles applied
  const parentElement = titleElement.parentElement

  // Ensure the parent element exists
  expect(parentElement).not.toBeNull()

  // Use getComputedStyle to verify the styles
  const styles = window.getComputedStyle(parentElement!)

  expect(styles.cursor).toBe('not-allowed') // Ensure the cursor is not-allowed
  expect(styles.opacity).toBe('0.6') // Ensure opacity is reduced for disabled state
  expect(styles.color).toBe('rgb(160, 160, 160)') // Ensure content color is greyed out (rgb equivalent of #a0a0a0)
})
