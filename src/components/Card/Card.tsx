import React from 'react';
import { CardProps } from './Card.types';
import styled from 'styled-components';

const StyledCard = styled.div<{ disabled?: boolean }>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : 'white')};
  color: ${({ disabled }) => (disabled ? '#a0a0a0' : 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease, background-color 0.3s ease;
`;

const Card: React.FC<CardProps> = ({ title, content, disabled = false }) => {
  return (
    <StyledCard disabled={disabled}>
      <h2>{title}</h2>
      <p>{content}</p>
    </StyledCard>
  );
};

export default Card;
