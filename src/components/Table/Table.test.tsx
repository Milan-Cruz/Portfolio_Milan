import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';

test('renders the table with header, rows, and footer', () => {
  render(
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Row 1, Cell 1</TableCell>
          <TableCell>Row 1, Cell 2</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
  expect(screen.getByText(/Header 1/i)).toBeVisible();
  expect(screen.getByText(/Row 1, Cell 1/i)).toBeVisible();
  expect(screen.getByText(/Footer 1/i)).toBeVisible();
});

test('applies correct styles when table is disabled', () => {
  render(
    <Table disabled>
      <TableHeader>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Row 1, Cell 1</TableCell>
          <TableCell>Row 1, Cell 2</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );

  const tableElement = screen.getByRole('table');
  expect(tableElement).toHaveStyle('cursor: not-allowed');  // Ensure the cursor style changes
  expect(tableElement).toHaveStyle('opacity: 0.6');  // Ensure opacity is reduced for disabled state
});
