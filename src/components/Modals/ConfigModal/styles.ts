import styled from "styled-components";

export const ConfigContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

export const MenuInfo = styled.footer`
  text-align: center;
  color: ${(props) => props.theme.textBody};
`;
