import React from 'react'
import { TableProps } from './Table.types'
import styled from 'styled-components'

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`

const Table: React.FC<TableProps> = ({ children, disabled = false }) => {
  return <StyledTable disabled={disabled}>{children}</StyledTable>
}

export default Table
