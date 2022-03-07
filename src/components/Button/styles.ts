import { darken, transparentize } from "polished";
import styled from "styled-components";

type ButtonProps = {
  color: string;
  bgColor: string;
  bgTransparency?: number;
};

export const ButtonContainer = styled.button<ButtonProps>`
  color: ${(props) => (props.color ? props.color : "var(--surface)")};
  background-color: ${(props) => {
    if (props.bgTransparency) {
      return transparentize(props.bgTransparency, props.bgColor);
    } else {
      return props.bgColor;
    }
  }};

  height: 3rem;
  padding: 0 0.75rem;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => darken(0.05, props.bgColor)};
  }

  svg + span {
    margin-left: 0.75rem;
  }
`;

export const ButtonTwoOptions = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 475px) {
    grid-template-columns: 1fr;
  }
`;
