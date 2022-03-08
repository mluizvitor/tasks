import styled from "styled-components";

export const NewTaskForm = styled.form`
  display: grid;
  gap: 1rem;

  input,
  textarea {
    color: ${(props) => props.theme.textTitle};
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
    background-color: ${(props) => props.theme.background};
    border: 2px solid ${(props) => props.theme.background};

    &:focus-visible {
      border-color: ${(props) => props.theme.mainColor};
    }
  }
`;
