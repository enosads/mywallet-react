import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --menus: #4A4A4A;
    --title: #CCCCCC;
    --background: #2F2F2F;
    --selected: #707070;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: var(--title);
  }

  //font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`