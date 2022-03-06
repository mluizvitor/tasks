import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  min-height: 6rem;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 1.5rem;

  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 1rem;

    @media (max-width: 475px) {
      button > span {
        display: none;
      }
    }
  }
`;
