import React from 'react'
import styled from 'styled-components'

const StyledTableCell = styled.td<{ disabled?: boolean }>`
  padding: 12px;
  border: 1px solid #ddd;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`

export type TableCellProps = {
  children: React.ReactNode
  disabled?: boolean
}

const TableCell: React.FC<TableCellProps> = ({
  children,
  disabled = false,
}) => {
  return <StyledTableCell disabled={disabled}>{children}</StyledTableCell>
}

export default TableCell
