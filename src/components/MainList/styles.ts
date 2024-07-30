import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 32px;
`;

export const ItemList = styled.li`
  font-weight: 500;
  cursor: pointer;

  a {
    color: #dfdfd6;
  }

  a:hover {
    color: #fff;
  }
`;
