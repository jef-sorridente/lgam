import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    width: 100vw;
    padding-top: 80px;
    height: 100vh;
    top: 0;
    left: 0;
    align-items: center;
  }
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
