import styled from "styled-components";

export const ConfigContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

export const MenuList = styled.ul`
  margin: 0 -1.5rem;
  list-style: none;

  li {
    min-height: 3.5rem;
    padding: 0 1.5rem;
    color: ${(props) => props.theme.textTitle};
    display: flex;
    gap: 0.75rem;
    align-items: center;
    cursor: pointer;

    &.danger {
      color: ${(props) => props.theme.mainColor};
    }

    &:hover {
      background-color: ${(props) => props.theme.background};
    }
  }
`;

export const MenuInfo = styled.footer`
  text-align: center;
  color: ${(props) => props.theme.textBody};
`;
