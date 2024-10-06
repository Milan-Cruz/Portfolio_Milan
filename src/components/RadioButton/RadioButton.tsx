import React from 'react';
import { RadioButtonProps } from './RadioButton.types';
import styled from 'styled-components';

const StyledRadioButton = styled.input<{ disabled?: boolean }>`
  margin-right: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, onChange, checked, disabled = false }) => {
  return (
    <label>
      <StyledRadioButton
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        disabled={disabled}
      />
      {label}
    </label>
  );
};

export default RadioButton;
