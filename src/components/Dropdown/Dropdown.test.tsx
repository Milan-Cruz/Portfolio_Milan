import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Dropdown from './Dropdown'

test('renders dropdown with options', () => {
  render(
    <Dropdown
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
      ]}
      onChange={() => {}}
    />
  )
  expect(screen.getByText(/Option 1/i)).toBeVisible()
  expect(screen.getByText(/Option 2/i)).toBeVisible()
})

test('calls onChange when option is selected', () => {
  const handleChange = jest.fn()
  render(
    <Dropdown
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
      ]}
      onChange={handleChange}
    />
  )
  fireEvent.change(screen.getByDisplayValue('Option 1'), {
    target: { value: 'option2' },
  })
  expect(handleChange).toHaveBeenCalledWith('option2')
})

test('dropdown is disabled and non-interactive', () => {
  render(
    <Dropdown
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
      ]}
      onChange={() => {}}
      disabled
    />
  )
  const dropdownElement = screen.getByRole('combobox')
  expect(dropdownElement).toBeDisabled() // Ensure the dropdown is disabled
  expect(dropdownElement).toHaveStyle('cursor: not-allowed') // Ensure the cursor style changes
})
