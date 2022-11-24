import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --login-button: #EE5684;
    --bg-color: #6D9AC4;
    --login-title: #626262;
    --form-label: #b2b2b2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: var(--bg-color);
  }
`