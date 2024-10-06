import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Text from './Text';

test('renders the text input with placeholder', () => {
  render(<Text placeholder="Enter text..." value="" onChange={() => {}} />);
  const inputElement = screen.getByPlaceholderText(/Enter text.../i);
  expect(inputElement).toBeVisible();
});

test('calls onChange when text is entered', () => {
  const handleChange = jest.fn();
  render(<Text placeholder="Enter text..." value="" onChange={handleChange} />);
  const inputElement = screen.getByPlaceholderText(/Enter text.../i);
  fireEvent.change(inputElement, { target: { value: 'New text' } });
  expect(handleChange).toHaveBeenCalledTimes(1);
});

test('disables the input when disabled prop is true', () => {
  render(<Text placeholder="Disabled input" value="" onChange={() => {}} disabled />);
  const inputElement = screen.getByPlaceholderText(/Disabled input/i);
  expect(inputElement).toBeDisabled();  // Ensure the input is disabled
});

test('applies correct styles when disabled', () => {
  render(<Text placeholder="Disabled input" value="" onChange={() => {}} disabled />);
  const inputElement = screen.getByPlaceholderText(/Disabled input/i);
  expect(inputElement).toHaveStyle('cursor: not-allowed');  // Ensure the cursor is not-allowed
  expect(inputElement).toHaveStyle('background-color: #f0f0f0');  // Ensure background color changes
  expect(inputElement).toHaveStyle('opacity: 0.6');  // Ensure opacity is reduced
});
