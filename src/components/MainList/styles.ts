import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 32px;

  :hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ItemList = styled.li`
  font-weight: 500;
  cursor: pointer;
`;
