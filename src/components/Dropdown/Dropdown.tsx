import React from 'react'
import { DropdownProps } from './Dropdown.types'
import styled from 'styled-components'

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : 'white')};
`

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  disabled = false,
}) => {
  return (
    <StyledSelect
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  )
}

export default Dropdown
