import React from 'react';
import { TextProps } from './Text.types';
import styled from 'styled-components';

const StyledInput = styled.input<{ disabled: boolean }>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  transition: background-color 0.3s ease;
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : 'white')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};

  &:focus {
    outline: none;
    border-color: blue;
  }
`;

const Text: React.FC<TextProps> = ({ placeholder, value, onChange, disabled = false }) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Text;
