import React from 'react'
import { LabelProps } from './Label.types'
import styled from 'styled-components'

const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-size: 16px;
  color: ${({ disabled }) => (disabled ? '#a0a0a0' : 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: block;
  margin-bottom: 8px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition:
    color 0.3s ease,
    opacity 0.3s ease;
`

const Label: React.FC<LabelProps> = ({ text, htmlFor, disabled = false }) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled}>
      {text}
    </StyledLabel>
  )
}

export default Label
