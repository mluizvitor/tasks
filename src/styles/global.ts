import { darken, transparentize, saturate, lighten } from "polished";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {

    --main-color: #D8605B;

    --text-title: #5C4F4E;
    --text-body: #948685;

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
    width: 1.5rem;
    height: 1.5rem;
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
      clip-path: polygon(25.000% 41.667%, 16.667% 50.000%, 41.667% 75.000%, 83.333% 33.333%, 75.000% 25.000%, 41.667% 58.333%)

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
    background-color: ${darken(0.25, transparentize(0.25, "#8C3E3B"))};
    inset: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tasks-toastify-success,
  .tasks-toastify-error {
    font-size: 1rem;
    font-family: Inter, sans-serif;
    color: var(--surface);
    border-radius: 1rem;

    button > svg {
      color: var(--surface);
    }

    @media (max-width: 470px) {
      margin: 1.5rem 1.5rem 0 ;
    }
  }
  .tasks-toastify-success {
    background-color: var(--success);
  }

  .tasks-toastify-success-progress {
    background: ${lighten(0.25, saturate(0.3, "#2D403B"))};
  }
  
  .tasks-toastify-error {
    background-color: var(--error)
  }

  .tasks-toastify-error-progress {
    background: ${lighten(0.25, saturate(0.3, "#7C2727"))};
  }

`;
