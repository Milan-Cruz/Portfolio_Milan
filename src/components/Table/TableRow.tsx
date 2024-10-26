import React from 'react'
import styled from 'styled-components'

const StyledTableRow = styled.tr<{ disabled?: boolean }>`
  border-bottom: 1px solid #ddd;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`

export type TableRowProps = {
  children: React.ReactNode
  disabled?: boolean
}

const TableRow: React.FC<TableRowProps> = ({ children, disabled = false }) => {
  return <StyledTableRow disabled={disabled}>{children}</StyledTableRow>
}

export default TableRow
