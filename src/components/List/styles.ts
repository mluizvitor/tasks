import styled from "styled-components";

export const ListMenu = styled.ul`
  margin: 0 -1.5rem;
  list-style: none;
`;

export const ListMenuItem = styled.li`
  min-height: 3.5rem;
  padding: 0 1.5rem;
  color: ${(props) => props.theme.textTitle};
  display: flex;
  gap: 0.75rem;
  align-items: center;
  cursor: pointer;

  label + input[type="checkbox"] {
    margin-left: auto;
  }

  &.danger {
    color: ${(props) => props.theme.buttonVariant.colored.mainColor};
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
