import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.header`
  display: flex;
  min-height: 6rem;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 1.5rem;

  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: var(--surface);
  color: var(--main-color);
  height: 3rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${darken(0.075, "#FCF7F2")};
  }

  svg {
    margin-right: 1rem;
  }

  span {
    font-weight: 500;
    font-size: 1rem;
  }
`;
