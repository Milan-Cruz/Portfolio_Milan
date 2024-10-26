import React from 'react'
import { ImgProps } from './Img.types'
import styled from 'styled-components'

const StyledImg = styled.img<{ disabled?: boolean }>`
  max-width: 100%;
  height: auto;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: opacity 0.3s ease;
`

const Img: React.FC<ImgProps> = ({ src, alt, disabled = false }) => {
  return <StyledImg src={src} alt={alt} disabled={disabled} />
}

export default Img
