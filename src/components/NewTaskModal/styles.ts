import styled from "styled-components";

export const NewTaskForm = styled.form`
  display: grid;
  gap: 1rem;

  h1 {
    color: var(--text-title);
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5rem;
  }

  input,
  textarea {
    color: var(--text-title);
    border-radius: 0.5rem;
  }

  input {
    height: 3.5rem;
    padding: 0 1rem;
  }

  textarea {
    height: 7rem;
    padding: 0.875rem 1rem;
    resize: none;
  }

  input,
  textarea {
    background-color: var(--background);
    border: 2px solid var(--background);

    &:focus-visible {
      border-color: var(--main-color);
    }
  }
`;
