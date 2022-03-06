import styled from "styled-components";

export const ConfigContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

export const MenuList = styled.ul`
  margin: 0 -1.5rem;
  list-style: none;

  li {
    min-height: 3rem;
    padding: 0 1.5rem;
    color: var(--text-title);
    display: flex;
    gap: 0.75rem;
    align-items: center;
    cursor: pointer;

    &.disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }

    &.danger {
      color: var(--main-color);
    }

    &:hover {
      background-color: var(--background);
    }
  }
`;

export const MenuInfo = styled.footer`
  text-align: center;
  color: var(--text-body);
`;
