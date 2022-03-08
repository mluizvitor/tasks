import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  gap: 1rem;
  align-items: center;

  span {
    font-size: 1.5rem;
  }
  p {
    color: ${(props) => props.theme.toast.onToast};
  }
`;
