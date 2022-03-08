import { transparentize } from "polished";
import styled from "styled-components";

interface ButtonProps {
  variant?: "basic" | "colored" | "warning" | "semitransparent";
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
      case "colored":
        return `
        background-color: ${props.theme.variant.colored.mainColor};
        color: ${props.theme.variant.colored.contrastColor}
        `;

      case "warning":
        return `
        background-color: ${props.theme.variant.warning.mainColor};
        color: ${props.theme.variant.warning.contrastColor}
        `;

      case "semitransparent":
        return `
        background-color: ${transparentize(
          0.85,
          props.theme.variant.semitransparent.mainColor
        )};
        color: ${props.theme.variant.semitransparent.contrastColor}`;

      case "basic":
      default:
        return `
        background-color: ${props.theme.variant.basic.mainColor};
        color: ${props.theme.variant.basic.contrastColor}
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
