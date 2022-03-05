import styled from "styled-components";

export const Container = styled.ul`
  background-color: var(--background);
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 1.5rem 0.5rem 6rem;
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
      color: var(--text-title);
      font-weight: 600;

      &.complete {
        text-decoration: line-through;
      }
    }

    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin-top: 1rem;
      color: var(--text-body);

      &.complete {
        display: none;
      }
    }
  }

  footer {
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr;
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
    max-width: 512px;
    object-fit: contain;
  }

  p {
    color: var(--text-title);
    font-size: 1.25rem;
    text-align: center;
  }
`;
