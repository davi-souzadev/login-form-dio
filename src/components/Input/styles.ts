import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 2.813rem;


  input {
    width: 100%;
    height: 100%;
    padding: .625rem;
  }

  & p {
    color: #ff0050;
  }
`

export const ErrorMessage = styled.p`
    color: red;
    font-size:12px;
    margin-top:8px;
    margin-left:10px;
`