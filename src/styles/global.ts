import { darken, transparentize, saturate, lighten } from "polished";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --toastify-toast-width: 24rem;
    --toastify-toast-min-height: 4rem;
    --toastify-font-family: 'Work Sans', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition-property: background, background-color, color  ;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
  }

  
  body, button, input, textarea, span { 
    font-family: 'Work Sans', sans-serif;
    font-size: 1rem;
  }
  
  body {
    background-color: ${(props) => props.theme.mainColorPage};
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong, button {
    font-weight: 600;
  }

  body {
    overflow: hidden;
  }
  
  button { 
    cursor: pointer;
  }
  
  h1 {
    color: ${(props) => props.theme.textTitle};
    font-size: 1.5rem;
    line-height: 2rem;
  }

  p {
    color: ${(props) => props.theme.textBody};
  }

  a {
    color: ${(props) => props.theme.mainColor};
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
    border: 2px solid ${(props) => props.theme.buttonVariant.colored.mainColor};
    border-radius: 12px;

    display: grid;
    place-content: center;

    &::before {
      content: "";
      width: 1.5rem;
      height: 1.5rem;
      transform: scale(1);

      background-color: transparent;
      transform-origin: center;
      clip-path: polygon(25.000% 41.667%, 16.667% 50.000%, 41.667% 75.000%, 83.333% 33.333%, 75.000% 25.000%, 41.667% 58.333%)

    }
    
    &:checked {
      background-color: ${(props) =>
        props.theme.buttonVariant.colored.mainColor};
    }
    &:checked::before {
      background-color: ${(props) =>
        props.theme.buttonVariant.colored.contrastColor};
      transform: scale(1);
    }
  }

  .modal-body {
    width: 100%;
    max-width: 512px;
    background-color: ${(props) => props.theme.surface};
    padding: 1.5rem;
    margin: 1.5rem;
    border-radius: 1.5rem;
    position: relative;
    display: grid;
    gap: 1rem;

    h1:first-of-type {
      margin-right: 1.5rem;
    }
  }

  .modal-overlay {
    position: fixed;
    background-color: ${(props) =>
      darken(0.75, transparentize(0.3, props.theme.mainColor))};
    inset: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: ${(props) => props.theme.textBody};
    cursor: pointer;
    opacity: 0.5;

    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
  .tasks-toastify-success,
  .tasks-toastify-error {
    border-radius: 1rem;
    padding: 1rem 1rem;
    color: ${(props) => props.theme.toast.onToast};

    button {
      color: ${(props) => props.theme.toast.onToast};
      opacity: 0.5;
    }

    @media (max-width: 470px) {
      margin: 1.5rem;
    }
  }
  .tasks-toastify-success {
    background-color: ${(props) => props.theme.toast.success};
  }

  .tasks-toastify-success-progress {
    background: ${(props) =>
      lighten(0.25, saturate(0.3, props.theme.toast.success))};
  }
  
  .tasks-toastify-error {
    background-color: ${(props) => props.theme.toast.error}
  }

  .tasks-toastify-error-progress {
    background: ${(props) =>
      lighten(0.25, saturate(0.3, props.theme.toast.error))};
  }

  .hidden {
    opacity: 0;
    display: none;
  }

  .disabled {
    pointer-events: none;  
    opacity: 0.5;
    }

`;
