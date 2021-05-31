import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --menus: #4A4A4A;
    --title: #CCCCCC;
    --background: #2F2F2F;
    --selected: #707070;
    --red: #E52E4D;
    --green: #1B9E77;
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

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
  .content{
    display:flex;
  }

`