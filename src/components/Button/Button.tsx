import React from 'react';
import styled from 'styled-components';

// Exporting ButtonProps so it can be used elsewhere (e.g., Storybook)
export type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

const StyledButton = styled.button<{ disabled: boolean }>`
  padding: 10px 20px;
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'blue')};
  color: white;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  border: none;
  border-radius: 5px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.6 : 0.8)};
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <StyledButton onClick={disabled ? undefined : onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
