import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders card with title and content', () => {
  render(<Card title="Test Title" content="Test Content" />);
  const titleElement = screen.getByText(/Test Title/i);
  const contentElement = screen.getByText(/Test Content/i);
  expect(titleElement).toBeVisible();
  expect(contentElement).toBeVisible();
});

test('applies correct styles when disabled', () => {
  render(<Card title="Disabled Title" content="Disabled Content" disabled />);
  const titleElement = screen.getByText(/Disabled Title/i);
  const contentElement = screen.getByText(/Disabled Content/i);
  expect(titleElement).toHaveStyle('cursor: not-allowed');  // Ensure the cursor is not-allowed
  expect(titleElement).toHaveStyle('opacity: 0.6');  // Ensure opacity is reduced for disabled state
  expect(contentElement).toHaveStyle('color: #a0a0a0');  // Ensure content color is greyed out
});
