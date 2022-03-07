import styled from "styled-components";

export const ImportContainer = styled.div`
  display: grid;
  gap: 1rem;

  label {
    cursor: pointer;
    min-height: 3.5rem;
    display: flex;

    div {
      background-color: var(--text-title);
      border-radius: 0.5rem 0 0 0.5rem;
      min-height: 3.5rem;
      min-width: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: var(--surface);
      }
    }

    span {
      display: flex;
      align-items: center;
      min-height: 3.5rem;
      width: 100%;
      background: var(--text-body);
      color: var(--surface);
      border-radius: 0 0.5rem 0.5rem 0;
      padding: 0 1rem;
    }
  }
  input[type="file"] {
    display: none;
  }
`;
