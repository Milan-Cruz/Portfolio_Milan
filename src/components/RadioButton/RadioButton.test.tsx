import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import RadioButton from './RadioButton'

test('renders the radio button with label', () => {
  render(<RadioButton label="Option 1" value="option1" onChange={() => {}} />)
  expect(screen.getByLabelText(/Option 1/i)).toBeVisible()
})

test('calls onChange when radio button is selected', () => {
  const handleChange = jest.fn()
  render(
    <RadioButton
      label="Option 1"
      value="option1"
      onChange={handleChange}
      checked={false}
    />
  )
  fireEvent.click(screen.getByLabelText(/Option 1/i))
  expect(handleChange).toHaveBeenCalledWith('option1')
})

test('radio button is disabled and non-interactive', () => {
  render(
    <RadioButton
      label="Disabled Option"
      value="option1"
      onChange={() => {}}
      disabled
    />
  )
  const radioButtonElement = screen.getByLabelText(/Disabled Option/i)
  expect(radioButtonElement).toBeDisabled() // Ensure the radio button is disabled
  expect(radioButtonElement).toHaveStyle('cursor: not-allowed') // Ensure the cursor style changes
  expect(radioButtonElement).toHaveStyle('opacity: 0.6') // Ensure opacity is reduced for disabled state
})
