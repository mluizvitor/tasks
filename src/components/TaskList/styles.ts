import styled from "styled-components";
import { cssVar, transparentize } from "polished";

export const Container = styled.ul`
  background-color: var(--background);
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 1.5rem 0.5rem;
  border-radius: 1.5rem 1.5rem 0 0;
  list-style: none;
  height: calc(100vh - 6rem);
  overflow: auto;
`;

export const ListItem = styled.li`
  background-color: var(--surface);
  padding: 1.5rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  align-items: flex-start;

  & + li {
    margin-top: 1rem;
  }

  div {
    flex: 1;

    strong {
      font-size: 1.25rem;
      color: #2e4e6b;
      font-weight: 600;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin-top: 1rem;
      color: #7e8a95;
    }
  }

  footer {
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  color: var(--main-color);
  border: none;
  border-radius: 0.5rem;
  background-color: ${transparentize(0.9, "#D8605B")};
  height: 40px;
  padding: 0 16px;

  font-size: 1rem;
  display: flex;
  align-items: center;

  span {
    font-weight: 500;
  }

  svg + span {
    margin-left: 8px;
  }
`;
