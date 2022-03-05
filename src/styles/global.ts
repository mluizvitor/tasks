import { transparentize } from "polished";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {

    --main-color: #D8605B;

    --text-title: #8C3E3B;
    --text-body: #AE7672;

    --surface: #FCF7F2;
    --background: #F7EDE1;

    --success: #2D403B;
    --error: #7C2727;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: var(--main-color);
  }

  body, button, input, textarea { 
    font-family: Inter, sans-serif;
    font-size: 1rem;
  }

  button {
    font-weight: 600;
  }

  body {
    overflow: hidden;
  }

  button { 
    cursor: pointer;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: none;
    margin: 0;
    cursor: pointer;

    font: inherit;
    color: red;
    width: 24px;
    height: 24px;
    border: 2px solid var(--main-color);
    border-radius: 12px;

    display: grid;
    place-content: center;

    &::before {
      content: "";
      width: 1.5rem;
      height: 1.5rem;
      transform: scale(1);

      background-color: var(--surface);
      transform-origin: center;
      clip-path: polygon(6px 10px, 4px 12px, 10px 18px, 20px 8px, 18px 6px, 10px 14px, 6px 10px);

    }
    
    &:checked {
      background-color: var(--main-color);
    }
    &:checked::before {
      transform: scale(1);
    }
  }

  .modal-body {
    width: 100%;
    max-width: 512px;
    background-color: var(--surface);
    padding: 1.5rem;
    margin: 1.5rem;
    border-radius: 1.5rem;
  }

  .modal-overlay {
    position: fixed;
    background-color: ${transparentize(0.25, "#8C3E3B")};
    inset: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;
