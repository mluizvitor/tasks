import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  width: 100%;
  max-width: 64rem;
  border-radius: 1.5rem 1.5rem 0 0;
  height: calc(100vh - 6rem);
  margin: 0 auto;
  overflow: hidden;
`;

export const ListContainer = styled.ul`
  padding: 1.5rem 0.5rem 3rem;
  list-style: none;
  overflow: auto;
  height: 100%;
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
      color: var(--text-title);
      font-weight: 600;

      &.complete {
        text-decoration: line-through;
      }
    }

    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin-top: 0.5rem;
      color: var(--text-body);

      &.complete {
        display: none;
      }
    }
  }

  button {
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    margin: -0.25rem 0;
    margin-right: -0.25rem;
  }
`;

export const EmptyPage = styled.div`
  padding: 0 1rem;
  display: grid;
  gap: 1rem;
  place-content: center;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    min-height: 8rem;
    max-width: 32rem;
    object-fit: contain;
  }

  p {
    color: var(--text-title);
    font-size: 1.25rem;
    text-align: center;
  }

  div {
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
    background-color: var(--surface);
    padding: 1.5rem;
    border-radius: 1.5rem;

    max-width: 32rem;

    p:first-child {
      font-size: 1rem;
      margin: 0.5rem 0;
    }
  }
`;
