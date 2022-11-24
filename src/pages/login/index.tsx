import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, FormTitle, LoginContainer } from './styles'
import { IFormLogin } from './types'

const schema = yup.object({
  email: yup.string().email('Digite um e-mail válido!').required('Campo obrigatório!'),
  password: yup.string().min(4, 'Mínimo de 4 caracteres').required('Campo obrigatório!'),
}).required();


export function Login() {

  const { 
    watch, 
    control, 
    formState: { errors, isValid }
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  console.log(isValid)

  return (
    <Container>
      <LoginContainer>
        <FormTitle>Login</FormTitle>
        <Input
          label="E-mail:"
          name="email"
          placeholder="Email"
          control={control}
          errorMessage={errors?.email?.message}
        />
        <Input
          label="Senha:"
          name="password"
          placeholder="Senha"
          control={control}
          errorMessage={errors?.password?.message}
          type="password"
        />
        <Button 
        title="Login"
        disabled={!isValid}
      />
      </LoginContainer>
    </Container>
  )
}
