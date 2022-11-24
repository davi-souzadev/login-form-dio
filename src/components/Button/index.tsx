import React from 'react'
import { ButtonContainer } from './styles'
import { IButtonContainer } from './types'

export function Button({ title, onClick, ...rest}: IButtonContainer) {
  return (
    <ButtonContainer onClick={onClick} {...rest}>
      {title}
    </ButtonContainer>
  )
}
