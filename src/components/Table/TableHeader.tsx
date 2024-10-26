import React from 'react'
import styled from 'styled-components'

const StyledTableHeader = styled.thead<{ disabled?: boolean }>`
  background-color: #f5f5f5;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`

export type TableHeaderProps = {
  children: React.ReactNode
  disabled?: boolean
}

const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  disabled = false,
}) => {
  return <StyledTableHeader disabled={disabled}>{children}</StyledTableHeader>
}

export default TableHeader
