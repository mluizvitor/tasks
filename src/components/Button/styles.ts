import { transparentize } from "polished";
import styled from "styled-components";

interface ButtonProps {
  variant?:
    | "basic"
    | "header"
    | "colored"
    | "warning"
    | "semitransparent"
    | "transparent";
}

export const Button = styled.button<ButtonProps>`
  height: 3rem;
  padding: 0 0.75rem;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  svg + span {
    margin-left: 0.75rem;
  }

  &:hover {
    filter: brightness(0.9);
  }

  ${(props) => {
    switch (props.variant) {
      case "header":
        return `
        background-color: ${props.theme.buttonVariant.header.mainColor};
        color: ${props.theme.buttonVariant.header.contrastColor}
        `;

      case "colored":
        return `
        background-color: ${props.theme.buttonVariant.colored.mainColor};
        color: ${props.theme.buttonVariant.colored.contrastColor}
        `;

      case "warning":
        return `
        background-color: ${props.theme.buttonVariant.warning.mainColor};
        color: ${props.theme.buttonVariant.warning.contrastColor}
        `;

      case "semitransparent":
        return `
          background-color: ${transparentize(
            0.85,
            props.theme.buttonVariant.semitransparent.mainColor
          )};
          color: ${props.theme.buttonVariant.semitransparent.contrastColor}`;

      case "transparent":
        return `
        background-color: ${props.theme.buttonVariant.transparent.mainColor};
        color: ${props.theme.buttonVariant.transparent.contrastColor}`;

      case "basic":
      default:
        return `
        background-color: ${props.theme.buttonVariant.basic.mainColor};
        color: ${props.theme.buttonVariant.basic.contrastColor}
        `;
    }
  }}
`;

export const ButtonTwoOptions = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 475px) {
    grid-template-columns: 1fr;
  }
`;
