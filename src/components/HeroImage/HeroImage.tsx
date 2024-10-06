import React from 'react';
import { HeroImageProps } from './HeroImage.types';
import styled from 'styled-components';

const StyledHero = styled.div<{ bgImage: string; disabled?: boolean }>`
  background-image: url(${({ bgImage }) => bgImage});
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ disabled }) => (disabled ? '#a0a0a0' : 'white')};
  font-size: 24px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease, color 0.3s ease;
`;

const HeroImage: React.FC<HeroImageProps> = ({ bgImage, children, disabled = false }) => {
  return <StyledHero bgImage={bgImage} disabled={disabled}>{children}</StyledHero>;
};

export default HeroImage;
