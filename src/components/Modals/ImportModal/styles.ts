import styled from "styled-components";

export const ImportContainer = styled.div`
  display: grid;
  gap: 1rem;

  label {
    cursor: pointer;
    min-height: 3.5rem;
    display: flex;

    div {
      background-color: #5c4f4e;
      border-radius: 0.5rem 0 0 0.5rem;
      min-height: 3.5rem;
      min-width: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: #fcf7f2;
      }
    }

    span {
      display: flex;
      align-items: center;
      min-height: 3.5rem;
      width: 100%;
      background: #8a7d7c;
      color: #fcf7f2;
      border-radius: 0 0.5rem 0.5rem 0;
      padding: 0 1rem;
    }
  }
  input[type="file"] {
    display: none;
  }
`;
