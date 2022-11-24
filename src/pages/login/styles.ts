import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  width: 25rem;
  height: 31.25rem;
  border-radius: 0.625rem;
  padding: 1.563rem;
`

export const FormTitle = styled.h1`
  color: var(--login-title);
`