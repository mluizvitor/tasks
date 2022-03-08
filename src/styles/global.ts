import { darken, transparentize, saturate, lighten } from "polished";
import { createGlobalStyle, DefaultTheme } from "styled-components";

export const sunsetTheme: DefaultTheme = {
  mainColor: "#D8605B",
  textTitle: "#4c4141",
  textBody: "#756a69",
  surface: "#FCF7F2",
  background: "#F7EDE1",
  success: "#2D403B",
  error: "#513c27",

  variant: {
    basic: {
      mainColor: "#F7EDE1",
      contrastColor: "#4c4141",
    },
    colored: {
      mainColor: "#D8605B",
      contrastColor: "#FCF7F2",
    },
    semitransparent: {
      mainColor: "#D8605B",
      contrastColor: "#D8605B",
    },
    warning: {
      mainColor: darken(0.2, "#D8605B"),
      contrastColor: "#FCF7F2",
    },
  },
};

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
  }

  
  body, button, input, textarea, span { 
    font-family: 'Work Sans', sans-serif;
    font-size: 1rem;
  }
  
  body {
    background-color: ${(props) => props.theme.mainColor};
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
    font-size: 1.25rem;
    line-height: 1.5rem;
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
    border: 2px solid ${(props) => props.theme.mainColor};
    border-radius: 12px;

    display: grid;
    place-content: center;

    &::before {
      content: "";
      width: 1.5rem;
      height: 1.5rem;
      transform: scale(1);

      background-color: ${(props) => props.theme.surface};
      transform-origin: center;
      clip-path: polygon(25.000% 41.667%, 16.667% 50.000%, 41.667% 75.000%, 83.333% 33.333%, 75.000% 25.000%, 41.667% 58.333%)

    }
    
    &:checked {
      background-color: ${(props) => props.theme.mainColor};
    }
    &:checked::before {
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
  }

  .modal-overlay {
    position: fixed;
    background-color: ${(props) =>
      darken(0.5, transparentize(0.25, props.theme.mainColor))};
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
  }
  .tasks-toastify-success,
  .tasks-toastify-error {
    border-radius: 1rem;
    padding: 1rem 1rem;

    button > svg {
      color: ${(props) => props.theme.surface};
    }

    @media (max-width: 470px) {
      margin: 1.5rem;
    }
  }
  .tasks-toastify-success {
    background-color: ${(props) => props.theme.success};
  }

  .tasks-toastify-success-progress {
    background: ${(props) => lighten(0.25, saturate(0.3, props.theme.success))};
  }
  
  .tasks-toastify-error {
    background-color: ${(props) => props.theme.error}
  }

  .tasks-toastify-error-progress {
    background: ${(props) => lighten(0.25, saturate(0.3, props.theme.error))};
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
