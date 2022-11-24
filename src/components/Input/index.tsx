import { Controller } from "react-hook-form";
import { InputContainer, ErrorMessage } from './styles'
import { IInputProps } from './types'

export function Input({ control, name, errorMessage, label, ...rest }: IInputProps) {
  return (
    <>
      <InputContainer>
        <span>{label}</span>
        <Controller
          control={control}
          name={name}
          render={({field: { onChange, onBlur, ref }}) => <input 
            {...rest} 
            onChange={onChange}
            onBlur={onBlur}
            
          />}
        />
        {errorMessage && <p>{errorMessage}</p>}
      </InputContainer>
    </>
  )
}
